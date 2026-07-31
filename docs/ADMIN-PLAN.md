# Admin Panel & AWS Platform — Plan

Status: **draft for discussion**. Nothing here is built yet.
Target stack: Next.js 16.2.12 (App Router) + AWS.

### Decisions locked

| Decision | Choice |
| --- | --- |
| Admin panel | **Custom-built**, living at `/admin` in this Next.js app — not a third-party CMS |
| AWS compute | **ECS Fargate + ALB + CloudFront** (Docker, `next start`) |

Everything in §6.2 (the self-hosting gotchas) is therefore in scope and mandatory, not optional.

---

## 1. Where we are today

Every word, number and link on the site is a hardcoded TypeScript constant:

- `src/lib/site.ts` — 17 exported collections: `site`, `nav`, `heroSlides`, `sectors`,
  `companies`, `footprints`, `locations`, `milestones`, `leadership`, `news`, `reports`,
  `quarterlies`, `projects`, `esgPillars`, `spotlights`, `groupSites`, `openRoles`
- `src/lib/businesses.ts` — 5 business entities, each with nested `intro`/`stats`/`capabilities`/`assets`
- Per-page SEO lives in each `page.tsx` as `export const metadata` (and `generateMetadata` for `/businesses/[slug]`)
- Some content is *inline in the page component* (e.g. the `values` array in `about-us/page.tsx`)
- `public/` holds only the 5 stock Next.js SVGs — there is **no real image pipeline yet**

So the work is not "add an admin panel to a CMS". It is "introduce a content layer, move
the site onto it, then put an admin panel on top". That ordering matters and drives the phasing.

---

## 2. The core design principle: schema-driven, not hand-built screens

The requirement is *"each thing needs to be configurable"* and *"as the website takes shape we
must add or remove things"*. If we hand-build an admin screen per content type, every new
section on the site becomes a second, parallel piece of admin work — and the two drift apart.

**Instead: one schema registry drives everything.**

```
src/cms/blocks/hero-carousel.ts
  ├── type:     "hero-carousel"
  ├── label:    "Hero Carousel"
  ├── schema:   Zod object (slides[]: { kicker?, title, body, href, cta, art, image? })
  ├── defaults: seed value for a newly added block
  └── Component: the React renderer already in src/components/Hero.tsx
```

From that single definition we get, for free:

| Derived from schema | How |
| --- | --- |
| Admin edit form | Generic form renderer walks the Zod schema → field widgets |
| Save-time validation | `schema.parse()` in the Server Action |
| TypeScript types | `z.infer<typeof schema>` — renderers stay type-safe |
| Public rendering | `Component` receives the parsed, typed data |

**Adding a new section type later = add one file. Zero admin-panel changes.** That is the
mechanism that keeps this open-ended, and it is the single most important decision in this plan.

### Field widget vocabulary

The form renderer needs a fixed set of primitives. Everything on the current site maps onto these:

`text` · `textarea` · `richText` (limited marks — the site already uses `**bold**` in hero copy)
· `number` · `boolean` · `select` · `date` · `url` / `internalLink` (picks from real routes)
· `image` (media library) · `file` (PDFs for investors) · `colorTone` (`gold`/`navy`/`ember`)
· `icon` (enum-backed, e.g. `SpotlightIcon`) · `array<T>` (sortable) · `object<T>` · `reference<Collection>`
· `coordinate` (the `locations` map x/y — ideally a click-on-map picker)

### Scope boundary — recommended

**Structured editing inside fixed page templates**, *not* a free-form drag-anything page builder.
Editors can edit any field, reorder/add/remove blocks from an allowed list per template, and
toggle sections on/off. They cannot invent arbitrary layouts.

Rationale: this is a listed infrastructure company's corporate site. Design integrity and
disclosure accuracy matter more than layout freedom, and a full page builder is roughly
3× the build for capability nobody here has asked for. If you want true drag-and-drop later,
the block model above is exactly the substrate it would be built on — so this is not a dead end.

