// One Word, One Username, One Reward — entry program.
//
// The entry is exactly one word: our own make.fun username.
// "slavica4340" is the handle of the @slavica4340 account itself —
// a real handle, one word, eleven characters, no spaces, no padding,
// no explanation and no trailing newline. It is the name its owner
// is proud to wear, and it is the only word this program ever writes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single word this entry submits: our own make.fun username.
const USERNAME = "slavica4340";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
