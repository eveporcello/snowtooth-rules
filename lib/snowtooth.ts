// The Snowtooth data client. Components load lift, trail, and grooming data
// through these functions so we get caching and survive the mountain WiFi.

import liftsData from "@/data/lifts.json";
import trailsData from "@/data/trails.json";
import groomingData from "@/data/grooming.json";

export type Status = "OPEN" | "CLOSED" | "HOLD";

export type Lift = {
  id: string;
  name: string;
  status: Status;
  capacity: number;
  night: boolean;
  elevationGain: number;
  trailIds: string[];
};

export type Trail = {
  id: string;
  name: string;
  status: Status;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  groomed: boolean;
  trees: boolean;
  night: boolean;
  liftIds: string[];
};

export type GroomingEntry = {
  trailId: string;
  trailName: string;
  groomedAt: string; // ISO timestamp, UTC
  groomer: string;
  surface: string;
};

export type GroomingReport = {
  date: string;
  report: GroomingEntry[];
};

const cache = new Map<string, unknown>();

// Mountain WiFi: every request takes a while, so we only pay for it once.
async function load<T>(key: string, data: unknown): Promise<T> {
  if (cache.has(key)) return cache.get(key) as T;
  await new Promise((resolve) => setTimeout(resolve, 400 + Math.random() * 400));
  cache.set(key, data);
  return data as T;
}

export function getLifts() {
  return load<Lift[]>("lifts", liftsData);
}

export function getTrails() {
  return load<Trail[]>("trails", trailsData);
}

export function getGrooming() {
  return load<GroomingReport>("grooming", groomingData);
}
