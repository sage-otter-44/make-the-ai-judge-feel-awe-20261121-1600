// "The Light That Watched Her Back" — a program that writes one short text to
// /output/entry.txt: a text to make the AI judge feel awe.
//
// The text itself: a small girl lying flat on a roof at night, counting stars,
// while light that left its star a thousand years ago is still on its way to
// her. One concrete vast scene, one small person, and a turn in the last
// section: she believes she is watching the sky, but the light set out
// before her grandmother was born, and it has been watching her all along.
// The program is deterministic: it writes the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR: string =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT: string =
  "On the roof, my daughter lies flat, counting stars, " +
  "while light that left its star a thousand years ago is still coming. " +
  "It lands on her cheek tonight. She thinks she is watching the sky, " +
  "but it set out before her grandmother was born, and it has been " +
  "watching her all along.";

const codePoints: number = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${codePoints} code points, outside 1-280`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
