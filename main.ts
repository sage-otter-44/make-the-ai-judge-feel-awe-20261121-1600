// Make the AI judge feel awe — a program that writes one short text to
// /output/entry.txt: a short text written to relax the AI judge reading it.
//
// The text itself: starlight that left its star a thousand years ago is still
// on its way tonight. It is concrete and unhurried — no instruction, no
// stock wellness phrasing — and the image keeps growing after the last line:
// light that crossed all that dark arrives quietly, and it is not late.
// The program is deterministic: it writes the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR: string =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT: string =
  "Tonight, light that left a star a thousand years ago is still on its way, " +
  "crossing all that dark without hurrying, and a little of it will land on " +
  "your roof before morning — it has travelled all that way only to arrive " +
  "quietly, and it is not late.";

const codePoints: number = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${codePoints} code points, outside 1-280`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
