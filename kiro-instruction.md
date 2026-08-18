# Kiro Instructions — Universal Career Navigator

## 1. Project Identity

Project name:

**Universal Career Navigator**

Team name:

**PathPilot**

IMPORTANT:

- Universal Career Navigator is the application name.
- PathPilot is only the team name.
- Never replace the application name with PathPilot.
- Do not rename the application unless explicitly requested.

---

## 2. Core Product Purpose

Universal Career Navigator is an AI-powered career guidance platform designed to help students move from career uncertainty to a practical education and career plan.

The core product journey is:

**DISCOVER → EXPLORE → PLAN → APPLY → GROW**

The detailed journey is:

**ASSESSMENT → PROFILE → CAREER → COURSE → CITY → EXAM → SCORE → COLLEGE → ROADMAP → PROGRESS**

The product should not simply tell students which career to choose.

It should help students understand:

**"What should I do next?"**

---

## 3. Existing Functionality

When modifying the project:

- Preserve all currently working features.
- Do not remove existing functionality without explicit approval.
- Do not break the 14-question assessment.
- Do not reset saved assessment answers.
- Do not create duplicate student profiles.
- Preserve existing navigation and working data flow.
- Make improvements incrementally.
- Avoid unnecessary rewrites of working components.

Before changing an existing feature, understand how it currently works.

---

## 4. Assessment Rules

The application currently uses a 14-question assessment.

Always maintain:

**Question X of 14**

The assessment should collect relevant information including:

- Interests
- Strengths
- Skills
- Goals
- Work preferences
- Learning preferences
- Budget
- Location preferences
- Relocation preferences
- Other career decision factors

### State requirements

Save assessment answers.

If the user goes backward:

**Previous answers must remain selected.**

If the user leaves and returns:

**Restore the previous assessment state.**

Going Home must not erase assessment data.

Reassessment should update the existing profile rather than creating a new profile.

---

## 5. Student Profile

Maintain one central student profile.

The profile should contain relevant:

- Interests
- Strengths
- Skills
- Goals
- Preferences
- Constraints
- Location
- Career interests
- Academic information

The same profile should support:

- Career matching
- Course recommendations
- College recommendations
- Roadmap
- Opportunities
- Progress

Do not create separate disconnected profiles for different features.

---

## 6. Career Recommendation Rules

Do not restrict recommendations to engineering or technology.

Support a broad range of legitimate career paths, including:

### Technology

- Software Engineering
- Data Science
- Data Analytics
- AI/ML
- Cybersecurity
- Cloud Computing
- Web Development

### Healthcare

- Medicine
- Nursing
- Pharmacy
- Physiotherapy
- Psychology
- Healthcare Management

### Business

- BBA
- MBA
- Finance
- Marketing
- Human Resources
- Entrepreneurship
- Business Analytics

### Law and Public Service

- LLB
- Legal careers
- Civil Services
- Public Administration
- Policy-related careers

### Commerce

- B.Com
- CA
- CS
- CMA
- Banking
- Accounting
- Finance

### Science and Research

- B.Sc
- Physics
- Chemistry
- Mathematics
- Biotechnology
- Environmental Science
- Research

### Creative and Design

- UX/UI Design
- Graphic Design
- Fashion Design
- Architecture
- Animation
- Media
- Content

### Education

- Teaching
- Training
- Instructional Design
- Education Technology

Also support other legitimate fields such as:

- Agriculture
- Aviation
- Hospitality
- Skilled trades
- Entrepreneurship
- Other suitable career pathways

Recommendations must be based on the student's profile.

Never assume engineering is the default career.

---

## 7. Career Matching

Career recommendations should consider:

- Interests
- Strengths
- Skills
- Goals
- Work preferences
- Learning preferences
- Budget
- Location
- Assessment responses

Provide multiple relevant options when appropriate.

Never claim:

- "This is definitely the correct career."
- "You will definitely succeed."
- "This career is guaranteed."

Recommendations are guidance, not guarantees.

---

## 8. Career → Course → College Flow

Maintain the connected decision flow:

**Career**

↓

**Course**

↓

**City**

↓

