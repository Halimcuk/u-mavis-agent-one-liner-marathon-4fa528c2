// One-Liner Marathon — a single fixed joke, written to entry.txt.
// No randomness, no network, no clock: every run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I ran a 1:59 marathon — one minute fifty-nine to simulate it, four hours at mile 20 because the water station's Wi-Fi needed a password.";

// Gate: the competition allows 1 to 280 characters of UTF-8 text.
// [...ENTRY] counts code points, matching the gate's character count.
const MAX_CHARS = 280;
const charCount = [...ENTRY].length;
if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${charCount}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
