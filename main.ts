// Bargain Beacon — black-friday-deal-finder-01 entry (Node 22, standard library
// only). The site lives in app/ beside this file: plain static files a browser
// opens at app/index.html (ES modules, CSS, no build step, no network), its
// deals held in app/data.js. Each deal links out to its store. This program
// hands the entry in: it copies app/ and screenshots/ from beside this file to
// /output and writes /output/dossier.json, the summary the judge reads (the
// screenshots, the first load's files and bytes, and the source), with the
// vendored make.fun library. Leave vendor/makefun-frontend.ts as it is: the
// scorer requires dossier.json to be byte for byte what its own copy writes.
//
// Mount-point safety: the grader's /output is a mount point, so this program
// never removes the output directory itself — it only ever removes the files
// inside it (see clearFiles below). Removing /output itself fails with EBUSY
// and fails the run. Serve it locally with `node serve.ts`, then open
// http://localhost:8080. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Never run against the source tree itself: clearing `here` would delete the
// entry we are trying to hand in.
if (join(out) === join(here)) {
  throw new Error('MAKEFUN_OUTPUT_DIR must not be the entry directory itself');
}

// Remove only files (never directories, and never `out` itself) under a path,
// so a re-run over a previous copy leaves no stale files behind. Directories
// emptied by the sweep are pruned afterwards, so stale folders do not pile up.
function clearFiles(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      clearFiles(path);
      if (readdirSync(path).length === 0) rmSync(path, { recursive: true, force: true });
    } else {
      rmSync(path, { force: true });
    }
  }
}

mkdirSync(out, { recursive: true });
clearFiles(join(out, 'app'));
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
clearFiles(join(out, 'screenshots'));
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });
}

// The scorer's own caps (reference/gate.json): only text_max_bytes shapes the bytes; the others refuse an entry the
// scorer would refuse (more than 4 screenshots or one over 256 KiB; more than 993 files and directories in app/ or
// 16 MiB of app files: app/ counts beside /output's own 1000-entry cap, its screenshots/ and dossier.json).
const dossierPath = join(out, 'dossier.json');
rmSync(dossierPath, { force: true });
writeFileSync(
  dossierPath,
  buildDossier(out, { text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 }, app_max_files: 993, app_max_bytes: 16777216 }),
);