---

## 3. Content model

Four tiers:

**A. Globals (singletons)** — edited once, used everywhere
`site` identity (name, short, legal, tagline), contact block, registered office, CIN,
primary navigation (tree builder), footer columns, quick links, social profiles,
default/fallback SEO, analytics IDs.

**B. Pages** — one record per route
`slug`, internal title, template, status (`draft`/`published`/`scheduled`), SEO block,
ordered `sections[]` (blocks), publish timestamps, author, version pointer.
Covers `/`, `/about-us`, `/businesses`, `/projects`, `/investors`, `/sustainability`,
`/newsroom`, `/careers`, `/contact`, plus `not-found`.

**C. Collections** — repeatable entities, some with their own detail routes
`businesses` (→ `/businesses/[slug]`), `news`, `projects` (operational/upcoming/highways),
`reports` + `quarterlies`, `leadership`, `milestones`, `openRoles`, `locations`,
`esgPillars`, `spotlights`, `groupSites`, `sectors`.

Collections get list/create/edit/reorder/archive, and each item carries its own SEO block
if it has a public URL.

**D. Media** — S3-backed library
Images and documents, with alt text, caption, credit, focal point, tags, and
*usage tracking* (which pages reference this asset — so nobody deletes a live hero image).

### SEO — per page and per collection item

Every Page and every routed Collection item carries the same `seo` object:

- Meta title (with template preview + pixel/character counter against the
  existing `%s | Ideal Engineering` template in `layout.tsx`)
- Meta description
- Canonical URL override
- Open Graph: title, description, image, type
- Twitter/X card type + image
- `robots`: index/noindex, follow/nofollow
- JSON-LD structured data (Organization on globals; NewsArticle for newsroom;
  BreadcrumbList generated automatically from the existing `crumbs` prop)
- Sitemap controls: include/exclude, `changefreq`, `priority`

Plus site-wide SEO tooling in the admin:

- `robots.txt` editor
- `sitemap.xml` generated from the DB (Next `app/sitemap.ts`) — not hand-maintained
- **Redirect manager** (from → to, 301/308) — essential the moment URLs start changing
- OG image: uploaded per page, with a generated fallback via `next/og`

---

## 4. Admin panel — feature map

```
/admin
├── Dashboard            recent edits, scheduled publishes, unresolved form submissions
├── Pages                list → edit (Content | SEO | Settings tabs), preview, publish
├── Collections          businesses, news, projects, reports, leadership, roles, locations, …
├── Media                S3 library, upload, alt text, focal point, usage map
├── Navigation           header tree + footer columns + quick links builder
├── Globals              identity, contact, registered office, social, analytics
├── SEO                  robots.txt, sitemap controls, redirects, JSON-LD defaults
├── Forms                contact + careers submissions, export CSV, notification routing
├── Users & Roles        Cognito-backed; Admin / Editor / Contributor / Viewer
└── Activity             audit log, version history, diff & restore
```

### Workflow

`Draft → In review → Published`, with **scheduled publishing** and **version history with diff + one-click restore**.

This is not gold-plating for this particular site: the `/investors` page carries SEBI LODR
disclosures, financial results and shareholder information. Content changes there want an
approval step and an immutable, timestamped audit trail — who changed which number, when,
and what it said before. Build the audit log from day one; retrofitting it is painful.

---

## 5. Rendering & cache strategy (Next.js 16 specifics)

⚠️ These differ from older Next.js. Verified against `node_modules/next/dist/docs`.

**Enable Cache Components.** `next.config.ts` is currently bare — no `cacheComponents`.
Turning it on gives us the `use cache` / `cacheTag` / `updateTag` model, which is precisely
what a CMS wants. The Next docs say it explicitly:

> "For content management systems with update mechanisms, use tags with longer cache
> durations and rely on `revalidateTag` to refresh content when it actually changes,
> rather than expiring the cache preemptively."

