#!/usr/bin/env node
// Losslessly strip metadata (EXIF/GPS, XMP, ICC-optional) from JPEGs by dropping
// APPn segments — pixels are untouched, no re-encode. Usage:
//   node scripts/qa/strip-exif.mjs <file.jpg> [...]      (in place)
//   node scripts/qa/strip-exif.mjs --check <file.jpg> ...  (exit 1 if any has EXIF/GPS)
// Why: phone photos carry GPS of customers' properties; Astro's image pipeline
// strips it from built variants, but files served raw from public/ (og cards)
// and the committed sources in src/ do not get that treatment.
import { readFileSync, writeFileSync } from 'node:fs';

const KEEP_APP = new Set([0xe0, 0xe2]); // keep APP0 (JFIF) + APP2 (ICC colour profile — P3 iPhone photos shift without it); drop APP1 (EXIF/XMP), APP13 (IPTC) …
function segments(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error('not a JPEG');
  let i = 2; const segs = [];
  while (i < buf.length) {
    if (buf[i] !== 0xff) throw new Error('bad marker at ' + i);
    const marker = buf[i + 1];
    if (marker === 0xda) { segs.push({ marker, start: i, end: buf.length }); break; } // SOS → rest is scan
    const len = buf.readUInt16BE(i + 2);
    segs.push({ marker, start: i, end: i + 2 + len });
    i += 2 + len;
  }
  return segs;
}
const hasMeta = (buf) => segments(buf).some((s) => s.marker >= 0xe1 && s.marker <= 0xef && !KEEP_APP.has(s.marker));
const strip = (buf) => Buffer.concat([buf.subarray(0, 2), ...segments(buf).filter((s) => !(s.marker >= 0xe0 && s.marker <= 0xef && !KEEP_APP.has(s.marker))).map((s) => buf.subarray(s.start, s.end))]);

const args = process.argv.slice(2);
const check = args[0] === '--check';
const files = check ? args.slice(1) : args;
let bad = 0;
for (const f of files) {
  if (!/\.jpe?g$/i.test(f)) continue;
  const buf = readFileSync(f);
  if (check) { if (hasMeta(buf)) { console.log(`✖ metadata present: ${f}`); bad++; } continue; }
  if (!hasMeta(buf)) { console.log(`clean: ${f}`); continue; }
  const out = strip(buf);
  writeFileSync(f, out);
  console.log(`stripped: ${f} (${buf.length} → ${out.length} bytes)`);
}
if (check) { console.log(bad ? `${bad} file(s) carry metadata` : 'no JPEG metadata found'); process.exit(bad ? 1 : 0); }
