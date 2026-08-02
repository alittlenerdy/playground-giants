#!/usr/bin/env node
/**
 * Render the Open Graph / Twitter preview card for playgroundgiants.com.
 *
 * ── Why this exists ───────────────────────────────────────────────────────
 *
 * The card this replaces (`og_image_charcoal.png`, dated 2026-02-05) was from
 * the PREVIOUS brand entirely: black ground, matrix-green monospace, and a
 * terminal readout saying `user: alittleghost` / `role: marketing_architect`
 * over the line "I don't just build websites. I build revenue engines."
 *
 * None of that survives the 2026-07-24 repositioning. The site is cream and
 * Newsreader now, the audience is law firms and medical practices rather than
 * home services, and the differentiator is human sign-off, not revenue claims.
 * Every share of this domain was carrying the old identity.
 *
 * Rendered with Puppeteer against real HTML, never Satori. Satori re-implements
 * a CSS subset and silently drops what it does not support, which is how a card
 * passes every structural check and still looks wrong.
 *
 * Tokens are copied from tailwind.config.ts by hand rather than imported: this
 * script runs outside the Next build and a drifting hex is far cheaper to spot
 * here than a broken import is to debug. If the palette moves, move it here.
 *
 *   node scripts/render-og.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const OUT = resolve(ROOT, 'public/images/og-playground-giants.png')

// Inlined rather than referenced, so the render never depends on a file:// path
// resolving the way you expect inside a headless browser.
const LOGO = readFileSync(resolve(ROOT, 'public/images/Ink-logo---no-background.svg'), 'utf8')

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --paper:#FAF6EE; --card:#FFFCF6; --cream-2:#F2EADB;
    --line:#E5DBC8; --line-soft:#EFE6D2;
    --ink:#1A1308; --ink-2:#3D2F1A; --ink-3:#776652;
    --canary:#4A95E0; --blue-deep:#2D70BA; --pink:#FF7099; --sage:#3E7C6A;
  }
  html,body{width:1200px;height:630px}
  body{
    background:var(--paper);
    font-family:'Switzer',system-ui,sans-serif;
    color:var(--ink);
    position:relative;
    overflow:hidden;
  }

  /* A single hairline grid, barely there. The old card shouted; the pitch here
     is that the work is careful, so the ground should read as considered
     rather than decorated. */
  .grid{
    position:absolute; inset:0;
    background-image:
      linear-gradient(var(--line-soft) 1px, transparent 1px),
      linear-gradient(90deg, var(--line-soft) 1px, transparent 1px);
    background-size:60px 60px;
    opacity:.5;
    mask-image:radial-gradient(120% 90% at 82% 12%, #000 0%, transparent 72%);
    -webkit-mask-image:radial-gradient(120% 90% at 82% 12%, #000 0%, transparent 72%);
  }

  /* The accent is spent in exactly one place: the rule under the claim. */
  .frame{position:absolute; inset:0; padding:66px 72px; display:flex; flex-direction:column;}
  .top{display:flex; align-items:center; justify-content:space-between;}
  .logo{height:44px; display:block;}
  .logo svg{height:44px; width:auto; display:block;}
  .sectors{
    font-size:14.5px; font-weight:600; letter-spacing:.13em; text-transform:uppercase;
    color:var(--ink-3); display:flex; gap:12px; align-items:center;
  }
  .dot{width:4px;height:4px;border-radius:50%;background:var(--canary);display:inline-block}

  .mid{flex:1; display:flex; flex-direction:column; justify-content:center; padding-bottom:4px;}
  h1{
    font-family:'Newsreader',Georgia,serif;
    font-weight:500;
    font-size:64px;
    line-height:1.16;
    letter-spacing:-.02em;
  }
  h1 .quiet{color:var(--ink-2);}
  /* The highlight must sit BEHIND the words, not under them. The first attempt
     put the gradient stop at 82%, which with a tight line-height landed the
     band in the leading gap and read as a detached underline. Banding from 58%
     to 96% keeps it inside the x-height, and box-decoration-break: clone is
     what makes it survive a line wrap without the band stretching across the
     full column. Verified by looking at the render, not by reasoning about it.
     (Note for anyone editing this file: no backticks in these CSS comments,
     they terminate the surrounding template literal.) */
  h1 .claim{
    font-weight:600;
    background-image:linear-gradient(180deg,
      transparent 58%, rgba(74,149,224,.26) 58%, rgba(74,149,224,.26) 94%, transparent 94%);
    -webkit-box-decoration-break:clone;
    box-decoration-break:clone;
  }
  .rule{
    width:88px; height:3px; margin:30px 0 24px;
    background:linear-gradient(90deg, var(--canary), var(--blue-deep) 62%, var(--pink));
  }
  .sub{
    font-size:21px; line-height:1.5; color:var(--ink-2); max-width:60ch; font-weight:400;
  }

  .bot{display:flex; align-items:flex-end; justify-content:space-between;}
  .domain{font-size:19px; font-weight:650; letter-spacing:-.005em; color:var(--ink);}
  .audit{
    font-size:14.5px; font-weight:600; letter-spacing:.1em; text-transform:uppercase;
    color:var(--ink-3);
    border:1px solid var(--line); background:var(--card);
    padding:8px 14px; border-radius:3px;
  }
</style></head>
<body>
  <div class="grid"></div>
  <div class="frame">

    <div class="top">
      <div class="logo">${LOGO}</div>
      <div class="sectors">
        <span>Law firms</span><span class="dot"></span>
        <span>Medical practices</span><span class="dot"></span>
        <span>Regulated operators</span>
      </div>
    </div>

    <div class="mid">
      <h1><span class="quiet">AI that does the busywork.</span><br><span class="claim">A human still makes the call.</span></h1>
      <div class="rule"></div>
      <p class="sub">The model reads and routes. Every decision it makes is logged, attributable, and reviewable by the person whose licence is on the line.</p>
    </div>

    <div class="bot">
      <div class="domain">playgroundgiants.com</div>
      <div class="audit">Built for work that cannot be wrong</div>
    </div>

  </div>
</body></html>`

const browser = await puppeteer.launch({ headless: 'new' })
try {
  const page = await browser.newPage()
  // deviceScaleFactor 2 so the card stays crisp where platforms upscale it.
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 })

  // `domcontentloaded` plus an explicit font wait, NOT networkidle0. networkidle0
  // on a page holding two font CDNs sits for its full timeout on every render.
  await page.setContent(html, { waitUntil: 'domcontentloaded' })
  await page.evaluate(async () => {
    await Promise.race([
      document.fonts.ready,
      new Promise((r) => setTimeout(r, 6000))
    ])
  })

  // Prove the webfonts actually resolved. A silent fallback to Georgia/system
  // is the exact failure this card is being rebuilt to correct, so it must fail
  // loudly rather than ship something that merely looks plausible.
  const loaded = await page.evaluate(() => ({
    newsreader: document.fonts.check("500 74px Newsreader"),
    switzer: document.fonts.check("600 19px Switzer")
  }))
  if (!loaded.newsreader || !loaded.switzer) {
    throw new Error(`webfont did not load: ${JSON.stringify(loaded)}`)
  }

  await page.screenshot({ path: OUT, type: 'png' })
  console.log(`[og] wrote ${OUT}`)
  console.log(`[og] fonts ok:`, loaded)
} finally {
  await browser.close()
}
