# Universal Career Navigator — Workflow

## 1. Overview

Universal Career Navigator follows a personalized career guidance workflow.

The system takes a student's interests, strengths, skills, goals, preferences, constraints, and relevant academic information and uses them to guide the student through career and education decisions.

The overall workflow is:

**ASSESS → PROFILE → MATCH → EXPLORE → PLAN → APPLY → TRACK**

The detailed decision journey is:

**Assessment → Profile → Career → Course → City → Entrance Exam → Score → College → Roadmap → Progress**

---

## 2. User Entry

The student starts from the Home/Dashboard screen.

The Home screen provides access to the major areas of the application, including:

- Career Assessment
- Profile
- Career Matches
- Compare
- College Recommendations
- Roadmap
- Opportunities
- Progress

The student can begin or continue their career assessment.

---

## 3. Career Assessment Workflow

The student completes a 14-question assessment.

### Assessment Flow

**Start Assessment**

↓

**Question 1**

↓

**Question 2**

↓

**Question 3**

↓

**...**

↓

**Question 14**

↓

**Assessment Complete**

The assessment collects information related to:

- Interests
- Strengths
- Skills
- Goals
- Work preferences
- Learning preferences
- Budget
- Location preferences
- Relocation preferences
- Other relevant career factors

---

## 4. Assessment State Management

Each answer should be saved.

When the student moves between questions:

**Answer → Save → Next Question**

If the student goes back:

**Back → Previous Question → Previously Selected Answer Restored**

If the student leaves the assessment:

**Leave → Return → Previous Assessment State Restored**

The student should not have to restart the assessment unnecessarily.

---

## 5. Student Profile Creation

After completing the assessment, the system organizes the responses into one central student profile.

### Profile contains

- Interests
- Strengths
- Skills
- Goals
- Preferences
- Constraints
- Location preference
- Relevant academic information
- Career-related priorities

The profile becomes the central source for personalized recommendations.

---

## 6. Career Matching Workflow

The system evaluates the student's profile and identifies relevant career paths.

### Input

Student Profile

↓

### Matching Factors

- Interests
- Strengths
- Skills
- Goals
- Work preferences
- Learning preferences
- Budget
- Location
- Other assessment responses

↓

### Output

Multiple relevant career matches

The system should not force the student into only one career.

---

## 7. Career Exploration

The student can explore career matches.

For each career, the application can provide information such as:

- Career overview
- Relevant skills
- Typical education pathway
- Related courses
- Potential next steps
- Relevant roadmap

The student can review their profile and reassess their path when necessary.

---

## 8. Career to Course Workflow

After exploring career options, the student can select a preferred career direction.

The system then connects the selected career with relevant courses.

### Flow

**Career**

↓

**Relevant Courses**

↓

**Student Selects Course**

For example:

**Data Career → Data Science / Data Analytics**

or

**Business Career → BBA / B.Com / Management-related courses**

The exact course suggestions depend on the selected career and available information.

---

## 9. City Selection Workflow

After selecting a course, the student can select a preferred city.

The system should support different cities rather than restricting the user to one location.

Example:

**Course Selected**

↓

**Select City**

↓

Nagpur / Mumbai / Pune / Delhi / Bengaluru / Hyderabad / Other Supported City

---

## 10. Entrance Exam Workflow

Where an entrance examination is relevant to the selected course, the student can provide:

- Entrance exam name
- Score
- Percentile
- Relevant academic information

### Flow

**Course**

↓

**Relevant Entrance Exam**

↓

**Student Enters Score/Percentile**

↓

**College Guidance**

If an entrance examination is not required or applicable, the system should not force the student to enter one.

---

## 11. College Recommendation Workflow

The system uses available student information to provide relevant college guidance.

### Inputs

- Career
- Course
- City
- Entrance exam
- Score/percentile
- Eligibility
- Budget
- Student preferences

↓

### College Recommendation

Possible categories:

- Strong Fit
- Target
- Reach
- Backup

These categories are guidance indicators and should not be presented as guaranteed admission results.

---

## 12. College Information Workflow

For each college, verified information may include:

- College name
- City
- Course
- Eligibility
- Fees
- Entrance requirements
- Cutoff information
- Cutoff year
- Hostel information
- Official website
- Official contact information

The system should prioritize official sources.

If information cannot be verified, the user should be informed that verification is required.

---

## 13. College Comparison Workflow

Students can select multiple college or career options for comparison.

### Flow

**Explore Options**

↓

**Select Options**

↓

**Compare**

