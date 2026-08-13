export type Opportunity = {
  id: string;
  title: string;
  kind: "Internship" | "Scholarship" | "Competition" | "Certification" | "Project" | "Workshop";
  emoji: string;
  provider: string;
  /**
   * "verified-source" = a real, well-known programme; the user still verifies
   * current dates on the official site.
   * "sample" = illustrative prototype content, clearly labelled.
   */
  status: "verified-source" | "sample";
  clusters: string[];
  summary: string;
  link?: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "nsp",
    title: "National Scholarship Portal (all central & state schemes)",
    kind: "Scholarship",
    emoji: "�scholar",
    provider: "Government of India",
    status: "verified-source",
    clusters: ["all"],
    summary: "Single window for central and state government scholarships. Eligibility and windows change every cycle — check the portal directly.",
    link: "https://scholarships.gov.in",
  },
  {
    id: "inspire",
    title: "INSPIRE Scholarship for Higher Education (SHE)",
    kind: "Scholarship",
    emoji: "🔬",
    provider: "Department of Science & Technology",
    status: "verified-source",
    clusters: ["Science & Research", "Healthcare"],
    summary: "Support for students pursuing basic and natural sciences at the degree level.",
    link: "https://online-inspire.gov.in",
  },
  {
    id: "aicte-internship",
    title: "AICTE Internship Portal",
    kind: "Internship",
    emoji: "🧑‍💻",
    provider: "AICTE",
    status: "verified-source",
    clusters: ["Technology", "Business & Management", "Applied & Emerging"],
    summary: "Internship listings for students of AICTE-approved institutions across domains.",
    link: "https://internship.aicte-india.org",
  },
  {
    id: "smart-india-hackathon",
    title: "Smart India Hackathon",
    kind: "Competition",
    emoji: "🏆",
    provider: "Ministry of Education Innovation Cell",
    status: "verified-source",
    clusters: ["Technology", "Design & Creative", "Applied & Emerging", "Business & Management"],
    summary: "National problem-statement hackathon with software and hardware tracks.",
    link: "https://sih.gov.in",
  },
  {
    id: "swayam",
    title: "SWAYAM / NPTEL certification courses",
    kind: "Certification",
    emoji: "📜",
    provider: "Ministry of Education",
    status: "verified-source",
    clusters: ["all"],
    summary: "Free government MOOC platform with credit-eligible certification exams across disciplines.",
    link: "https://swayam.gov.in",
  },
  {
    id: "nism",
    title: "NISM certifications (securities markets)",
    kind: "Certification",
    emoji: "🏦",
    provider: "National Institute of Securities Markets",
    status: "verified-source",
    clusters: ["Commerce", "Business & Management"],
    summary: "Regulator-recognised certifications useful for finance and capital-markets roles.",
    link: "https://www.nism.ac.in",
  },
  {
    id: "sample-portfolio",
    title: "Build a 3-piece starter portfolio",
    kind: "Project",
    emoji: "📦",
    provider: "Universal Career Navigator (guided project)",
    status: "sample",
    clusters: ["all"],
    summary: "Sample guided project template: pick a real problem in your field, ship a small artefact, write it up in 300 words.",
  },
  {
    id: "sample-shadow",
    title: "Shadow a professional for one day",
    kind: "Workshop",
    emoji: "👀",
    provider: "Universal Career Navigator (guided activity)",
    status: "sample",
    clusters: ["all"],
    summary: "Sample activity template for reality-testing a career before committing years to it.",
  },
];

export const LIVE_FEED_STATUS =
  "This prototype does not have a live opportunities feed. Government and institutional links below are real starting points; items marked Sample are illustrative templates.";
