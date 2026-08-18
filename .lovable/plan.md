# Kiro Buildathon Submission — GitHub Sync Plan

Goal: prepare the Universal Career Navigator repository for the Kiro Buildathon deadline by adding the required documentation files, then publish it to GitHub using Lovable's built-in two-way sync.

## Step 1: Create required documentation files

Add these five files to the repository root so the submission meets the required standard structure:

1. `project.md` — project overview
   - App name: Universal Career Navigator (team: PathPilot).
   - Problem statement and target users (Indian students choosing careers and colleges).
   - Core features actually built: 14-question autosaving assessment, single persisted student profile, broad career matching across tech/health/business/law/commerce/science/design/education/agriculture/aviation, career comparison, Career → Course → City → Exam → Score → College decision chain, Strong Fit / Target / Reach / Backup college banding, personalised roadmap, opportunities, progress tracking.
   - Tech stack: React 19, TanStack Start, TypeScript, Tailwind CSS v4, Vite.
   - Honest scope section: prototype uses static reference data; no live college feeds, live cutoffs, or live opportunity feeds.

2. `workflow.md` — how the app and build process work
   - User journey: Home → Assessment (Q1–14) → Profile → Matches → Select Career → Course → City → Exam/Score → College Recommendations → Compare → Roadmap → Opportunities → Progress.
   - Product framing: DISCOVER → EXPLORE → PLAN → APPLY → GROW.
   - State flow: one `ProfileProvider` in `src/store/profile.tsx` persisted to `localStorage`; every page reads the same profile; Home and Back never clear answers.
   - Development workflow: local setup commands (`npm install`, `npm run dev`), folder responsibilities (`src/routes`, `src/data`, `src/lib`, `src/components`, `src/store`).

3. `design.md` — design and architecture decisions
   - Design system: Sora display / Manrope body typography, semantic color tokens in `src/styles.css`, `card-surface` and `card-interactive` utility classes, subtle motion with `prefers-reduced-motion` respect.
   - UX principles: Gen-Z friendly but professional and parent/judge-safe; no gamification.
   - Architecture: route-per-section with TanStack Router, pure scoring logic in `src/lib/matching.ts`, roadmap generation in `src/lib/roadmap.ts`, static reference data in `src/data/*`.
   - Data honesty rule: never fabricate fees, cutoffs, contacts, or rankings; surface "verify from the official source" instead.

4. `kiro-instruction.md` — instructions and prompts used
   - How the project was specified and built: the final consolidated prompt, guiding constraints, and build decisions.
   - Core rules: preserve working features, app name remains Universal Career Navigator, PathPilot is team name only, no engineering-only bias, responsible AI and data-honesty rules.
   - Reproduction steps: install, run dev server, and walk the demo flow from Home to Progress.

5. Update `README.md`
   - Replace generic template text with Universal Career Navigator description, links to the four documentation files, setup instructions, and the tech stack.

## Step 2: Use Lovable GitHub sync

After the documentation files are added, use Lovable's built-in two-way sync to create the repository:

1. In the Lovable editor, open the Plus (+) menu in the chat input (bottom left).
2. Choose **GitHub → Connect project**.
3. Authorize the Lovable GitHub app if prompted.
4. Select the GitHub account/organization where the repository should be created.
5. Click **Create Repository** in Lovable to generate the repo and push the project code.

Lovable will sync all files, including the new `project.md`, `workflow.md`, `design.md`, `kiro-instruction.md`, and updated `README.md`.

## Step 3: Verify the submission

1. Open the new GitHub repository in a browser.
2. Confirm that `project.md`, `workflow.md`, `design.md`, `kiro-instruction.md`, `README.md`, and the `src/` directory are all present.
3. Copy the repository URL and share it before the 11:59 PM deadline.

## Notes

- The documentation will describe only what the prototype actually does, so nothing overstates the build.
- No application code or features change in this step — documentation files and README only.