↓

**Review Differences**

↓

**Make an Informed Choice**

The comparison feature supports decision-making but does not automatically make the final decision for the student.

---

## 14. Roadmap Workflow

After a student selects a career direction, the application generates or displays a personalized roadmap.

### Roadmap can contain

- Learning steps
- Courses
- Entrance exam preparation
- Skills
- Certifications
- Projects
- Internship preparation
- Application steps
- Other relevant actions

### Flow

**Career Selected**

↓

**Roadmap Created**

↓

**Current Step**

↓

**Upcoming Steps**

↓

**Completed Steps**

---

## 15. Opportunities Workflow

The Opportunities section can provide relevant career-building activities.

Examples:

- Internships
- Scholarships
- Competitions
- Certifications
- Projects
- Workshops

The application must distinguish between:

- Verified/live opportunities
- Demonstration/sample content
- Planned functionality

Sample information must never be presented as live verified opportunities.

---

## 16. Progress Workflow

Progress tracking connects to the student's roadmap.

### Flow

**Roadmap**

↓

**Student Completes Action**

↓

**Mark Step Complete**

↓

**Progress Updated**

↓

**Next Recommended Action**

Progress should remain connected to the same student profile.

---

## 17. Reassessment Workflow

Students may change their interests or goals over time.

The application therefore allows reassessment.

### Flow

**Existing Profile**

↓

**Reassess**

↓

**Update Answers**

↓

**Update Student Profile**

↓

**Refresh Career Matches**

↓

**Update Recommendations/Roadmap Where Appropriate**

Reassessment should update the existing profile rather than creating duplicate student profiles.

---

## 18. Navigation Workflow

The application provides consistent navigation.

### Home

**Home → Dashboard**

Going Home must not erase saved assessment answers or profile information.

### Back

**Back → Previous Relevant Screen**

Back navigation should preserve saved information.

### Main Sections

The student can navigate between:

- Home
- Profile
- Matches
- Compare
- Roadmap
- Opportunities
- Progress
- College Recommendations

---

## 19. AI Workflow

AI acts as a personalization and guidance layer.

### Input

Student assessment responses and profile information

↓

### AI Processing

The AI can help:

- Understand preferences
- Organize profile information
- Identify relevant career options
- Explain career matches
- Suggest relevant courses
- Support roadmap generation

↓

### Output

Personalized guidance

AI should not make irreversible decisions for students.

---

## 20. Data Verification Workflow

Education information such as college fees, cutoffs, eligibility, admission dates, and contact information can change.

Therefore:

**Information Retrieved**

↓

**Source Identified**

↓

**Source/Year Checked**

↓

**Information Displayed**

If reliable information is unavailable:

**Information Unavailable**

↓

**Ask User to Verify Official Source**

The system must never invent missing information.

---

## 21. Responsible Recommendation Workflow

The system should avoid biased or overly restrictive recommendations.

### Recommendation principles

- Consider multiple career paths
- Avoid automatically prioritizing engineering
- Consider student preferences
- Communicate uncertainty
- Allow reassessment
- Keep the student in control

The system provides guidance, not guaranteed outcomes.

---

## 22. Privacy Workflow

The application should collect only information necessary for personalization.

### Flow

**Student Provides Information**

↓

**Information Used for Personalization**

↓

**Profile/Recommendations Generated**

Only necessary information should be retained or processed.

Unnecessary sensitive information should not be requested.

---

## 23. Complete End-to-End Workflow

The complete user journey is:

**HOME**

↓

**14-QUESTION ASSESSMENT**

↓

**STUDENT PROFILE**

↓

**CAREER MATCHES**

↓

**CAREER EXPLORATION**

↓

**COURSE SELECTION**

↓

**CITY SELECTION**

↓

**ENTRANCE EXAM / SCORE**

↓

**COLLEGE RECOMMENDATIONS**

↓

**COMPARE OPTIONS**

↓

**ROADMAP**

↓

**OPPORTUNITIES**

↓

**PROGRESS**

↓

**REASSESS / CONTINUE**

---

## 24. Product Flow Summary

Universal Career Navigator transforms career uncertainty into a structured decision journey.

### Discover

Understand the student's interests, strengths and goals.

### Explore

Explore career and course possibilities.

### Plan

Connect the chosen path with city, exams, colleges and a roadmap.

### Apply

Guide the student toward practical education and career opportunities.

### Grow

Track progress and allow the student to reassess their path.

**DISCOVER → EXPLORE → PLAN → APPLY → GROW**
