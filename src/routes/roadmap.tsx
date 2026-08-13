import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, EmptyState, PageHeader, Progress, VerifyNote } from "@/components/kit";
import { careerById } from "@/data/careers";
import { PHASES, buildRoadmap } from "@/lib/roadmap";
import { cn } from "@/lib/utils";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Your Personalised Career Roadmap | Universal Career Navigator" },
      {
        name: "description",
        content:
          "An actionable roadmap for your chosen career: course choice, exam prep, applications, skills, certifications, projects and internships.",
      },
      { property: "og:title", content: "Career Roadmap — Universal Career Navigator" },
      { property: "og:description", content: "Discover → Explore → Plan → Apply → Grow, personalised to your path." },
    ],
  }),
  component: Roadmap;
});

function Roadmap() {
  const { state, profile, hydrated, toggleRoadmapStep } = useProfile();
  const career = careerById(state.selection.careerId);

  const steps = useMemo(
    () => (career ? buildRoadmap(career, profile, state.selection) : []),
    [career, profile, state.selection],
  );

  if (hydrated && !career) {
    return (
      <AppShell backFallback="/matches">
        <EmptyState
          emoji="🗺️"
          title="Pick a career to generate your roadmap"
          description="Your roadmap is built around the career and course you choose, plus your city, exam and budget answers."
          action={
            <Link to="/matches">
              <Button>Go to career matches →</Button>
            </Link>
          }
        />
      </AppShell>
    );
  }

  const done = steps.filter((s) => state.roadmapDone.includes(s.id)).length;
  const pct = steps.length ? (done / steps.length) * 100 : 0;

  return (
    <AppShell backFallback="/colleges">
      <PageHeader
        eyebrow="Step 8 · Roadmap"
        title={`🗺️ Your roadmap for ${career?.name ?? "your path"}`}
        description="Concrete next actions, ordered. Tick items off as you complete them — your progress is saved to the same profile."
      />

      <Card className="mt-6">
        <Progress value={hydrated ? pct : 0} label={`${done} of ${steps.length} steps completed`} />
        <div className="mt-4 flex flex-wrap gap-2">
          {career?.courses[0] ? <Badge tone="primary">🎓 {state.selection.course ?? career.courses[0]}</Badge> : null}
          {state.selection.city ? <Badge tone="accent">📍 {state.selection.city}</Badge> : null}
          {state.selection.exam ? <Badge tone="neutral">📝 {state.selection.exam}</Badge> : null}
          {profile.fields.budget ? <Badge tone="neutral">💰 {profile.fields.budget}</Badge> : null}
        </div>
      </Card>

      <div className="mt-6 space-y-7">
        {PHASES.map((phase) => {
          const phaseSteps = steps.filter((s) => s.phase === phase);
          if (phaseSteps.length === 0) return null;
          return (
            <section key={phase}>
              <h2 className="text-lg font-bold">{phase}</h2>
              <div className="mt-3 space-y-3">
                {phaseSteps.map((step) => {
                  const complete = state.roadmapDone.includes(step.id);
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => toggleRoadmapStep(step.id)}
                      aria-pressed={complete}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-[transform,background-color,border-color] duration-150 focus-ring active:scale-[0.99]",
                        complete ? "border-success/50 bg-success/8" : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-xs font-bold transition-colors duration-150",
                          complete ? "border-success bg-success text-success-foreground" : "border-border text-muted-foreground",
                        )}
                        aria-hidden
                      >
                        {complete ? "✓" : step.emoji}
                      </span>
                      <span>
                        <span className={cn("block text-sm font-bold", complete && "line-through opacity-70")}>{step.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{step.detail}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <VerifyNote>
          Exam dates, eligibility rules and application windows change every cycle. Confirm each one on the official exam
          authority or college website before acting on a step.
        </VerifyNote>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/opportunities">
            <Button variant="outline">🎯 Find opportunities</Button>
          </Link>
          <Link to="/progress">
            <Button>📈 Track progress</Button>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
