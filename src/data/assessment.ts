export type TagWeight = Record<string, number>;

export type Choice = {
  id: string;
  label: string;
  emoji?: string;
  tags?: TagWeight;
  /** stored onto the profile under this key when selected */
  sets?: Partial<Record<ProfileField, string>>;
};

export type ProfileField =
  | "workStyle"
  | "learningStyle"
  | "budget"
  | "locationPreference"
  | "relocation"
  | "timeline"
  | "stage"
  | "riskAppetite";

export type Question = {
  id: string;
  section: "Interests" | "Strengths" | "Skills" | "Goals" | "Preferences" | "Constraints";
  emoji: string;
  title: string;
  help?: string;
  multi?: boolean;
  maxSelect?: number;
  choices: Choice[];
};

/** 14 questions — order is the demo order (Question X of 14). */
export const QUESTIONS: Question[] = [
  {
    id: "q1_stage",
    section: "Goals",
    emoji: "🎓",
    title: "Where are you right now in your journey?",
    help: "This helps us pitch the roadmap at the right level.",
    choices: [
      { id: "class10", label: "Class 10 — choosing a stream", sets: { stage: "Class 10" } },
      { id: "class12", label: "Class 11/12 — choosing a course", sets: { stage: "Class 11/12" } },
      { id: "ug", label: "Undergraduate student", sets: { stage: "Undergraduate" } },
      { id: "grad", label: "Graduate / switching paths", sets: { stage: "Graduate or switching" } },
    ],
  },
  {
    id: "q2_interests",
    section: "Interests",
    emoji: "💡",
    title: "Which subjects or themes genuinely pull you in?",
    help: "Pick up to 3.",
    multi: true,
    maxSelect: 3,
    choices: [
      { id: "tech", label: "Computers, code & systems", emoji: "💻", tags: { tech: 3, analytical: 1 } },
      { id: "bio", label: "Human body, biology & care", emoji: "🩺", tags: { health: 3, people: 1 } },
      { id: "business", label: "Business, money & markets", emoji: "📈", tags: { business: 3, commerce: 1 } },
      { id: "law", label: "Law, policy & society", emoji: "⚖️", tags: { law: 3, publicservice: 2 } },
      { id: "science", label: "Pure science & research", emoji: "🔬", tags: { science: 3, analytical: 2 } },
      { id: "design", label: "Design, art & storytelling", emoji: "🎨", tags: { creative: 3 } },
      { id: "teach", label: "Teaching & mentoring", emoji: "📚", tags: { education: 3, people: 2 } },
      { id: "field", label: "Land, food, sky & machines", emoji: "🌱", tags: { applied: 3, hands: 2 } },
    ],
  },
  {
    id: "q3_strengths",
    section: "Strengths",
    emoji: "💪",
    title: "What do people usually say you're good at?",
    help: "Pick up to 2.",
    multi: true,
    maxSelect: 2,
    choices: [
      { id: "logic", label: "Logic & problem solving", tags: { analytical: 3, tech: 1, science: 1 } },
      { id: "empathy", label: "Listening & helping people", tags: { people: 3, health: 1, education: 1 } },
      { id: "words", label: "Writing & arguing a point", tags: { law: 2, creative: 2, communication: 3 } },
      { id: "numbers", label: "Numbers & patterns", tags: { commerce: 2, analytical: 3, business: 1 } },
      { id: "visual", label: "Visual & aesthetic sense", tags: { creative: 3 } },
      { id: "leading", label: "Organising & leading a team", tags: { business: 3, publicservice: 1, people: 1 } },
    ],
  },
  {
    id: "q4_skills",
    section: "Skills",
    emoji: "🛠️",
    title: "Which skills do you already have some grip on?",
    multi: true,
    maxSelect: 3,
    choices: [
      { id: "coding", label: "Coding / scripting", tags: { tech: 3 } },
      { id: "data", label: "Spreadsheets & data", tags: { analytical: 3, business: 1, commerce: 1 } },
      { id: "speaking", label: "Public speaking", tags: { communication: 3, business: 1, law: 1 } },
      { id: "designtools", label: "Design tools / drawing", tags: { creative: 3 } },
      { id: "labwork", label: "Lab & practical work", tags: { science: 3, health: 1 } },
      { id: "none", label: "Still exploring — nothing solid yet", tags: {} },
    ],
  },
  {
    id: "q5_goal",
    section: "Goals",
    emoji: "🎯",
    title: "What matters most to you in a career, honestly?",
    choices: [
      { id: "money", label: "Strong earning potential", tags: { business: 2, tech: 2, commerce: 1 } },
      { id: "impact", label: "Visible impact on people", tags: { health: 2, education: 2, publicservice: 2 } },
      { id: "stability", label: "Stability & security", tags: { publicservice: 2, commerce: 2, education: 1 } },
      { id: "creative", label: "Creative freedom", tags: { creative: 3 } },
      { id: "build", label: "Building my own thing", tags: { business: 3, tech: 1 } },
    ],
  },
  {
    id: "q6_workstyle",
    section: "Preferences",
    emoji: "🧩",
    title: "Which work day sounds most like you?",
    choices: [
      {
        id: "deep",
        label: "Deep focus, few interruptions",
        sets: { workStyle: "Deep, focused solo work" },
        tags: { tech: 2, science: 2, analytical: 1 },
      },
      {
        id: "team",
        label: "Constant collaboration",
        sets: { workStyle: "Collaborative & team-driven" },
        tags: { business: 2, people: 2 },
      },
      {
        id: "frontline",
        label: "With people / on the frontline",
        sets: { workStyle: "People-facing frontline work" },
        tags: { health: 2, education: 2, publicservice: 1 },
      },
      {
        id: "handson",
        label: "Hands-on, on-site, practical",
        sets: { workStyle: "Hands-on and on-site" },
        tags: { applied: 3, hands: 2 },
      },
    ],
  },
  {
    id: "q7_learning",
    section: "Preferences",
    emoji: "📖",
    title: "How do you learn best?",
    choices: [
      { id: "structured", label: "Structured classes & syllabus", sets: { learningStyle: "Structured coursework" } },
      { id: "projects", label: "Projects & building things", sets: { learningStyle: "Project-based learning" } },
      { id: "visualvid", label: "Videos & visual explainers", sets: { learningStyle: "Visual & video-first" } },
      { id: "mentor", label: "Mentors & discussion", sets: { learningStyle: "Mentor-led discussion" } },
    ],
  },
  {
    id: "q8_academic",
    section: "Preferences",
    emoji: "🧪",
    title: "Which academic route feels realistic for you?",
    multi: true,
    maxSelect: 2,
    choices: [
      { id: "pcm", label: "Science (PCM) route", tags: { tech: 2, science: 2, applied: 1 } },
      { id: "pcb", label: "Science (PCB) route", tags: { health: 3, science: 1 } },
      { id: "comm", label: "Commerce route", tags: { commerce: 3, business: 2 } },
      { id: "arts", label: "Arts / Humanities route", tags: { law: 2, creative: 2, education: 2, publicservice: 1 } },
      { id: "voc", label: "Vocational / skill-first route", tags: { applied: 3, hands: 3 } },
    ],
  },
  {
    id: "q9_exampatience",
    section: "Preferences",
    emoji: "⏳",
    title: "How do you feel about long entrance-exam prep?",
    choices: [
      { id: "allin", label: "All in — I can grind 1–2 years", tags: { health: 2, publicservice: 2, science: 1 }, sets: { riskAppetite: "High — long prep is fine" } },
      { id: "moderate", label: "Some prep is fine", tags: { tech: 1, business: 1 }, sets: { riskAppetite: "Moderate prep" } },
      { id: "minimal", label: "I'd rather start studying/earning sooner", tags: { commerce: 2, creative: 2, applied: 2 }, sets: { riskAppetite: "Prefer minimal exam prep" } },
    ],
  },
  {
    id: "q10_budget",
    section: "Constraints",
    emoji: "💰",
    title: "What education budget are you planning with?",
    help: "Used only to shape college and scholarship suggestions.",
    choices: [
      { id: "low", label: "Under ₹1L per year", sets: { budget: "Under ₹1L / year" } },
      { id: "mid", label: "₹1L – ₹3L per year", sets: { budget: "₹1L – ₹3L / year" } },
      { id: "high", label: "₹3L – ₹8L per year", sets: { budget: "₹3L – ₹8L / year" } },
      { id: "flex", label: "Flexible / will rely on scholarships & loans", sets: { budget: "Flexible with aid" } },
    ],
  },
  {
    id: "q11_location",
    section: "Constraints",
    emoji: "📍",
    title: "Where would you prefer to study?",
    choices: [
      { id: "home", label: "In or near my home city", sets: { locationPreference: "Home city / nearby" } },
      { id: "state", label: "Anywhere in my state", sets: { locationPreference: "Within my state" } },
      { id: "india", label: "Anywhere in India", sets: { locationPreference: "Anywhere in India" } },
      { id: "abroad", label: "Open to abroad later", sets: { locationPreference: "India now, abroad later" } },
    ],
  },
  {
    id: "q12_relocation",
    section: "Constraints",
    emoji: "🧳",
    title: "Are you willing to relocate for a better fit?",
    choices: [
      { id: "yes", label: "Yes, happily", sets: { relocation: "Willing to relocate" } },
      { id: "maybe", label: "Only for a clearly better option", sets: { relocation: "Relocate only if clearly better" } },
      { id: "no", label: "No, I need to stay local", sets: { relocation: "Prefers to stay local" } },
    ],
  },
  {
    id: "q13_timeline",
    section: "Goals",
    emoji: "🗓️",
    title: "When do you want to start your next step?",
    choices: [
      { id: "now", label: "This admission cycle", sets: { timeline: "This admission cycle" } },
      { id: "next", label: "Next year", sets: { timeline: "Next year" } },
      { id: "explore", label: "Just exploring for now", sets: { timeline: "Exploring" } },
    ],
  },
  {
    id: "q14_environment",
    section: "Interests",
    emoji: "🏙️",
    title: "Which environment would you thrive in?",
    multi: true,
    maxSelect: 2,
    choices: [
      { id: "startup", label: "Fast-moving startup", tags: { business: 2, tech: 2 } },
      { id: "corporate", label: "Large organisation", tags: { business: 2, commerce: 2, tech: 1 } },
      { id: "hospital", label: "Hospital / clinic / care setting", tags: { health: 3, people: 1 } },
      { id: "govt", label: "Government or public institution", tags: { publicservice: 3, education: 1, law: 1 } },
      { id: "studio", label: "Studio / newsroom / creative house", tags: { creative: 3, communication: 1 } },
      { id: "campus", label: "Campus, lab or classroom", tags: { science: 2, education: 3 } },
    ],
  },
];

export const TOTAL_QUESTIONS = QUESTIONS.length;
