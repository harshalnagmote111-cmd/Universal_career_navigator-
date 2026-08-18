# Universal Career Navigator

Absolutely. This is the final consolidated prompt for your app. You can copy-paste the whole thing into Lovable. I’ve kept PathPilot only as the team name, not the app name.

Improve and enhance my existing application without changing the core concept, existing working features, or overall purpose.

IMPORTANT:
- The application name is "Universal Career Navigator".
- "PathPilot" is ONLY our team name. Do NOT use PathPilot as the application name.
- Preserve all currently working features, data flow, navigation, assessment logic, and existing functionality.
- Do not remove or break anything that is already working.
- Make the application feel modern, polished, Gen-Z friendly and engaging, but still professional and serious because it is a career guidance platform.
- Do not make it childish, overly colorful, distracting, or game-like.

==================================================
1. UI/UX DESIGN
==================================================

Upgrade the overall UI/UX quality of the application.

Requirements:
- Modern, clean and professional interface.
- Gen-Z friendly visual style.
- Attractive cards, icons and sections.
- Use emojis/icons appropriately where they improve understanding.
- Improve typography and spacing.
- Make all text sharp, readable and high quality.
- Avoid blurry, low-resolution or poorly rendered text.
- Maintain consistent typography, spacing, buttons and card styles throughout the application.
- Make the interface responsive for desktop and mobile.
- Keep the design visually engaging without making it look unserious.

The application should feel like a modern career product rather than a basic academic form.

==================================================
2. SUBTLE ANIMATIONS & MICRO-INTERACTIONS
==================================================

Add subtle and smooth animations throughout the application.

Examples:
- When selecting an assessment option, show a small smooth highlight/scale effect.
- Buttons can have a subtle press/ripple/hover effect.
- Cards can have a slight hover animation.
- Page transitions should be smooth and lightweight.
- Progress indicators should animate smoothly when progress changes.
- Selected preferences should have a clear but subtle visual transition.
- Opening or changing sections can use a short fade/slide transition.

IMPORTANT:
- Animations must be subtle, fast and professional.
- Do NOT over-animate.
- Do NOT make the app look like a game.
- Animations should improve usability and visual polish, not distract from the content.
- Respect reduced-motion accessibility preferences where possible.

==================================================
3. NAVIGATION
==================================================

Add a clearly visible Home button/icon (🏠) throughout the main application.

Home should be accessible from:
- Profile
- Matches
- Compare
- Roadmap
- Opportunities
- Progress
- College recommendations
- Other major sections

Home must return the user to the main dashboard/home page.

IMPORTANT:
- Going Home must NOT erase assessment answers.
- Going Home must NOT reset the student profile.
- Saved information must remain intact.

Maintain the existing "← Back" buttons.

Back navigation must:
- Work consistently.
- Be history-aware where appropriate.
- Have a safe route fallback.
- Never accidentally erase saved assessment answers or profile data.

Keep the complete main navigation intact.

==================================================
4. CAREER ASSESSMENT
==================================================

Keep the existing 14-question assessment.

The assessment should clearly display:

"Question X of 14"

The assessment should cover areas such as:
- Interests
- Strengths
- Skills
- Goals
- Priorities
- Preferred work style
- Learning preferences
- Budget/financial constraints
- Location preferences
- Relocation preferences
- Other relevant career decision factors

IMPORTANT:
- Save every answer automatically.
- Save the current question/step.
- If the user goes back, previously selected answers must remain selected.
- If the user leaves the assessment and returns later, restore the exact previous state.
- Do not make the user restart.
- Reassessment should update the existing single student profile rather than creating duplicate profiles.

Keep the existing assessment logic intact unless an improvement is necessary.

==================================================
5. PERSONALIZED STUDENT PROFILE
==================================================

Create/maintain one central student profile based on the assessment.

The profile should include relevant:
- Interests
- Strengths
- Skills
- Goals
- Preferences
- Constraints
- Location preference
- Career interests
- Relevant academic/entrance-exam information

The same profile should feed:
- Career matches
- Course recommendations
- College recommendations
- Roadmap
- Opportunities
- Progress

Do not create disconnected profiles for different features.

==================================================
6. CAREER OPTIONS — NOT ENGINEERING ONLY
==================================================

This application must NOT be limited to engineering or technology careers.

Include a broad range of career paths, including but not limited to:

Technology:
- Software Engineering
- Data Science
- Data Analytics
- AI/ML
- Cybersecurity
- Cloud Computing
- Web Development

Healthcare:
- Medicine
- Nursing
- Pharmacy
- Physiotherapy
- Psychology
- Healthcare Management
- Other relevant healthcare careers

Business & Management:
- BBA
- MBA
- Finance
- Marketing
- Human Resources
- Entrepreneurship
- Business Analytics

