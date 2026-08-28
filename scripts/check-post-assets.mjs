#!/usr/bin/env node
// Every local asset a post references must exist in the repo.
//
// The blog agent is prompted (lib/blog-generate.ts) to emit [IMAGE:description]
// markers, which the generator expands: it creates the asset, commits it, and
// only THEN rewrites the marker to <img src="/blog/...">. If generation or the
// commit fails it REMOVES the marker, so that path cannot strand a reference.
//
// The gap is that the expander's regex only knows its own marker syntax. When
// the model writes raw markdown ![alt](/images/foo.png) INSTEAD of a marker,
// nothing matches, nothing is generated, and the reference passes through into
// a published post pointing at a file that will never exist. That shipped once
// (/images/blog/auditable-ai-split-architecture.png, 404 on the live site from
// 2026-08-06 until PR #21) and was queued to ship a second time in PR #20.
//
// So this asserts the OUTCOME rather than the cause. It does not care why a
// path is wrong, which is the point: it catches the next invented convention,
// not this one. Deliberately NO allowlist for /blog/ and NO special case for
// /images/ — any local path that does not resolve is a failure.
//
// A tightened prompt could not do this job. Prompt adherence lowers a rate and
// never reaches zero, and this failure is silent.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const files = readdirSync(path.join(ROOT, "src"), { recursive: true, encoding: "utf8" })
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => path.join("src", f));
if (files.length === 0) {
  console.error("🔴 no .mdx files found — this check scanned nothing, which is not a pass.");
  process.exit(1);
}

// ![alt](path)  and  <img ... src="path" ...>
const MD = /!\[[^\]]*\]\(([^)\s]+)/g;
const HTML = /<img[^>]*\ssrc=["']([^"']+)["']/gi;

const failures = [];
let refsChecked = 0;

for (const rel of files) {
  const body = readFileSync(path.join(ROOT, rel), "utf8");
  const refs = [
    ...Array.from(body.matchAll(MD), (m) => m[1]),
    ...Array.from(body.matchAll(HTML), (m) => m[1]),
  ];
  for (const ref of refs) {
    // Remote and inline assets are not ours to resolve.
    if (/^(https?:)?\/\//i.test(ref) || ref.startsWith("data:")) continue;
    if (!ref.startsWith("/")) continue; // relative/import paths are bundler-resolved
    refsChecked++;
    const onDisk = path.join(PUBLIC, decodeURIComponent(ref));
    if (!existsSync(onDisk)) {
      failures.push({ file: rel, ref, expected: path.relative(ROOT, onDisk) });
    }
  }
}

if (failures.length > 0) {
  console.error(`🔴 ${failures.length} referenced asset(s) do not exist in the repo:\n`);
  for (const f of failures) {
    console.error(`  ${f.file}`);
    console.error(`    references : ${f.ref}`);
    console.error(`    expected at: ${f.expected}\n`);
  }
  console.error("Either commit the asset, or remove the reference.");
  console.error("Posts use /blog/<slug>-hero.png, written by the [IMAGE:] expander in");
  console.error("jimmy-ops lib/blog-generate.ts. A hand-written /images/... path is the");
  console.error("known failure mode: nothing generates it.");
  process.exit(1);
}

// Denominator, so a run that checked nothing cannot read as a pass.
console.log(`✅ ${refsChecked} local asset reference(s) across ${files.length} post(s) all resolve`);
