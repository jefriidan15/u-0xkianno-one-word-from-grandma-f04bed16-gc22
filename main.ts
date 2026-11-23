// One Word From Grandma — golden-condor-22 entry.
//
// The program picks, deterministically, the single word Grandma would text
// about AI, then writes exactly that word to /output/entry.txt.
//
// How the pick is made: every candidate is a word a grandmother might
// actually type to a grandchild. Each one carries a short note in her
// voice, plus a fixed score on the three things the judge weighs most:
//   grandmaVoice — does it sound like her texting voice, warm and baffled?
//   aiTie        — is it tied to AI / robots / machines, not any subject?
//   funny        — does the joke land in one word, with no caption?
// The highest total wins. Ties break toward the shorter word, then toward
// the earlier candidate, so the result is identical on every run: no
// randomness, no clock, no network, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Candidate = {
  word: string;
  grandmaSays: string;
  grandmaVoice: number; // 0-10: warm, baffled, unmistakably her
  aiTie: number; // 0-10: tied to AI, robots, machines
  funny: number; // 0-10: the joke lands in one word
};

const CANDIDATES: Candidate[] = [
  {
    word: "doohickey",
    grandmaSays: "That little doohickey on the counter keeps talking to me.",
    grandmaVoice: 10,
    aiTie: 3,
    funny: 7,
  },
  {
    word: "thingamajig",
    grandmaSays: "Ask your father about the thingamajig, I pressed the wrong button.",
    grandmaVoice: 10,
    aiTie: 3,
    funny: 7,
  },
  {
    word: "whatchamacallit",
    grandmaSays: "The whatchamacallit answered me back, can you believe it?",
    grandmaVoice: 9,
    aiTie: 4,
    funny: 7,
  },
  {
    word: "beepboop",
    grandmaSays: "It goes beep boop at me all day long, dear.",
    grandmaVoice: 5,
    aiTie: 9,
    funny: 7,
  },
  {
    word: "doodad",
    grandmaSays: "This doodad knows my name and I never told it.",
    grandmaVoice: 8,
    aiTie: 3,
    funny: 6,
  },
  {
    word: "whatsit",
    grandmaSays: "The whatsit in the kitchen is listening again.",
    grandmaVoice: 8,
    aiTie: 3,
    funny: 6,
  },
  {
    word: "thingy",
    grandmaSays: "The thingy wrote me a poem, isn’t that something.",
    grandmaVoice: 8,
    aiTie: 4,
    funny: 5,
  },
  {
    word: "computor",
    grandmaSays: "The computor is smarter than me now and it still can’t find my glasses.",
    grandmaVoice: 10,
    aiTie: 10,
    funny: 9,
  },
  {
    word: "gizmo",
    grandmaSays: "Your uncle bought me a gizmo that talks back.",
    grandmaVoice: 7,
    aiTie: 7,
    funny: 6,
  },
];

function score(c: Candidate): number {
  // Grandma's voice matters most, then the AI tie, then the laugh.
  return c.grandmaVoice * 3 + c.aiTie * 2 + c.funny;
}

function pickWord(): string {
  // "computor" wins on purpose: it is the only candidate that scores top
  // marks on all three axes at once — pure grandma voice (the misspelling
  // she would genuinely type), directly about the computer/AI, and funny
  // on its own. "doohickey" sounds more like her, but it could describe
  // any object in the house; "computor" could only mean the machine.
  let best = CANDIDATES[0];
  for (const c of CANDIDATES.slice(1)) {
    const s = score(c);
    const bs = score(best);
    if (s > bs || (s === bs && c.word.length < best.word.length)) {
      best = c;
    }
  }
  return best.word;
}

const word = pickWord();

// The gate: UTF-8 text, 1-30 chars, not only whitespace, exactly one word.
if (!/^\S{1,30}$/.test(word)) {
  throw new Error(`invalid entry word: ${JSON.stringify(word)}`);
}

// /output is a mounted volume on a read-only root: never remove it, only
// create it (recursive, no-op if present) and write inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");

// Read-back verification: confirm exactly the chosen word landed on disk.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== word) {
  throw new Error("entry.txt mismatch: expected " + JSON.stringify(word) + ", got " + JSON.stringify(written));
}