Law & Public Service:
- LLB
- Legal careers
- Civil Services
- Public Administration
- Policy-related careers

Commerce:
- B.Com
- CA
- CS
- CMA
- Banking
- Accounting
- Finance

Science & Research:
- B.Sc
- Research
- Biotechnology
- Physics
- Chemistry
- Mathematics
- Environmental Science

Design & Creative:
- UX/UI Design
- Graphic Design
- Fashion Design
- Architecture
- Animation
- Media
- Content/Creative careers

Education:
- Teaching
- Training
- Instructional Design
- Education Technology

Also support:
- Agriculture
- Aviation
- Hospitality
- Skilled trades
- Defence-related educational/career pathways where appropriate
- Other legitimate career paths
- Entrepreneurship

The system should recommend careers based on the student's profile rather than forcing a particular field.

==================================================
7. CAREER MATCHING
==================================================

Improve career matching so that recommendations are personalized.

Use factors such as:
- Interests
- Strengths
- Skills
- Goals
- Work preferences
- Academic preferences
- Budget
- Location
- Other assessment responses

Show multiple relevant career options where appropriate.

Do not present one recommendation as an absolute or guaranteed correct career.

Allow users to:
- Compare careers
- Review their profile
- Reassess their path
- Explore alternatives

==================================================
8. CAREER → COURSE → CITY → EXAM → COLLEGE
==================================================

Create a connected journey.

The user should be able to move from:

Career
↓
Course
↓
Preferred City
↓
Relevant Entrance Exam
↓
Exam Score/Percentile
↓
College Recommendations
↓
Roadmap

For example:

A student chooses a management-related career → selects BBA/MBA or another relevant course → selects Nagpur → provides relevant entrance exam information and score if applicable → receives relevant college guidance.

Do not stop at career recommendations.

==================================================
9. CITY-BASED COLLEGE RECOMMENDATIONS
==================================================

Allow the student to enter/select ANY city.

Do not hard-code only one or a few cities.

If a student enters a city such as:
- Nagpur
- Mumbai
- Pune
- Delhi
- Bengaluru
- Hyderabad
- Chennai
- Kolkata
- Ahmedabad
- or another supported city,

the system should use the selected city together with:
- Career
- Course
- Preferences
- Budget
- Entrance exam
- Score/percentile
- Eligibility
- Other relevant inputs

to provide suitable college options.

The recommendation should be personalized to the student's requirements.

==================================================
10. COLLEGE RECOMMENDATION SYSTEM
==================================================

Do not simply show a generic list of colleges.

Organize recommendations into categories such as:

1. Strong Fit
2. Target
3. Reach
4. Backup

Explain briefly why a college appears in a category.

Potential factors:
- Course availability
- City preference
- Eligibility
- Entrance exam
- Score/percentile
- Budget
- Student preferences
- Available admission information

IMPORTANT:
These categories are guidance only and must NOT be presented as guaranteed admission outcomes.

==================================================
11. COLLEGE INFORMATION
==================================================

Where verified information is available, show:
- College name
- City
- Relevant course
- Eligibility
- Fees
- Entrance requirements
- Cutoff information
- Cutoff year
- Hostel information where available
- Official website
- Official contact number
- Other useful admission information

For contact numbers, prefer official college/institution contact information.

Do not invent:
- College names
- Phone numbers
- Fees
- Cutoffs
- Eligibility
- Admission dates
- Rankings

If information is unavailable, clearly state that it needs verification.

==================================================
12. COLLEGE DATA SOURCES
==================================================

For a production-ready version, prioritize:
- Official college websites
- Official university websites
- Official admission authorities
- Government education portals
- Permitted APIs
- Properly licensed datasets

Third-party education platforms may be used only where their data usage is legally permitted and appropriate.

Do not scrape, reproduce or claim ownership of third-party data without permission.

If a data source is used, show the relevant source/year where practical.

The application must never fabricate college information.

==================================================
13. ENTRANCE EXAM & SCORE GUIDANCE
==================================================

Allow students to enter relevant entrance examination information.

Depending on the selected course/career, allow:
- Exam name
- Score
- Percentile
- Relevant academic information

Use this information as one factor in college guidance.

Do not guarantee admission.

Clearly communicate that:
- Cutoffs can change.
- Eligibility can change.
- Seat availability can change.
- Students must verify current information through official admission sources.

==================================================
14. ROADMAP
==================================================

After the student chooses a career direction, provide an actionable roadmap.

The roadmap can include:
- Recommended learning steps
- Relevant courses
- Entrance exam preparation
- Application steps
- Skill development
- Certifications
- Projects
- Internship preparation
- Other relevant next steps

The roadmap should be personalized to the selected career/course.

==================================================
15. OPPORTUNITIES
==================================================