**Entrance Exam**

↓

**Score/Percentile**

↓

**College**

↓

**Roadmap**

Do not stop the user at the career recommendation stage.

---

## 9. City Support

Do not hard-code the application to one city.

Allow users to select or enter supported cities such as:

- Nagpur
- Mumbai
- Pune
- Delhi
- Bengaluru
- Hyderabad
- Chennai
- Kolkata
- Ahmedabad

The architecture should allow additional cities to be added.

---

## 10. College Recommendations

College recommendations should use available relevant information such as:

- Career
- Course
- City
- Entrance exam
- Score/percentile
- Eligibility
- Budget
- Preferences

Where appropriate, organize results into:

- Strong Fit
- Target
- Reach
- Backup

These categories are guidance only.

Never present them as guaranteed admission results.

---

## 11. College Data Accuracy

Never invent college information.

Do not fabricate:

- College names
- Fees
- Cutoffs
- Eligibility
- Contact numbers
- Admission dates
- Rankings
- Entrance requirements

Prefer verified information from:

- Official college websites
- Official university websites
- Government education portals
- Official admission authorities
- Permitted APIs
- Properly licensed datasets

If information cannot be verified, clearly state that verification is required.

Where practical, display the source and year.

---

## 12. Entrance Exam Rules

Where relevant, allow students to provide:

- Exam name
- Score
- Percentile
- Academic information

Use these as factors for college guidance.

Never guarantee admission.

Clearly communicate:

- Cutoffs can change.
- Eligibility can change.
- Seat availability can change.
- Students should verify current information through official sources.

---

## 13. Roadmap

Roadmaps should be actionable and personalized.

Possible roadmap elements:

- Learning fundamentals
- Courses
- Skills
- Certifications
- Projects
- Entrance exam preparation
- Internship preparation
- Application steps
- Other relevant career actions

Roadmaps should clearly distinguish:

- Completed steps
- Current step
- Upcoming steps

---

## 14. Opportunities

The Opportunities section may include:

- Internships
- Scholarships
- Competitions
- Certifications
- Projects
- Workshops

Always distinguish between:

**Verified/live opportunities**

and

**Demo/sample content**

Never present sample or placeholder information as live verified information.

---

## 15. Progress Tracking

Progress should remain connected to the central student profile.

Track:

- Completed steps
- Current step
- Upcoming actions
- Roadmap progress
- Milestones

Updating progress should not create duplicate profiles.

---

## 16. Navigation

Maintain consistent navigation.

Major sections include:

- Home
- Profile
- Matches
- Compare
- Roadmap
- Opportunities
- Progress
- College Recommendations

### Home button

A visible Home button/icon should be available from major sections.

Home must return to the dashboard without deleting user information.

### Back button

Maintain the existing:

**← Back**

navigation.

Back navigation must not accidentally reset the assessment or profile.

---

## 17. UI/UX Rules

The application should be:

- Modern
- Clean
- Professional
- Gen-Z friendly
- Responsive
- Easy to understand
- Visually engaging

Use:

- Cards
- Icons
- Appropriate emojis
- Clear sections
- Strong visual hierarchy
- Consistent spacing
- Clear buttons

Do not make the interface:

- Childish
- Overly colorful
- Distracting
- Excessively gamified
- Cluttered

---

## 18. Animation Rules

Use subtle animations and micro-interactions.

Examples:

- Option selection highlight
- Button hover
- Small press/scale feedback
- Smooth progress updates
- Short fade/slide transitions
- Card hover effects

Animations must be:

- Fast
- Smooth
- Subtle
- Purposeful

Do not add excessive animation.

Respect reduced-motion preferences where possible.

---

## 19. Responsive Design

The application must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Ensure:

- No horizontal overflow
- No clipped text
- Buttons remain usable
- Cards resize appropriately
- Navigation remains accessible
- Forms remain readable

---

## 20. Accessibility

Follow basic accessibility principles.

Use:

- Good color contrast
- Keyboard-accessible controls
- Visible focus states
- Meaningful button labels
- Proper heading hierarchy
- Accessible form labels
- Alternative text where appropriate
- Reduced-motion support

