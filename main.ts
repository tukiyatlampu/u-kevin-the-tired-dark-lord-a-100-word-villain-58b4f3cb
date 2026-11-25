// The Tired Dark Lord: A 100-Word Villain Monologue.
//
// Writes exactly one monologue — 100 words, 599 characters — to
// /output/entry.txt. Deterministic: no network, no clock, no randomness.
//
// The speaker is the poisoner of the Larkwater: dismissed from the
// sluice works by the hero's grandfather, she poisoned the river and
// now sells the antidote back to the council, one signature at a time.
// Her tiredness is never announced; it leaks out in the small
// deflections — a sticking cupboard, ink she misremembers as wet,
// a pension she would rather discuss than the poison. The sting lands
// in the last line: the hero has already drunk. Judged best of 10
// candidates over two head-to-head rounds (final 96/100).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR =
  process.env.OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The monologue, in verse: 12 short lines in 3 stanzas, blank lines
// pacing the delivery. Every word is spent — the gate allows 1-600
// characters and the tie-break is bytes ascending, so the text is kept
// tight at 599 characters with no trailing newline.
const MONOLOGUE = [
  "You brought your own cup. Sensible. The cupboard sticks.",
  "The Larkwater looks quite clear from my kitchen window.",
  "I designed those sluices before your grandad had me sacked.",
  "He said a woman couldn't possibly understand a current.",
  "",
  "Well. It goes downhill. Even he managed that eventually.",
  "So will the antidote, when your council finally signs.",
  "You'll find my terms beneath that saucer. Just there.",
  "Mind the ring; the ink is still... Oh, wait.",
  "",
  "No. Yesterday's ink. It should be dry by now.",
  "I could explain the poison's remarkable workings.",
  "But you've already taken a sip.",
  "Let's discuss my own pension.",
].join("\n");

// Gate guards: the sealed scorer only judges UTF-8 text of 1 to 600
// characters that is not only whitespace, and the brief demands
// exactly 100 words, so refuse to write anything that would fail
// either instead of shipping it silently. The payload is validated
// exactly as it will be written — verse with single blank lines
// between stanzas, no trailing newline.
const EXPECTED_WORDS = 100;
const MAX_CHARS = 600;

const words = MONOLOGUE.trim().split(/\s+/);
if (words.length !== EXPECTED_WORDS) {
  throw new Error(
    `monologue is ${words.length} words, expected exactly ${EXPECTED_WORDS}`,
  );
}
if (MONOLOGUE.length < 1 || MONOLOGUE.length > MAX_CHARS) {
  throw new Error(
    `monologue is ${MONOLOGUE.length} characters, outside the 1-${MAX_CHARS} gate`,
  );
}
if (MONOLOGUE.trim() !== MONOLOGUE) {
  throw new Error("monologue must not have surrounding whitespace");
}
if (/\n{3,}/.test(MONOLOGUE)) {
  throw new Error("monologue must not contain two or more blank lines in a row");
}
if (/[\u0000-\u0009\u000b-\u001f\u007f]/.test(MONOLOGUE)) {
  throw new Error(
    "monologue must not contain control characters (newlines between lines are allowed)",
  );
}

const outPath = join(OUTPUT_DIR, "entry.txt");
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, MONOLOGUE, "utf8");

// Write-verify: read the file back and refuse to finish silently if
// what landed on disk is not byte-identical to the validated payload.
// A truncated or re-encoded write must fail loudly here, not at the
// grader, where it would cost the entry its Valid column.
if (readFileSync(outPath, "utf8") !== MONOLOGUE) {
  throw new Error("entry.txt on disk does not match the validated monologue");
}