Pattern:

```ts
// read path — cached indefinitely, invalidated only on publish
async function getPage(slug: string) {
  'use cache'
  cacheTag(`page:${slug}`)
  cacheLife('max')
  return db.query…
}

// write path — Server Action in the admin
updateTag(`page:${slug}`)   // read-your-own-writes: editor sees the change immediately
```

- `updateTag` — Server Actions only, expires immediately. Use for the editor's own publish.
- `revalidateTag` — Server Actions *and* Route Handlers, stale-while-revalidate. Use for
  bulk/background invalidation (e.g. a globals change touching every page).
- Tag granularity: `page:<slug>`, `collection:<name>`, `item:<collection>:<id>`, `globals`.

**Preview uses Draft Mode**, not a separate preview deployment. `draftMode().enable()` sets the
`__prerender_bypass` cookie; that request then bypasses `use cache`, ISR and the fetch cache
entirely, while every other visitor keeps the cached page. Admin "Preview" opens
`/api/draft?secret=…&slug=…`, which must validate the secret **and** resolve the slug from the
DB before redirecting — redirect to the *resolved* path, never to the raw query param, or we
ship an open redirect.

**Middleware is now `proxy.ts`.** Renamed in Next 16, root-level, one file per project. And per
the docs it is **not an authorization solution** — it runs on the Edge runtime and is for
optimistic checks only. Real enforcement goes in a **Data Access Layer**: a `server-only`
module exporting `verifySession()` (memoized with React `cache()`), called inside every admin
read and every Server Action. `proxy.ts` does the cheap "no cookie → bounce to login" redirect;
the DAL does the actual authorization.

---

## 6. AWS architecture — the complete list

You asked what else needs planning for full AWS hosting. This is that list.

### 6.1 Compute — the decision that constrains everything else

**Chosen: ECS Fargate.** The alternatives are recorded below so the reasoning survives.

| Option | Verdict |
| --- | --- |
| **ECS Fargate + ALB** (Docker, `next start`) | ✅ **Chosen.** Next docs rate Docker/Node.js as supporting **all** features. |
| AWS Amplify Hosting | ⚠️ Listed under "Other Platforms" — *not* built on the public Adapter API, *not* verified by the Next.js team; "feature support and compatibility may vary". Next 16 support tends to lag. |
| Lambda (OpenNext / SST) | ⚠️ The Next self-hosting guide calls out **AWS ALB with Lambda integration buffering responses by default**, which breaks streaming and negates PPR. OpenNext also lags Next majors. |
| App Runner | 🆗 Lower-ops middle ground if ECS feels heavy; less control over networking/scaling. |

Shape: **ECS Fargate**, ≥2 tasks across ≥2 AZs, behind an ALB, behind CloudFront.

Because we are running ≥2 tasks from day one, §6.2 items 1–3 (shared cache handler, shared
encryption key, deployment ID) are **launch blockers**, not hardening. A single-task deployment
would let us defer them; a multi-AZ one does not.

### 6.2 The self-hosting gotchas that will bite us

These come straight from the Next 16 self-hosting guide and each one is a real production
failure if missed:

1. **Shared cache handler — the big one.** Default cache is per-instance and in-memory.
   With 2+ Fargate tasks, publishing from the admin invalidates *one task's* cache; the
   others keep serving stale content. Fix: `cacheHandlers` in `next.config.ts` backed by
   **ElastiCache (Redis/Valkey)**, implementing `refreshTags()` so tag invalidations
   propagate across all instances before each request.
2. **`NEXT_SERVER_ACTIONS_ENCRYPTION_KEY`** must be identical across all instances and set at
   build time. Otherwise Server Actions encrypted by one task fail to decrypt on another →
   "Failed to find Server Action" errors. Store in Secrets Manager.
