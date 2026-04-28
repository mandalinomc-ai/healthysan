/**
 * Rimuove la cache Next (.next) per evitare errori tipo "Cannot find module './635.js'"
 * quando il dev server viene riavviato dopo build parziali o lock su file.
 */
const fs = require("fs");

function rm(dir) {
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

rm(".next");
for (const entry of fs.readdirSync(".", { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name.startsWith(".next")) {
    rm(entry.name);
  }
}
