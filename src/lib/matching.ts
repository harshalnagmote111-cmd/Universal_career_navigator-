import { QUESTIONS, type ProfileField } from "@/data/assessment";
import { CAREERS, type Career } from "@/data/careers";
import { COLLEGES, type College } from "@/data/colleges";

export type Answers = Record<string, string[]>;

export type DerivedProfile = {
  tags: Record<string, number>;
  fields: Partial<Record<ProfileField, string>>;
  bySection: Record<string, string[]>;
  answeredCount: number;
  complete: boolean;
};

/** Single source of truth: the profile is always derived from the saved answers. */
export function deriveProfile(answers: Answers): DerivedProfile {
  const tags: Record<string, number> = {};
  const fields: Partial<Record<ProfileField, string>> = {};
  const bySection: Record<string, string[]> = {};
  let answeredCount = 0;

  for (const q of QUESTIONS) {
    const selected = answers[q.id] ?? [];
    if (selected.length > 0) answeredCount += 1;
    for (const choiceId of selected) {
      const choice = q.choices.find((c) => c.id === choiceId);
      if (!choice) continue;
      for (const [tag, weight] of Object.entries(choice.tags ?? {})) {
        tags[tag] = (tags[tag] ?? 0) + weight;
      }
      if (choice.sets) {
        for (const [key, value] of Object.entries(choice.sets)) {
          if (value) fields[key as ProfileField] = value;
        }
      }
      bySection[q.section] = [...(bySection[q.section] ?? []), choice.label];
    }
  }

  return { tags, fields, bySection, answeredCount, complete: answeredCount === QUESTIONS.length };
}

export type CareerMatch = {
  career: Career;
  score: number;
  reasons: string[];
};

const TAG_LABELS: Record<string, string> = {
  tech: "technology interest",
  analytical: "analytical strength",
  health: "care & health interest",
  business: "business orientation",
  commerce: "commerce & finance aptitude",
  law: "law & policy interest",
  science: "scientific curiosity",
  creative: "creative strength",
  education: "teaching & mentoring interest",
  people: "people-centred strength",
  communication: "communication strength",
  publicservice: "public-service motivation",
  applied: "applied, practical preference",
  hands: "hands-on working style",
};

export function rankCareers(profile: DerivedProfile): CareerMatch[] {
  const total = Object.values(profile.tags).reduce((a, b) => a + b, 0) || 1;

  const scored = CAREERS.map((career) => {
    let raw = 0;
    let max = 0;
    const hits: { tag: string; contribution: number }[] = [];

    for (const [tag, weight] of Object.entries(career.tags)) {
      max += weight * 3;
      const have = profile.tags[tag] ?? 0;
      const contribution = Math.min(have, 6) * weight;
      raw += contribution;
      if (contribution > 0) hits.push({ tag, contribution });
    }

    const normalised = max > 0 ? raw / (max * 2) : 0;
    const breadthBonus = hits.length / (Object.keys(career.tags).length || 1);
    const score = Math.round(Math.min(0.97, normalised * 0.75 + breadthBonus * 0.22 + total / 400) * 100);

    const reasons = hits
      .sort((a, b) => b.contribution - a.contribution)
      .slice(0, 3)
      .map((h) => TAG_LABELS[h.tag] ?? h.tag);

    return { career, score, reasons };
  });

  return scored.sort((a, b) => b.score - a.score || a.career.name.localeCompare(b.career.name));
}

export type Fit = "Strong Fit" | "Target" | "Reach" | "Backup";

export type CollegeRecommendation = {
  college: College;
  fit: Fit;
  why: string[];
};

export type CollegeQuery = {
  careerId?: string;
  course?: string;
  city?: string;
  exam?: string;
  score?: string;
  scoreType?: "score" | "percentile";
  budget?: string;
};

function scoreBand(query: CollegeQuery): number | null {
  if (!query.score) return null;
  const n = Number(query.score);
  if (Number.isNaN(n)) return null;
  if (query.scoreType === "percentile") return Math.max(0, Math.min(100, n));
  // raw scores are not comparable across exams — treat conservatively
  return null;
}

export function recommendColleges(query: CollegeQuery): CollegeRecommendation[] {
  const cityQuery = (query.city ?? "").trim().toLowerCase();
  const percentile = scoreBand(query);

  const pool = COLLEGES.filter((c) => !query.careerId || c.careers.includes(query.careerId));

  const withCityMatch = pool.map((college) => {
    const cityMatch =
      !cityQuery ||
      college.city.toLowerCase().includes(cityQuery) ||
      college.city.toLowerCase().startsWith("any") ||
      college.state.toLowerCase() === "pan-india";
    return { college, cityMatch };
  });

  const relevant = withCityMatch.filter((c) => c.cityMatch).length > 0 ? withCityMatch.filter((c) => c.cityMatch) : withCityMatch;

  return relevant
    .map(({ college, cityMatch }) => {
      const why: string[] = [];
      if (query.course) why.push(`Offers programmes in the ${college.programmes[0]} family relevant to ${query.course}`);
      if (cityMatch && cityQuery) why.push(`Matches your preferred city (${college.city})`);
      if (!cityMatch && cityQuery) why.push(`Outside ${query.city} — included because options in your city are limited`);
      const examToken = query.exam ? (query.exam.toLowerCase().split(" ")[0] ?? "") : "";
      if (examToken && college.exams.some((e) => e.toLowerCase().includes(examToken)))
        why.push(`Accepts ${query.exam}`);
      if (college.type === "Government") why.push("Government institution — typically lower fees");
      if (query.budget?.startsWith("Under") && college.type === "Private")
        why.push("Private fees may exceed your stated budget — check scholarship options");

      let fit: Fit;
      if (college.selectivity === "accessible") fit = "Backup";
      else if (college.selectivity === "very-high") fit = percentile !== null && percentile >= 97 ? "Target" : "Reach";
      else if (college.selectivity === "high") fit = percentile !== null && percentile >= 85 ? "Strong Fit" : "Target";
      else fit = percentile !== null && percentile >= 60 ? "Strong Fit" : "Target";

      if (cityMatch && cityQuery && fit === "Target" && college.selectivity === "moderate") fit = "Strong Fit";

      why.push("Fees, cutoffs and seat details need verification from the official source");

      return { college, fit, why };
    })
    .sort((a, b) => {
      const order: Fit[] = ["Strong Fit", "Target", "Reach", "Backup"];
      return order.indexOf(a.fit) - order.indexOf(b.fit) || a.college.name.localeCompare(b.college.name);
    });
}

export const FIT_ORDER: Fit[] = ["Strong Fit", "Target", "Reach", "Backup"];

export const FIT_META: Record<Fit, { emoji: string; note: string }> = {
  "Strong Fit": { emoji: "✅", note: "Aligns well with your course, city and stated profile." },
  Target: { emoji: "🎯", note: "Realistic to aim for — outcome depends on this year's cutoffs." },
  Reach: { emoji: "🚀", note: "Highly selective. Worth applying, but keep alternatives ready." },
  Backup: { emoji: "🛟", note: "Broadly accessible option that keeps your year productive." },
};
