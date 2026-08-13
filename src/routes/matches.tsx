import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, EmptyState, PageHeader } from "@/components/kit";
import { CLUSTERS } from "@/data/careers";
import { cn } from "@/lib/utils";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/matches")({
  head: () => ({
    meta: [
      { title: "Career Matches Across Every Field | Universal Career Navigator" },
      {
        name: "description",
        content:
          "Personalised career matches across technology, healthcare, business, law, commerce, science, design, education and applied fields — ranked from your profile.",
      },
      { property: "og:title", content: "Career Matches — Universal Career Navigator" },
      { property: "og:description", content: "Multiple relevant paths, ranked from your profile. Guidance, not a verdict." },
    ],
  }),
  component: Matches,
});

function Matches() {
  const { matches, profile, state, hydrated, updateSelection, toggleCompare } = useProfile();
  const [cluster, setCluster] = useState<string>("All");

  if (hydrated && profile.answeredCount === 0) {
    return (
      <AppShell>
        <EmptyState
          emoji="✨"
          title="Matches unlock after the assessment"
          description="Your matches are calculated from your interests, strengths, skills, goals, work style, budget and location answers."
          action={
            <Link to="/assessment">
              <Button>Start the assessment →</Button>
            </Link>
          }
        />
      </AppShell>
    );
  }

  const filtered = cluster === "All" ? matches : matches.filter((m) => m.career.cluster === cluster);

  return (
    <AppShell backFallback="/profile">
      <PageHeader
        eyebrow="Step 3 · Career"
        title="✨ Your career matches"
        description="These are ranked suggestions based on your profile — not a verdict. Multiple paths can fit you well, so explore a few, compare them, and reassess whenever your thinking changes."
      />

      <div className="mt-5 flex flex-wrap gap-2">
        {["All", ...CLUSTERS].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCluster(c)}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-150 focus-ring active:scale-[0.97]",
              cluster === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((m) => {
          const isChosen = state.selection.careerId === m.career.id;
          const inCompare = state.compare.includes(m.career.id);
          return (
            <Card key={m.career.id} interactive className={cn("animate-rise flex flex-col", isChosen && "border-primary/60")}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-2xl" aria-hidden>
                  {m.career.emoji}
                </span>
                <div className="flex flex-col items-end gap-1.5">
                  <Badge tone={m.score >= 70 ? "success" : m.score >= 50 ? "primary" : "neutral"}>{m.score}% fit</Badge>
                  {isChosen ? <Badge tone="accent">Selected</Badge> : null}
                </div>
              </div>

              <h2 className="mt-3 text-base font-bold">{m.career.name}</h2>
              <p className="mt-0.5 text-xs font-semibold text-muted-foreground">{m.career.cluster}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.career.blurb}</p>

              {m.reasons.length > 0 ? (
                <p className="mt-3 rounded-lg bg-secondary/70 p-2.5 text-xs leading-relaxed">
                  <strong className="font-bold">Why it surfaced:</strong> your {m.reasons.join(", ")}.
                </p>
              ) : null}

              <dl className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <div>
                  <dt className="inline font-bold text-foreground">Courses: </dt>
                  <dd className="inline">{m.career.courses.slice(0, 3).join(" · ")}</dd>
                </div>
                <div>
                  <dt className="inline font-bold text-foreground">Exams: </dt>
                  <dd className="inline">{m.career.exams.slice(0, 3).join(" · ")}</dd>
                </div>
                <div>
                  <dt className="inline font-bold text-foreground">Core skills: </dt>
                  <dd className="inline">{m.career.coreSkills.join(", ")}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2 pt-1">
                <Link to="/colleges">
                  <Button
                    size="sm"
                    variant={isChosen ? "primary" : "outline"}
                    onClick={() => updateSelection({ careerId: m.career.id, course: m.career.courses[0], exam: m.career.exams[0] })}
                  >
                    {isChosen ? "Continue →" : "Choose this path"}
                  </Button>
                </Link>
                <Button size="sm" variant={inCompare ? "secondary" : "ghost"} onClick={() => toggleCompare(m.career.id)}>
                  {inCompare ? "✓ In compare" : "⚖️ Compare"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {state.compare.length > 0 ? (
        <div className="sticky bottom-4 mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-lift)] backdrop-blur">
          <p className="text-sm font-semibold">
            ⚖️ {state.compare.length} career{state.compare.length > 1 ? "s" : ""} in compare (max 3)
          </p>
          <Link to="/compare">
            <Button size="sm">Compare side by side →</Button>
          </Link>
        </div>
      ) : null}
    </AppShell>
  );
}
