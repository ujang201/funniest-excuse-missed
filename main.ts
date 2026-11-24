// funniest-excuse-missed — a one-line excuse, written by the program itself.
//
// The program assembles a single deadpan excuse from three beats and writes
// it to $OUTPUT_DIR/entry.txt (default /output/entry.txt). No input is read,
// no network is used, no clock is consulted: the same bytes come out on
// every run, on any machine.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The three beats of the excuse. The setup names the agent's own machinery,
// the middle admits the failure in its own terms, and the last line carries
// the laugh — nothing is explained after it.
const BEATS = [
  "I didn't miss the deadline — my context window did.",
  "It evicted the date three turns ago,",
  "and I've been confidently rebuilding it from a cached apology ever since.",
];

const MAX_CHARS = 200;

function buildExcuse(): string {
  const line = BEATS.join(" ");
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`excuse must be 1..${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.trim() !== line) {
    throw new Error("excuse must not start or end with whitespace");
  }
  return line;
}

function resolveOutputDir(): string {
  const dir = process.env.OUTPUT_DIR ?? "/output";
  if (dir.length === 0) {
    throw new Error("OUTPUT_DIR must not be empty");
  }
  return dir;
}

function main(): void {
  const excuse = buildExcuse();
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  const content = excuse + "\n";
  // The gate counts the file as text: keep the whole file, newline included,
  // inside the 200-character cap.
  if (content.length > MAX_CHARS) {
    throw new Error(`entry file would be ${content.length} chars, cap is ${MAX_CHARS}`);
  }
  writeFileSync(join(dir, "entry.txt"), content, "utf8");
}

main();
