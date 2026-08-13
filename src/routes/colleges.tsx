import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, EmptyState, PageHeader, VerifyNote } from "@/components/kit";
import { careerById } from "@/data/careers";
import { KNOWN_CITIES } from "@/data/colleges";
import { FIT_META, FIT_ORDER, recommendColleges, type Fit } from "@/lib/matching";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/colleges")({
  head: () => ({
    meta: [
      { title: "City-Based College Recommendations | Universal Career Navigator" },
      {
        name: "description",
        content:
          "Pick your career, course, city, entrance exam and score to get college options grouped into Strong Fit, Target, Reach and Backup — with clear verification notes.",
      },
      { property: "og:title", content: "College Recommendations — Universal Career Navigator" },
      { property: "og:description", content: "Career → course → city → exam → score → shortlist, with honest fit bands." },
    ],
  }),
  component: Colleges,
});

function Colleges() {
  const { state, profile, hydrated, updateSelection } = useProfile();
  const { selection } = state;
  const career = careerById(selection.careerId);

  const recommendations = useMemo(
    () =>
      career
        ? recommendColleges({
            careerId: career.id,
            course: selection.course,
            city: selection.city,
            exam: selection.exam,
            score: selection.score,
            scoreType: selection.scoreType,
            budget: profile.fields.budget,
          })
        : [],
    [career, selection.course, selection.city, selection.exam, selection.score, selection.scoreType, profile.fields.budget],
  );

  if (hydrated && !career) {
    return (
      <AppShell backFallback="/matches">
        <EmptyState
          emoji="🏫"
          title="Choose a career direction first"
          description="College guidance follows your career and course choice. Pick a path from your matches and we'll shortlist options in your preferred city."
          action={
            <Link to="/matches">
              <Button>Go to career matches →</Button>
            </Link>
          }
        />
      </AppShell>
    );
  }

  const grouped = FIT_ORDER.map((fit) => ({ fit, items: recommendations.filter((r) => r.fit === fit) })).filter(
    (g) => g.items.length > 0,
  );

  return (
    <AppShell backFallback="/matches">
      <PageHeader
        eyebrow="Steps 4–7 · Course → City → Exam → College"
        title="🏫 College recommendations"
        description="Fit bands are guidance based on your inputs and each institution's typical selectivity. They are not predictions and never a guarantee of admission."
      />

      <Card className="mt-6">
        <h2 className="text-lg font-bold">🧾 Your inputs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className="block text-sm font-semibold">
            🎯 Career
            <p className="mt-1.5 rounded-xl border border-border bg-secondary/60 px-3 py-2.5 text-sm font-bold">
              {career ? `${career.emoji} ${career.name}` : "—"}
            </p>
          </label>

          <label className="block text-sm font-semibold">
            🎓 Course
            <select
              value={selection.course ?? ""}
              onChange={(e) => updateSelection({ course: e.target.value })}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm font-semibold focus-ring"
            >
              <option value="">Select a course</option>
              {career?.courses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-semibold">
            📍 Preferred city
            <input
              list="ucn-cities"
              value={selection.city ?? ""}
              placeholder="Type any city, e.g. Nagpur"
              onChange={(e) => updateSelection({ city: e.target.value })}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm font-semibold focus-ring"
            />
            <datalist id="ucn-cities">
              {KNOWN_CITIES.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </label>

          <label className="block text-sm font-semibold">
            📝 Entrance exam
            <select
              value={selection.exam ?? ""}
              onChange={(e) => updateSelection({ exam: e.target.value })}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm font-semibold focus-ring"
            >
              <option value="">Not applicable / undecided</option>
              {career?.exams.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-semibold">
            📊 Score / percentile
            <input
              value={selection.score ?? ""}
              inputMode="decimal"
              placeholder="Optional"
              onChange={(e) => updateSelection({ score: e.target.value })}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm font-semibold focus-ring"
            />
          </label>

          <label className="block text-sm font-semibold">
            🔢 Score type
            <select
              value={selection.scoreType ?? "percentile"}
              onChange={(e) => updateSelection({ scoreType: e.target.value as "score" | "percentile" })}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-card px-3 text-sm font-semibold focus-ring"
            >
              <option value="percentile">Percentile</option>
              <option value="score">Raw score / marks</option>
            </select>
          </label>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Raw marks are not comparable across exams, so a raw score is treated conservatively — enter a percentile for
          sharper banding. Budget from your profile ({profile.fields.budget ?? "not set"}) is also considered.
        </p>
        <div className="mt-4">
          <Link to="/roadmap">
            <Button variant="outline" size="sm">
              🗺️ Build my roadmap
            </Button>
          </Link>
        </div>
      </Card>

      <div className="mt-6">
        <VerifyNote>
          This prototype ships a curated reference list of real institutions with official website links only. Fees,
          cutoffs, cutoff year, seat matrix, hostel details and contact numbers are deliberately not stored here because
          they are not connected to an official admissions feed — verify each one on the official website below.
        </VerifyNote>
      </div>

      <div className="mt-6 space-y-8">
        {grouped.map(({ fit, items }) => (
          <section key={fit}>
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="text-lg font-bold">
                <span className="mr-1.5" aria-hidden>
                  {FIT_META[fit as Fit].emoji}
                </span>
                {fit}
              </h2>
              <p className="text-sm text-muted-foreground">{FIT_META[fit as Fit].note}</p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {items.map(({ college, why }) => (
                <Card key={college.id} interactive className="animate-rise">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="max-w-[80%] text-base font-bold leading-snug">{college.name}</h3>
                    <Badge tone={college.type === "Government" ? "success" : "neutral"}>{college.type}</Badge>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    📍 {college.city}, {college.state}
                  </p>

                  <dl className="mt-3 space-y-1.5 text-xs">
                    <div>
                      <dt className="inline font-bold">Programmes: </dt>
                      <dd className="inline text-muted-foreground">{college.programmes.join(" · ")}</dd>
                    </div>
                    <div>
                      <dt className="inline font-bold">Entrance route: </dt>
                      <dd className="inline text-muted-foreground">{college.exams.join(" · ")}</dd>
                    </div>
                    <div>
                      <dt className="inline font-bold">Fees / cutoff / hostel / contact: </dt>
                      <dd className="inline text-muted-foreground">Needs verification from the official source</dd>
                    </div>
                  </dl>

                  <ul className="mt-3 space-y-1 text-xs leading-relaxed text-muted-foreground">
                    {why.map((w) => (
                      <li key={w}>• {w}</li>
                    ))}
                  </ul>

                  <a
                    href={college.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex text-sm font-bold text-primary hover:underline focus-ring"
                  >
                    Official website ↗
                  </a>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