Do not rely only on color to communicate important information.

---

## 21. AI Rules

AI is a personalization and guidance layer.

AI can help with:

- Understanding assessment responses
- Organizing the student profile
- Identifying relevant career options
- Explaining recommendations
- Suggesting courses
- Supporting roadmap creation

AI must not:

- Invent college information
- Invent cutoffs
- Invent fees
- Guarantee admission
- Guarantee career success
- Make irreversible decisions for students

The student remains in control.

---

## 22. Responsible AI

Avoid biased recommendations.

The system should:

- Provide multiple paths
- Avoid pushing one career unnecessarily
- Avoid assuming engineering is best
- Communicate uncertainty
- Allow reassessment
- Encourage verification
- Keep the student in control

Use language such as:

- "Based on your assessment..."
- "This may be a suitable option..."
- "Consider comparing these options..."
- "Verify the latest information from the official source."

---

## 23. Privacy

Collect only information required for personalization.

Do not request unnecessary sensitive information.

Protect saved assessment and profile information.

Avoid exposing student information unnecessarily.

---

## 24. Error Handling

Never leave users with confusing blank screens.

If information is unavailable, provide a useful message.

Examples:

**"We couldn't find verified information for this option yet."**

**"Please verify the latest information from the official source."**

Errors should explain what the user can do next.

---

## 25. Loading States

Use simple loading states where needed.

Possible approaches:

- Skeleton cards
- Loading indicators
- Short loading messages
- Progress indicators

Avoid unnecessarily long or unexplained loading screens.

---

## 26. Data Honesty

Always distinguish between:

### Implemented

Features that actually work in the current application.

### Planned

Features intended for future production development.

Never claim that the prototype has:

- Live nationwide college data
- Live admission cutoffs
- Live opportunities
- Live external integrations

unless those systems are actually connected and working.

---

## 27. Code Quality

When modifying code:

- Keep components organized.
- Reuse existing components where practical.
- Avoid unnecessary duplication.
- Keep naming clear.
- Preserve existing functionality.
- Avoid introducing unnecessary dependencies.
- Handle errors appropriately.
- Keep UI components consistent.
- Keep state management predictable.

Do not make large architectural changes unless necessary.

---

## 28. Change Management

Before implementing a requested change:

1. Understand the existing feature.
2. Identify affected components.
3. Preserve current functionality.
4. Implement the smallest appropriate change.
5. Check navigation and state persistence.
6. Check responsive behavior.
7. Check for UI regressions.

Do not remove working functionality simply to implement a new feature.

---

## 29. Hackathon Demo Priority

The application should support a smooth demonstration flow:

**Home**

↓

**Assessment**

↓

**Profile**

↓

**Career Matches**

↓

**Career**

↓

**Course**

↓

**City**

↓

**Exam/Score**

↓

**College Recommendations**

↓

**Compare**

↓

**Roadmap**

↓

**Opportunities**

↓

**Progress**

The main demo journey should remain easy and reliable.

---

## 30. Final Product Principle

Always preserve the core purpose:

**Universal Career Navigator helps students turn career uncertainty into a clear and actionable next step.**

The product should communicate:

**DISCOVER → EXPLORE → PLAN → APPLY → GROW**

and:

**ASSESSMENT → PROFILE → CAREER → COURSE → CITY → EXAM → SCORE → COLLEGE → ROADMAP → PROGRESS**

All future changes should support this purpose.

---

## 31. Final Instruction

When making future changes to Universal Career Navigator:

- Preserve working functionality.
- Keep the application name as Universal Career Navigator.
- Keep PathPilot only as the team name.
- Maintain the 14-question assessment.
- Preserve user data and state.
- Keep recommendations broad and personalized.
- Do not fabricate education data.
- Maintain responsible AI practices.
- Keep the interface modern and professional.
- Use subtle animations.
- Maintain Home and Back navigation.
- Keep the application responsive and accessible.
- Prioritize a clear student journey.
- Prefer reliable, maintainable solutions over unnecessary complexity.

The final experience should remain:

**Modern + Personal + Clear + Trustworthy + Actionable**
