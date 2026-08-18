# Kiro Buildathon Submission Prep — Universal Career Navigator

Goal: add the four required documentation files to the project so the repository meets the Kiro Buildathon standard structure, then push everything to GitHub before tonight's deadline.

## Files to create at the repository root

1. `project.md` — project overview
   - App name: Universal Career Navigator (team name: PathPilot).
   - Problem statement, target users (students choosing careers/colleges in India).
   - Core feature list as actually built: 14-question autosaving assessment, single persisted student profile, career matching across tech/health/business/law/commerce/science/design/education/other, career comparison, Career → Course → City → Exam → Score → College decision chain with Strong Fit / Target / Reach / Backup banding, personalised roadmap, opportunities, progress tracking.
   - Tech stack: React 19, TanStack Start, TypeScript, Tailwind CSS v4, Vite.
   - Honest scope section: what is implemented in the prototype vs planned for production (no live college feed, no live cutoffs, no live opportunities feed).

2. `workflow.md` — how the app and the build process work
   - User journey: Home → Assessment (Q1–14) → Profile → Matches → Select Career → Course → City → Exam/Score → College Recommendations → Compare → Roadmap → Opportunities → Progress.
   - Product framing: DISCOVER → EXPLORE → PLAN → APPLY → GROW.
   - State flow: one `ProfileProvider` in `src/store/profile.tsx` persisted to localStorage; every page reads the same profile; Home/Back never clear answers.
   - Development workflow: local setup commands, folder responsibilities (`src/routes`, `src/data`, `src/lib`, `src/components`, `src/store`).

3. `design.md` — design and architecture decisions
   - Design system: Sora display / Manrope body typography, semantic color tokens in `src/styles.css`, card and interactive utility classes, subtle motion with reduced-motion respect.
   - UX principles: Gen-Z friendly but professional and parent/judge-safe; no gamification.
   - Architecture: route-per-section with TanStack Router, pure scoring logic in `src/lib/matching.ts`, roadmap generation in `src/lib/roadmap.ts`, static reference data in `src/data/*`.
   - Data honesty rule: never fabricate fees, cutoffs, contacts, or rankings; surface "verify from the official source" instead.

4. `kiro-instruction.md` — instructions and prompts used
   - How the project was specified and built, the guiding constraints (preserve working features, app name stays Universal Career Navigator, PathBot/PathPilot is team name only, no engineering-only bias, responsible-AI and data-honesty rules).
   - Reproduction steps: install, run dev server, walk the demo flow.

5. Update `README.md` so it describes Universal Career Navigator, links the four docs, and includes setup instructions instead of the generic template text.

## Push to GitHub

1. Download the codebase from the Lovable Code Editor ("Download codebase" at the bottom of the file tree).
2. Extract it, then in that folder: remove any existing `.git`, run `git init`, `git add .`, `git commit -m "Universal Career Navigator - Kiro Buildathon submission"`.
3. Create an empty GitHub repository (no README/.gitignore) and copy its URL.
4. `git remote add origin <URL>`, `git branch -M main`, `git push -u origin main`.
5. Confirm on GitHub that `project.md`, `workflow.md`, `design.md`, `kiro-instruction.md`, `README.md` and `src/` are all present, then share the repository link.

## Notes

- The documentation will describe only what the prototype actually does, so nothing in the submission overstates the build.
- No application code or features change in this step — documentation files only.
