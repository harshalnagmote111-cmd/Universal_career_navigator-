import type { Career } from "@/data/careers";
import type { DerivedProfile } from "@/lib/matching";

export type RoadmapStep = {
  id: string;
  phase: "Discover" | "Explore" | "Plan" | "Apply" | "Grow";
  emoji: string;
  title: string;
  detail: string;
};

export function buildRoadmap(
  career: Career,
  profile: DerivedProfile,
  selection: { course?: string | undefined; city?: string | undefined; exam?: string | undefined },
): RoadmapStep[] {
  const course = selection.course ?? career.courses[0] ?? "your chosen course";
  const city = selection.city?.trim();
  const exam = selection.exam ?? career.exams[0] ?? "the relevant entrance exam";
  const learning = profile.fields.learningStyle ?? "structured coursework";
  const budget = profile.fields.budget;

  return [
    {
      id: "discover-1",
      phase: "Discover",
      emoji: "🔍",
      title: `Pressure-test ${career.name} against reality`,
      detail: `Talk to two people already working in ${career.name.toLowerCase()} and read one honest day-in-the-life account. Confirm the day-to-day matches: ${career.dayToDay}`,
    },
    {
      id: "discover-2",
      phase: "Discover",
      emoji: "🧭",
      title: "Keep one alternative open",
      detail: "Shortlist a second career from your matches so a single cutoff or result cannot derail your year.",
    },
    {
      id: "explore-1",
      phase: "Explore",
      emoji: "🎓",
      title: `Lock the course: ${course}`,
      detail: `Compare ${career.courses.slice(0, 3).join(", ")} on duration, eligibility and cost before committing.`,
    },
    {
      id: "explore-2",
      phase: "Explore",
      emoji: "🛠️",
      title: "Start the first two core skills",
      detail: `Begin with ${career.coreSkills.slice(0, 2).join(" and ")}. Your learning preference is ${learning.toLowerCase()}, so pick resources in that format.`,
    },
    {
      id: "plan-1",
      phase: "Plan",
      emoji: "📝",
      title: `Register and prepare for ${exam}`,
      detail: `Find the official notification, note the eligibility and window, then build a weekly study plan. Verify every date on the official exam authority website.`,
    },
    {
      id: "plan-2",
      phase: "Plan",
      emoji: "📍",
      title: city ? `Shortlist colleges in ${city} and one fallback city` : "Shortlist colleges by city",
      detail: city
        ? `Use the College Recommendations section for ${city}, then confirm fees, cutoffs and hostel details on each official website.`
        : "Pick a preferred city in the College Recommendations section to get a shortlist.",
    },
    {
      id: "plan-3",
      phase: "Plan",
      emoji: "💰",
      title: "Sort the money question early",
      detail: budget
        ? `Your stated budget is ${budget}. Check scholarships, state fee-waiver schemes and education-loan eligibility before application season.`
        : "Check scholarships, fee-waiver schemes and education loans before the application window opens.",
    },
    {
      id: "apply-1",
      phase: "Apply",
      emoji: "📄",
      title: "Prepare the document pack",
      detail: "Marksheets, ID, category/income certificates if applicable, photographs and scanned signature — kept in one folder.",
    },
    {
      id: "apply-2",
      phase: "Apply",
      emoji: "🚀",
      title: "Apply across all four fit bands",
      detail: "Send applications to Strong Fit, Target, Reach and Backup options. Track every deadline in one place.",
    },
    {
      id: "grow-1",
      phase: "Grow",
      emoji: "📦",
      title: "Build one portfolio-worthy project",
      detail: `Something small and real in ${career.name.toLowerCase()} — it will matter more than marks at your first interview.`,
    },
    {
      id: "grow-2",
      phase: "Grow",
      emoji: "🌱",
      title: "Add a certification and one internship attempt",
      detail: `Target a recognised certification linked to ${career.coreSkills[0] ?? "your core skill"} and apply to at least five internships or apprenticeships.`,
    },
  ];
}

export const PHASES = ["Discover", "Explore", "Plan", "Apply", "Grow"] as const;
