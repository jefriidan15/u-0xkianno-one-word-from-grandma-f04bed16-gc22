// One Word From Grandma — gc22 rewrite
// Grandma is asked for one word for "AI". She means "computer" but types
// it the way she says it: "computor". Deterministic: no randomness, no
// clock, no network, no environment input — the same word on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Curated grandma words for AI, each scored on three fixed traits:
//   familiar — a word grandma actually uses every day (0-3)
//   warm     — sounds like grandma, not a textbook (0-3)
//   typo     — grandma's honest spelling of a tech word (0-3)
// Highest total wins; ties break by earliest position in the list.
const candidates: Array<{ word: string; familiar: number; warm: number; typo: number }> = [
  { word: "robot",    familiar: 2, warm: 1, typo: 0 },
  { word: "machine",  familiar: 2, warm: 1, typo: 0 },
  { word: "computor", familiar: 3, warm: 3, typo: 3 },
  { word: "thinker",  familiar: 1, warm: 2, typo: 0 },
  { word: "helper",   familiar: 3, warm: 2, typo: 0 },
  { word: "brainbox", familiar: 1, warm: 2, typo: 0 },
];

function score(c: { familiar: number; warm: number; typo: number }): number {
  return c.familiar + c.warm + c.typo;
}

let best = candidates[0];
for (const c of candidates.slice(1)) {
  if (score(c) > score(best)) best = c;
}
const word = best.word;

// One-word validation: 1-30 chars, not only whitespace, single token.
if (!/^\S{1,30}$/.test(word)) {
  throw new Error(`invalid entry word: ${JSON.stringify(word)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");

// Read-back verification: what landed on disk must be exactly the word.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== word) {
  throw new Error(`entry mismatch: wrote ${JSON.stringify(word)}, read back ${JSON.stringify(written)}`);
}
