// Live air quality for Navi Mumbai from Open-Meteo (free, no key). Refreshed every 30 minutes.
const ENDPOINT =
  "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=19.033&longitude=73.0297&current=us_aqi,pm2_5,pm10,ozone&timezone=Asia%2FKolkata";

export type AirReading = {
  aqi: number;
  pm25: number;
  pm10: number;
  ozone: number;
  time: string;
};

export type AirBand = {
  label: string;
  tone: "good" | "moderate" | "sensitive" | "unhealthy";
  advice: string;
};

export async function getAir(): Promise<AirReading | null> {
  try {
    const res = await fetch(ENDPOINT, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    const { current } = await res.json();
    if (typeof current?.us_aqi !== "number") return null;
    return {
      aqi: Math.round(current.us_aqi),
      pm25: current.pm2_5,
      pm10: current.pm10,
      ozone: current.ozone,
      time: current.time,
    };
  } catch {
    return null;
  }
}

export function airBand(aqi: number): AirBand {
  if (aqi <= 50)
    return { label: "Good", tone: "good", advice: "A good day for outdoor activity, even if you have asthma." };
  if (aqi <= 100)
    return {
      label: "Moderate",
      tone: "moderate",
      advice: "Generally fine. If you are very sensitive, keep your reliever inhaler with you outdoors.",
    };
  if (aqi <= 150)
    return {
      label: "Unhealthy for sensitive groups",
      tone: "sensitive",
      advice: "If you have asthma or COPD, cut down long outdoor exertion and carry your reliever inhaler.",
    };
  return {
    label: "Unhealthy",
    tone: "unhealthy",
    advice: "Stay indoors where you can, keep windows shut during peak traffic hours and follow your action plan.",
  };
}
