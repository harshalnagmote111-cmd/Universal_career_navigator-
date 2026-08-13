import { Link, createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, Progress, VerifyNote } from "@/components/kit";
import { QUESTIONS, TOTAL_QUESTIONS } from "@/data/assessment";
import { cn } from "@/lib/utils";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Career Assessment — 14 questions | Universal Career Navigator" },
      {
        name: "description",
        content:
          "A 14-question career assessment covering interests, strengths, skills, goals, work style, budget and location. Every answer saves automatically.",
      },
      { property: "og:title", content: "Career Assessment — Universal Career Navigator" },
      { property: "og:description", content: "14 questions. Autosaved. Resume exactly where you left off." },
    ],
  }),
  component: Assessment,
});

function Assessment() {
  const { state, profile, hydrated, toggleAnswer, setStep, markComplete } = useProfile();
  const index = Math.min(state.step, TOTAL_QUESTIONS - 1);
  const question = QUESTIONS[index]!;
  const selected = state.answers[question.id] ?? [];
  const isLast = index === TOTAL_QUESTIONS - 1;
  const answeredPct = (profile.answeredCount / TOTAL_QUESTIONS) * 100;

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge tone="primary">
            {question.emoji} Question {index + 1} of {TOTAL_QUESTIONS}
          </Badge>
          <Badge tone="success">💾 Answers save automatically</Badge>
        </div>

        <div className="mt-4">
          <Progress value={hydrated ? answeredPct : 0} label={`${profile.answeredCount} of ${TOTAL_QUESTIONS} answered`} />
        </div>

        <Card key={question.id} className="mt-5 animate-rise">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{question.section}</p>
          <h1 className="mt-2 text-2xl font-extrabold leading-snug sm:text-[1.75rem]">{question.title}</h1>
          {question.help ? <p className="mt-2 text-sm text-muted-foreground">{question.help}</p> : null}

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {question.choices.map((choice) => {
              const active = selected.includes(choice.id);
              return (
                <li key={choice.id}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleAnswer(question.id, choice.id, Boolean(question.multi), question.maxSelect)}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-[transform,background-color,border-color,box-shadow] duration-150 focus-ring active:scale-[0.985]",
                      active
                        ? "border-primary bg-primary/8 shadow-[0_10px_26px_-18px_var(--primary)] scale-[1.01]"
                        : "border-border bg-card hover:border-primary/40 hover:bg-secondary/60",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-[0.65rem] font-bold transition-colors duration-150",
                        active ? "border-primary bg-primary text-primary-foreground" : "border-border text-transparent",
                      )}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-sm font-semibold leading-snug">
                      {choice.emoji ? <span className="mr-1.5">{choice.emoji}</span> : null}
                      {choice.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {question.multi ? (
            <p className="mt-4 text-xs font-semibold text-muted-foreground">
              Multiple choice — pick up to {question.maxSelect ?? question.choices.length}. Tap again to unselect.
            </p>
          ) : null}
        </Card>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline" onClick={() => setStep(index - 1)} disabled={index === 0}>
            ← Previous
          </Button>
          <div className="flex items-center gap-2">
            {!isLast ? (
              <Button onClick={() => setStep(index + 1)} disabled={selected.length === 0}>
                Next question →
              </Button>
            ) : (
              <Link to="/profile">
                <Button onClick={markComplete} disabled={selected.length === 0}>
                  See my profile ✨
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {QUESTIONS.map((q, i) => {
            const done = (state.answers[q.id] ?? []).length > 0;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setStep(i)}
                aria-label={`Go to question ${i + 1}`}
                className={cn(
                  "size-8 rounded-lg text-xs font-bold transition-colors duration-150 focus-ring",
                  i === index
                    ? "bg-primary text-primary-foreground"
                    : done
                      ? "bg-success/15 text-success"
                      : "bg-secondary text-muted-foreground hover:bg-muted",
                )}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <VerifyNote>
            We only ask what is needed to personalise guidance — no contact details, no ID numbers. Your answers stay in
            this browser and are used to build a single student profile you can update any time.
          </VerifyNote>
        </div>
      </div>
    </AppShell>
  );
}