Include an Opportunities section for relevant:
- Internships
- Scholarships
- Competitions
- Certifications
- Projects
- Workshops
- Other career-building opportunities

Clearly distinguish between:
- Verified/live opportunities
- Demo/sample content
- Planned/future functionality

Do not present sample data as live opportunities.

==================================================
16. PROGRESS TRACKING
==================================================

Include a Progress section.

Allow students to track:
- Completed steps
- Current step
- Upcoming actions
- Roadmap progress
- Other relevant milestones

Keep progress connected to the same student profile.

==================================================
17. AI FUNCTIONALITY
==================================================

Use AI as a personalization and guidance layer, NOT simply as a generic chatbot.

AI can help:
- Understand assessment responses
- Organize the student profile
- Identify relevant career options
- Generate personalized explanations
- Suggest relevant courses
- Support roadmap creation
- Help connect student preferences with available college information

AI must not:
- Invent college information
- Invent exam cutoffs
- Guarantee admission
- Guarantee career success
- Make irreversible decisions for the student

Recommendations should be presented as guidance.

==================================================
18. RESPONSIBLE AI & BIAS
==================================================

The system should:
- Provide multiple relevant paths
- Avoid pushing one career unnecessarily
- Avoid assuming every student wants engineering
- Clearly communicate uncertainty
- Allow users to reassess
- Encourage verification of critical information
- Avoid discriminatory or biased recommendations

The user should remain in control of their final career and education decisions.

==================================================
19. PRIVACY
==================================================

Collect only information needed for personalization.

Do not request unnecessary sensitive personal information.

Clearly communicate how student information is used where appropriate.

Protect saved assessment and profile information.

==================================================
20. GEN-Z EXPERIENCE
==================================================

The application should be designed for today's students.

Make it:
- Modern
- Interactive
- Visual
- Easy to understand
- Friendly
- Engaging

Use:
- Emojis/icons where appropriate
- Micro-interactions
- Progress indicators
- Attractive cards
- Short readable text
- Clear visual hierarchy

But IMPORTANT:

The application must remain:
- Professional
- Trustworthy
- Serious about career decisions
- Suitable for parents, mentors and judges as well as students

Do not make it childish or overly gamified.

==================================================
21. VISUAL QUALITY
==================================================

Improve the quality of all UI text and visual elements.

Requirements:
- Sharp text
- High-quality rendering
- Good contrast
- Consistent font hierarchy
- Good spacing
- No overlapping elements
- No clipped text
- No blurry UI
- Responsive design
- Consistent icons
- Consistent button styling

Make the application presentation-ready for a hackathon demo.

==================================================
22. NAVIGATION & STATE MANAGEMENT
==================================================

Maintain:
- Home button
- Back button
- Main navigation
- Profile
- Matches
- Compare
- Roadmap
- Opportunities
- Progress
- College recommendations

Navigation must not cause data loss.

Assessment answers and profile state must persist when:
- Going back
- Going Home
- Leaving a page
- Returning to the assessment
- Reassessing the profile

Use one shared student profile/state throughout the application.

==================================================
23. DEMO-FRIENDLY USER JOURNEY
==================================================

The primary demo flow should be:

Home
→ Assessment
→ Question 1–14
→ Student Profile
→ Career Matches
→ Select Career
→ Select Course
→ Select City
→ Enter Entrance Exam/Score if applicable
→ College Recommendations
→ Compare Options
→ Roadmap
→ Opportunities
→ Progress

Make this flow easy to demonstrate during a hackathon presentation.

==================================================
24. IMPORTANT DATA HONESTY RULE
==================================================

Clearly distinguish between:

A. Features that are actually implemented in the current prototype.

B. Features that are planned for the production version.

Never claim that the prototype has live nationwide college data, live admission cutoffs, live opportunities or live integrations unless those features are actually connected and working.

For unavailable information, show appropriate messaging such as:
"Information needs to be verified from the official source."

==================================================
25. FINAL PRODUCT EXPERIENCE
==================================================

The final application should communicate this core idea:

"We don't just tell students what career may suit them.
We help them understand what to do next."

The complete product journey should be:

DISCOVER
→ EXPLORE
→ PLAN
→ APPLY
→ GROW

And the practical decision journey should be:

ASSESSMENT
→ PROFILE
→ CAREER
→ COURSE
→ CITY
→ EXAM
→ SCORE
→ COLLEGE
→ ROADMAP
→ PROGRESS

Make the final application polished, consistent, responsive, Gen-Z friendly, professional, trustworthy and ready for a hackathon demonstration.

Do not remove existing working functionality.
Do not break the current assessment.
Do not create duplicate profiles.
Do not replace PathPilot with the app name.
The app name must remain:

UNIVERSAL CAREER NAVIGATOR

PathPilot = TEAM NAME ONLY.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f585ad47-69e7-40b4-9ef4-1e7642995507).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
