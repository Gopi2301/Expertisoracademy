# Comprehensive Project Handover  
**Created by:** Aman Bhogal  
**Date:** November 11, 2025

---

## 1. Quick Hello
Hi team! Over the last two weeks we put the Expertisor Academy frontend on a healthier footing—shrinking payloads, tightening the toolchain, and documenting the workflow so anyone can ship with confidence. This note is your all-in-one guide to what changed, why it matters, and how to keep the momentum going.

---

## 2. Project Snapshot (Post-Optimization)
- **Framework:** Vite + React (19.x)  
- **Styling:** Tailwind CSS with custom utility layers  
- **Media Handling:** WebP-first strategy supported by Sharp conversions  
- **Testing/Checks:** Manual `npm run build`, Lighthouse via dedicated scripts  
- **Key Scripts:**  
  - `npm run optimize:mentors` (new) – regenerates WebP assets from SVG sources  
  - `npm run analyze` – launches bundle analyzer (optional)  
  - `npm run lighthouse[:preview]` – spins up preview + runs automated Lighthouse suite

---

## 3. Last 14 Days — What Was Delivered
| When | What Happened | Why It Mattered |
|------|----------------|-----------------|
| Day 1–2 | Read `OPTIMIZATION_README.md`, `PERFORMANCE_OPTIMIZATION_REPORT.md`, `DEVELOPMENT_OPTIMIZATION_REPORT.md`, and `plan.md`. | Captured historical intent, pending items, and regression notes so new work aligned with prior decisions. |
| Day 3 | Ran fresh `npm install` + `npm run build` to reproduce issues; collected bundle output for baseline. | Verified the repo still compiled and highlighted compression spam + chunk sizes that needed attention. |
| Day 4–5 | **Phase 1:** Restored lazy-loading for mentor animations and re-tested with `npm run build`. | Chunk `Community-CTUO91xt.js` dropped from ~1.6 MB to ~2 kB, eliminating unnecessary JSON in first paint. |
| Day 6 | Audited mentors-related components (`Hero.jsx`, `KeyBenefits.jsx`, `MentorsRun.jsx`, etc.) to map heavy imports. | Identified every point pulling large SVG blobs into the initial bundle. |
| Day 7–8 | **Phase 2:** Fixed Vite compression plugin configuration, reran build, and confirmed clean logs. | Gzip/Brotli files now generate without overwrites, keeping build output CI-friendly. |
| Day 9 | **Phase 3 (part 1):** Removed unused runtime deps (`express`, `body-parser`, `jquery`, `slick-carousel`) & the Slick CSS import; ran install + build to ensure no breakage. | Lighter `node_modules`, faster installs, and fewer security risks. |
| Day 10 | **Phase 3 (part 2):** Verified linting on touched files (`Initiative.jsx`) and tidied imports. | Locked in UI parity after dependency cleanup. |
| Day 11 | **Phase 4:** Wired `npm run analyze`, `npm run lighthouse`, and `npm run lighthouse:preview`; documented how to run them. | Gives the team consistent performance guardrails before merge/release. |
| Day 12 | Updated optimization reports with 2025 changes (later removed in favor of this handover). | Ensured learnings were captured while the new consolidated doc was still in progress. |
| Day 13 | Converted heavy SVG hero assets to WebP, added `optimize:mentors` pipeline, and updated component imports; lint + build verification. | Entry bundle shed ~700 kB of SVG payload, marquee assets now WebP (~50 kB each). |
| Day 14 | Archived old markdown reports, created `HANDOVER.md`, and performed a final `npm run optimize:mentors && npm run build`. | Provided a single, human-friendly handover plus final verification of the new workflow. |

---

## 4. Before & After Highlights
| Area | Before | After |
|------|--------|-------|
| **Become Mentor chunk** | ~1.6 MB due to inline Lottie JSON | ~2 kB with lazy imports + dynamic `import()` |
| **Mentor hero imagery** | Multiple 600 kB–1 MB SVGs in entry bundle | Optimized WebP assets (≈40–200 kB) loaded on demand |
| **Build scripts** | Dual compression overwriting outputs, noisy logs | Distinct `.gz` and `.br` files retained, clean build summary |
| **Dependencies** | Legacy Express stack still installed for no reason | Removed; fresh `npm install` skips redundant packages |
| **Documentation** | Fragmented across several markdown files | Unified in this single handover doc |

---

## 5. Fresh Files & Scripts to Know
1. **`scripts/convert-mentor-assets.js`**  
   - Uses Sharp to convert specific SVG directories/files to WebP.  
   - Automatically detects embedded `data:image` URIs and resizes responsibly.  
   - Invoke with `npm run optimize:mentors` whenever new mentor imagery lands.

2. **Asset Imports Updated**  
   - WebP imports now live in `src/assets/assets.js`, `CourseContextProvider.jsx`, `MentorsRun.jsx`, and related components.
   - Marquee avatars (`m1`–`m4`) now reference `src/assets/optimized/mentorsRun`.

3. **Clean Slate**  
   - Deprecated markdown reports removed (`README.md`, `plan.md`, `OPTIMIZATION_README.md`, etc.).  
   - `HANDOVER.md` replaces them as the single source of truth.

---

## 6. Developer Flow (Please Follow)
1. **Setup**  
   ```bash
   npm install
   npm run dev
   ```
2. **When Adding/Changing Mentor Graphics**  
   ```bash
   npm run optimize:mentors
   git add src/assets/optimized
   ```
3. **Pre-merge Confidence**  
   ```bash
   npm run build          # ensure no regressions
   npm run analyze        # optional – opens treemap
   npm run lighthouse:preview  # terminal 1
   npm run lighthouse          # terminal 2
   ```
4. **Deploy Notes**  
   - Keep `ANALYZE=true` out of production builds.  
   - Watch for new large SVG/PNG assets — convert them early rather than shoving into bundle.

---

## 7. Outstanding Watchlist
- **Large Background SVGs** (`hero_bg_mobile.svg`, etc.) still weigh several MB. Next sprint: convert to WebP/AVIF or slice into CSS gradients.  
- **Lottie Animations**: currently loaded lazily, but if they grow, consider hosting JSON on CDN.  
- **CI Integration**: Scripts ready; just wire into GitHub Actions or your preferred pipeline.

---

## 8. Additional Highlights
- Multiple build verifications (`npm run build`) after each major change, ensuring no regressions slipped in.  
- Lint checks on touched components (`Initiative.jsx`, `HomeComponents/DownloadSection.jsx`, `MentorsRun.jsx`, etc.) to keep the codebase warning-free.  
- Asset tree cleanup: stale SVG imports replaced across `CourseContextProvider`, `MentorsRun`, `KeyBenefits`, and download sections.  
- Project hygiene: deleted obsolete markdown reports to prevent conflicting documentation.  
- Script hardening: `convert-mentor-assets.js` now handles embedded base64 images, resizes safely, and defaults to WebP for every heavy illustration family.  
- Dependency audit captured in commit history for easy future reference (which packages were removed and why).

---

## 8. Closing Thoughts
Everything above stays intentionally human. The idea is that – even if you weren’t around for the changes – you can read this once and immediately understand what to do next.

If anything’s unclear, ping Aman Bhogal. Happy shipping!

---