3. **`deploymentId`** (= git SHA) for version-skew protection during rolling ECS deploys, plus
   `generateBuildId` pinned to the same SHA so all tasks agree on the build.
4. **Graceful shutdown.** ECS `stopTimeout` 30s so in-flight requests and `after()` callbacks
   finish on SIGTERM.
5. **Streaming end-to-end.** ALB and CloudFront must not buffer; set `X-Accel-Buffering: no`.
6. **CloudFront cache key.** Must vary on `RSC`, `Next-Router-State-Tree`, `Next-Router-Prefetch`
   and `Next-Url` headers and respect origin `Cache-Control`. Get this wrong and client-side
   navigation serves mismatched RSC payloads — a subtle, miserable bug class.
7. **Image optimization** needs `sharp`; on glibc Linux it needs the memory-allocator tuning
   the docs link to, or memory use balloons. Set `images.remotePatterns` for the media domain
   and tune `minimumCacheTTL`.

### 6.3 Everything else, by service

**Data**
- **RDS PostgreSQL** (or Aurora Serverless v2 if traffic is bursty), private subnets, Multi-AZ.
  Relational fits this content model — pages, versions, blocks, references, audit rows.
- Drizzle or Prisma for schema + migrations, run as a one-off ECS task in the pipeline.
- Automated backups + PITR.

**Media & files**
- **S3** private bucket for uploads, fronted by CloudFront with **Origin Access Control**.
- **Direct browser upload via presigned URLs** — do not proxy uploads through Next.
- Separate prefix/bucket for investor PDFs (annual reports, BRSR) — these are regulatory
  documents; enable **versioning** and consider Object Lock.
- Lifecycle rules for old versions; virus scanning if uploads ever go beyond staff.

**Auth**
- **Cognito User Pool** for admin users. MFA enforced, no public sign-up, admin-invite only.
- Cognito **Groups → roles** (Admin / Editor / Contributor / Viewer), mapped in the DAL.
- Session as an httpOnly, `Secure`, `SameSite=Lax` cookie; verify the JWT server-side against
  the Cognito JWKS on every request through `verifySession()`.

**Secrets & config**
- **Secrets Manager**: DB credentials, `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY`, draft-mode secret,
  Cognito client secret. **SSM Parameter Store** for non-secret config. Injected into the ECS
  task definition — never baked into the image.

**Edge & security**
- **CloudFront** + **Route 53** + **ACM** (cert in `us-east-1` for CloudFront).
- **AWS WAF** on the distribution: managed rule sets, plus **rate limiting on `/admin` and the
  login endpoint**. Consider restricting `/admin` by IP allowlist or WAF geo-match.
- Content Security Policy — Next ships a CSP guide; nonce-based, set in `proxy.ts`.

**Email**
- **SES** (domain verified, DKIM, DMARC) for contact-form notifications, careers
  applications, and admin invites. Note: `src/components/ContactForm.tsx` already exists on the
  front end and currently has nowhere to send anything — form handling is genuinely missing
  functionality today, not just an admin nicety.

**CI/CD**
- GitHub Actions → **OIDC role** (no long-lived AWS keys) → build image → **ECR** → ECS
  rolling deploy (or CodeDeploy blue/green).
- Environments: `dev` → `staging` → `production`, each fully separate. Build once, promote the
  same image; runtime config comes from env vars.

**Observability**
- CloudWatch Logs + Container Insights; alarms on 5xx rate, task health, RDS CPU/connections,
  ElastiCache evictions.
- `instrumentation.ts` for OpenTelemetry; X-Ray or a third-party APM.
- `/api/health` endpoint for the ALB target group.

**IaC**
- **AWS CDK in TypeScript** — same language as the app, so one toolchain. Terraform is equally
  fine if you have existing house standards. Either way: no click-ops for production.

### 6.4 Rough cost shape

