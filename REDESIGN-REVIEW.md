# Below-hero redesign / v1

Local review branch: `redesign/below-hero-v1`.

## Run

```sh
npm ci
npm run dev -- --port 3000
```

Open http://localhost:3000. Nothing has been pushed or deployed.

## Direction

- Hero and navbar components are unchanged. The font wiring is a global bug fix, so those components now use their intended fonts too.
- The problem resets the existing "This used to be a job" copy as a full-screen editorial moment.
- One pinned navy story carries an instruction through the Alpha invoice, its journal, the TechMart bill, the Alpha receipt with TDS, and the resulting books. One persistent working-record surface replaces separate demo windows.
- The assurance sequence holds an unbalanced receipt, adds TDS, rejects a locked-period attempt, and shows the correction-history relationship. Sample-data demonstration, not a live product connection.
- A near-black benefits moment resets the existing "You don’t need to know accounting" copy. New positioning and vision copy have been shelved at the user’s request.
- Six FAQ questions and a quieter, more direct demo CTA finish the page.
- Mobile presents the accounting story as a normal document flow instead of trapping a small screen inside a pinned scene. Verification can be tapped. Reduced-motion preferences remove pinned storytelling.
- The legacy "Benefits" navigation target routes to the benefits section without changing navbar source.

## Fonts

Next font variables now directly define the tokens consumed by global CSS and Tailwind:
`--font-sans` (Inter), `--font-display` (Fraunces), `--font-mono` (IBM Plex Mono).

## Review checks

TypeScript and Next production build pass. Browser checks cover 1440x900, 390x844, 320px and 768px widths. No horizontal overflow or page JavaScript errors were observed. Reduced-motion mode exposes all six document stages.

The narrative is an illustrative sequence based on the original homepage amounts. This first pass is a design preview, not a new product capability specification. No backend behavior, checkout, forms, or external booking destination was changed.

## Optional capture helpers

`npm install --no-save --package-lock=false playwright` and `npx playwright install ffmpeg` prepare the local review helpers. They use an installed Google Chrome by default; set `CHROME_PATH` to override.

With the dev server running, `node scripts/review.cjs` captures desktop/mobile screenshots and `node scripts/record.cjs` records a 1440x900 scroll review. These helpers are not website dependencies.

## Final scope

The user selected a visual-only update. The shipped-site copy is the content base, not the proposed new-accountant positioning. The original problem, command demos, assurance rules, benefits, FAQ answers and demo CTA are reset in the new visual system. New product positioning and the wider roadmap were not added. The original website's claims have been preserved as provided, not independently certified against a product build.

Final review MP4: 1440x900, 25fps, approximately 81 seconds, hero through footer. No video is embedded in the website.

## Sprite revision / v2

Only the problem and benefits sections were revised after v1 approval. The problem now has a large supplied spreadsheet-desk illustration, drifting source documents and a repeating read/work-out/enter/check rhythm. The benefits section shows the supplied four-frame tea animation, an existing rent prompt and its existing accounting categories. This is illustrative, not a live interaction. Headlines and body copy stay as approved. Animations stop for reduced motion. Supplied originals came from the owner's Drive sprites folder. The two used originals are included under public/sprites/review. No remote publication or push.

## Asset cleanup / v3

The desk is exported at exactly 2x using nearest-neighbor. Tea is split into four independent frames and exported at exactly 2x using nearest-neighbor; adjacent frame fragments and pale matte contour pixels are removed. Fully transparent pixels have zero RGB and alpha is hard 0/255, preventing a hidden white matte. CSS keeps pixelated rendering. This repairs source defects but does not invent detail or turn the original into newly drawn high-resolution art. No AI regeneration has been applied. Original assets stay intact alongside the cleaned exports.

## Owner-supplied desk / v4

The problem section now uses the owner's supplied 1290x1219 desk rendition with its white background removed, including enclosed chair/desk gaps. Warm paper and mug tones are preserved. Tea animation, copy and scene layout remain unchanged. The regenerated comparison trial was not used. No push or deploy.

## Owner tea sheet and eyes / v5

The owner's supplied four-frame tea sheet now replaces the prior tea art. Each frame has a separate body and transparent eye layer. The original painted eyes are replaced with local face color on the body, then the matching eye layer is composited above it. On mouse hover over the illustration scene, that layer shifts at most two display pixels toward the pointer and returns to neutral on exit. Touch devices retain normal tea animation without hover tracking. Reduced motion freezes frame cycling and eye tracking. Eye and body frames are preloaded. No desk, copy or page layout changes.
