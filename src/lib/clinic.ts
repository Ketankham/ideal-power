// Facts sourced from chestandallergyclinic.com; all copy here is written fresh for the redesign.
export const clinic = {
  name: "Chest & Allergy Clinic",
  city: "Navi Mumbai",
  established: 2005,
  practiceSince: 1996,
  phones: ["022-2789 6563", "022-2789 5854"],
  emails: { info: "info@chestandallergyclinic.com", enquiry: "enquiry@chestandallergyclinic.com" },
  hours: { days: "Monday – Saturday", time: "1:00 PM – 8:00 PM", closed: "Sunday" },
  mapQuery: "Chest and Allergy Clinic, Navi Mumbai",
  doctor: {
    name: "Dr. Vivek Patil",
    role: "Consultant Chest Physician",
    specialisedIn: 1987,
    timeline: [
      { year: "1987", text: "Completes specialisation in chest medicine." },
      { year: "1987–96", text: "Nine years on the wards at GTB Hospitals, Mumbai." },
      { year: "1996", text: "Opens an independent practice in Navi Mumbai." },
      { year: "2005", text: "Founds the Chest & Allergy Clinic." },
    ],
    interests: ["Allergy", "Asthma", "COPD", "Pneumonia", "Pleurisy", "Tuberculosis", "Interstitial lung disease"],
  },
};

export const telHref = (phone: string) => `tel:+91${phone.replace(/\D/g, "").replace(/^0/, "")}`;

export const conditions = [
  {
    title: "Asthma",
    body: "Long-term, protocol-driven care that aims for fewer flare-ups and fewer emergency visits.",
    tag: "Most common",
  },
  {
    title: "Allergies",
    body: "Find the triggers, whether dust, pollen, smoke or something else, and build a plan to control them.",
    tag: "Triggers",
  },
  {
    title: "COPD",
    body: "Slow the decline, ease breathlessness and stay active with structured follow-up.",
    tag: "Chronic",
  },
  {
    title: "Pneumonia",
    body: "Quick assessment and treatment, then follow-up until the lungs have fully recovered.",
    tag: "Acute",
  },
  {
    title: "Tuberculosis",
    body: "Accurate diagnosis and close supervision through the complete treatment course.",
    tag: "Infection",
  },
  {
    title: "Interstitial lung disease",
    body: "Specialist evaluation and monitoring for pulmonary fibrosis and related conditions.",
    tag: "Specialist",
  },
  {
    title: "Sleep disorders",
    body: "Snoring, daytime fatigue and disturbed breathing at night, assessed and managed.",
    tag: "Sleep",
  },
  {
    title: "Pleurisy & chest pain",
    body: "Careful work-up of chest pain and inflammation around the lungs.",
    tag: "Chest",
  },
];

export const symptoms = [
  "A wet cough that keeps coming back",
  "Getting out of breath easily",
  "Wheezing or whistling when you breathe",
  "Coughing more at night",
  "Tightness in the chest",
  "Symptoms worse around dust, pollen or smoke",
];

export const approach = [
  {
    step: "01",
    title: "Listen",
    body: "An unhurried consultation covering your history, your home and work environment, and what sets off your symptoms.",
  },
  {
    step: "02",
    title: "Diagnose",
    body: "In-clinic diagnostic facilities to confirm what is happening in your lungs, not just guess at it.",
  },
  {
    step: "03",
    title: "Plan",
    body: "A clear, protocol-based treatment plan, including the right inhaler technique, explained in plain language.",
  },
  {
    step: "04",
    title: "Follow through",
    body: "Regular reviews that adjust treatment as you improve, because chest conditions need long-term care.",
  },
];

export const faqs = [
  {
    q: "Do I need a referral to see Dr. Patil?",
    a: "No. You can book a consultation directly by phone or with the appointment form on this page.",
  },
  {
    q: "What are the clinic timings?",
    a: "The clinic is open Monday to Saturday, 1:00 PM to 8:00 PM, and closed on Sundays.",
  },
  {
    q: "Is a long-lasting cough always asthma?",
    a: "Not always. A cough lasting more than three weeks can have many causes, including allergy, infection, reflux and other lung conditions. A chest physician can work out which one it is.",
  },
  {
    q: "Can asthma be controlled long-term?",
    a: "For most people, yes. With the right medication, correct inhaler technique and regular reviews, most patients live normal, active lives with few symptoms.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring any previous prescriptions, X-rays, CT scans or test reports, and the inhalers or medicines you currently use.",
  },
];