Fargate (2 small tasks) + RDS t4g.small Multi-AZ + ElastiCache t4g.micro + CloudFront/S3/WAF
lands in the **low-to-mid hundreds of USD per month** for a site at this traffic level. Aurora
Serverless v2 and Multi-AZ RDS are the main dials. Worth a proper estimate once we fix the
compute choice.

---

## 7. Data model sketch

```
globals(key, value_json, updated_at, updated_by)
pages(id, slug, title, template, status, seo_json, published_at, scheduled_at, …)
page_sections(id, page_id, block_type, position, data_json, enabled)
collections(id, name, schema_key)                     -- registry mirror
collection_items(id, collection, slug, status, data_json, seo_json, position, …)
media(id, s3_key, mime, width, height, alt, caption, focal_x, focal_y, size, …)
media_usage(media_id, entity_type, entity_id)          -- prevents deleting live assets
redirects(id, from_path, to_path, status_code, enabled)
versions(id, entity_type, entity_id, data_json, created_at, created_by, note)
audit_log(id, actor, action, entity_type, entity_id, diff_json, ip, created_at)
form_submissions(id, form, payload_json, status, created_at)
users(id, cognito_sub, email, name, role, status, last_seen_at)
```

`data_json` (JSONB) is deliberate: block payloads are schema-validated in the app layer, so the
DB stays stable while block schemas evolve. Indexed on `(collection, slug)` and `(page_id, position)`.

---

## 8. Phased roadmap

**Phase 0 — Content layer** *(no visible change; highest risk, do it first)*
DB + migrations; the schema registry; port all 17 `site.ts` collections + `businesses.ts` into
block/collection schemas; seed script that imports today's hardcoded values verbatim; switch
pages to read from the DB behind `use cache` + `cacheTag`. **Exit criterion: the site renders
byte-identically from the database.** Also pull the inline arrays (e.g. `about-us` `values`)
out of the page components.

**Phase 1 — Auth + admin shell**
Cognito, DAL + `verifySession()`, `proxy.ts` optimistic redirect, `/admin` layout, users & roles,
audit log skeleton. Globals editor as the first working screen.

**Phase 2 — Pages, SEO, media**
Generic schema-driven form renderer; page editor (Content/SEO/Settings); S3 media library with
presigned uploads; sitemap + robots + redirects; publish → `updateTag`.

**Phase 3 — Collections & blocks**
All collection CRUD; block add/remove/reorder; navigation tree builder; the remaining
field widgets (map coordinate picker, icon picker, tone picker).

**Phase 4 — Workflow**
Draft Mode preview; version history with diff + restore; scheduled publishing; review/approval
step; form submissions inbox + SES notifications.

**Phase 5 — AWS production hardening**
CDK stack; shared Redis cache handler with `refreshTags()`; CloudFront cache-key config; WAF;
observability and alarms; blue/green pipeline; backup and restore rehearsal.

Phases 0–2 are the critical path to "an editor can change text, images and SEO on any page".
Phases 3–5 make it complete and safe to run.

---

## 9. Open decisions

Resolved: build-vs-buy (**custom**) and compute (**ECS Fargate**) — see *Decisions locked* above.

Still open:

1. **Editing model**: structured fields + block reorder within fixed templates (recommended)
   vs full drag-and-drop page builder.
2. **Rich text**: constrained inline marks only (current site just uses `**bold**` in hero copy)
   vs a full WYSIWYG body editor for long-form pages.
3. **Approval workflow**: required for all pages, or only for `/investors` and `/newsroom`?
4. **Multi-language**: is Hindi or any regional language ever in scope? Retrofitting i18n into
   the content model later is expensive; reserving a `locale` column now is nearly free.
5. **Environment count**: is a full `staging` environment funded, or is it `dev` → `production`
   with preview via Draft Mode only? This roughly doubles or halves the AWS footprint.
6. **Who edits?** Headcount and technical comfort of the actual editors decides how much
   guard-railing the forms need (character counters, required alt text, publish confirmations).
```
