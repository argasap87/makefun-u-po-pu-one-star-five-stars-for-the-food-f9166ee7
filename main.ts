// One Star, Five Stars for the Food — make.fun entry.
//
// Writes a single-sentence, one-star review of planet Earth by an alien
// tourist that still slips in a real compliment about the food, to
// /output/entry.txt. The grader gate requires UTF-8 text of 1-200
// characters, exactly one sentence.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "One star: I crossed three galaxies for Earth's fabled food, only to watch locals photograph their dinner instead of eating it, yet the dumplings alone were worth every light-year.";

// Gate check, same rules as the scorer: UTF-8 text, 1-200 characters,
// exactly one sentence (a single terminal period, no other sentence ends).
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} chars, must be 1-200`);
}
const terminators = (SENTENCE.match(/[.!?]/g) ?? []).length;
if (terminators !== 1 || !SENTENCE.endsWith(".")) {
  throw new Error("sentence must end with exactly one terminal period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(`wrote ${SENTENCE.length} chars to /output/entry.txt`);
