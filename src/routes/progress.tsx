import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, PageHeader, Progress as Bar } from "@/components/kit";
import { TOTAL_QUESTIONS } from "@/data/assessment";
import { careerById } from "@/data/careers";
import { buildRoadmap } from "@/lib/roadmap";
import { cn } from "@/lib/utils";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Track Your Career Progress | Universal Career Navigator" },
      {
        name: "description",
        content: "See what you have completed, what you are working on now, and the next actions in your career plan — all tied to one student profile.",
      },
      { property: "og:title", content: "Progress — Universal Career Navigator" },
      { property: "og:description", content: "Completed steps, current focus and upcoming actions in one view." },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const { state, profile, matches, hydrated, resetAll } = useProfile();
  const career = careerById(state.selection.careerId);

  const roadmap = useMemo(
    () => (career ? buildRoadmap(career, profile, state.selection) : []),
    [career, profile, state.selection],
  );
  const roadmapDone = roadmap.filter((s) => state.roadmapDone.includes(s.id));
  const nextSteps = roadmap.filter((s) => !state.roadmapDone.includes(s.id));

  const milestones = [
    { label: "Assessment completed", emoji: "🧭", done: profile.complete, to: "/assessment" as const },
    { label: "Profile built", emoji: "🪪", done: profile.answeredCount > 0, to: "/profile" as const },
    { label: "Career direction chosen", emoji: "✨", done: Boolean(state.selection.careerId), to: "/matches" as const },
    { label: "Course selected", emoji: "🎓", done: Boolean(state.selection.course), to: "/colleges" as const },
    { label: "City selected", emoji: "📍", done: Boolean(state.selection.city), to: "/colleges" as const },
    { label: "Exam / score noted", emoji: "📝", done: Boolean(state.selection.exam), to: "/colleges" as const },
    { label: "Roadmap started", emoji: "🗺️", done: roadmapDone.length > 0, to: "/roadmap" as const },
  ];

  const journeyPct = (milestones.filter((m) => m.done).length / milestones.length) * 100;
  const roadmapPct = roadmap.length ? (roadmapDone.length / roadmap.length) * 100 : 0;

  return (
    <AppShell backFallback="/roadmap">
      <PageHeader
        eyebrow="Step 9 · Progress"
        title="📈 Your progress"
        description="Everything here reads from your single student profile, so nothing resets when you navigate, go Home, or reassess."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="text-lg font-bold">🚩 Journey milestones</h2>
          <div className="mt-4 space-y-4">
            <Bar value={hydrated ? journeyPct : 0} label="Decision journey" />
            <Bar value={hydrated ? (profile.answeredCount / TOTAL_QUESTIONS) * 100 : 0} label="Assessment answers" />
            <Bar value={hydrated ? roadmapPct : 0} label="Roadmap steps" />
          </div>

          <ul className="mt-6 space-y-2">
            {milestones.map((m) => (
              <li key={m.label}>
                <Link
                  to={m.to}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors duration-150 focus-ring",
                    m.done ? "border-success/50 bg-success/8" : "border-border bg-card hover:bg-secondary/60",
                  )}
                >
                  <span className="grid size-6 place-items-center rounded-full bg-card text-xs" aria-hidden>
                    {m.done ? "✅" : m.emoji}
                  </span>
                  <span className={cn(m.done && "opacity-80")}>{m.label}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{m.done ? "Done" : "Pending →"}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="text-lg font-bold">🎯 Current focus</h2>
            {nextSteps[0] ? (
              <>
                <p className="mt-3 text-sm font-bold">
                  {nextSteps[0].emoji} {nextSteps[0].title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{nextSteps[0].detail}</p>
                <div className="mt-4">
                  <Link to="/roadmap">
                    <Button size="sm" variant="outline">
                      Open roadmap →
                    </Button>
                  </Link>
                </div>
              </>
            ) : career ? (
              <p className="mt-3 text-sm text-muted-foreground">
                Every roadmap step is ticked off. Revisit your matches to explore an adjacent path, or reassess as your
                priorities change.
              </p>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">Choose a career direction to generate your next actions.</p>
            )}
          </Card>

          <Card>
            <h2 className="text-lg font-bold">⏭️ Upcoming actions</h2>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              {nextSteps.slice(1, 5).map((s) => (
                <li key={s.id} className="flex gap-2">
                  <span aria-hidden>{s.emoji}</span>
                  <span className="font-semibold text-foreground">{s.title}</span>
                </li>
              ))}
              {nextSteps.length <= 1 ? <li>Nothing queued right now.</li> : null}
            </ol>
          </Card>

          <Card>
            <h2 className="text-lg font-bold">🔁 Change of direction?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Reassessing updates your existing profile — it never creates a second one.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/assessment">
                <Button size="sm" variant="outline">
                  ✏️ Reassess
                </Button>
              </Link>
              <Link to="/matches">
                <Button size="sm" variant="ghost">
                  Explore alternatives
                </Button>
              </Link>
            </div>
            {matches[0] ? (
              <p className="mt-4 text-xs text-muted-foreground">
                Top current match: <Badge tone="primary">{matches[0].career.name}</Badge>
              </p>
            ) : null}
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Clear all saved answers, selections and progress from this device?")) resetAll();
              }}
              className="mt-4 text-xs font-semibold text-destructive hover:underline focus-ring"
            >
              Clear my data from this device
            </button>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
