import { Link, createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, EmptyState, PageHeader, Progress } from "@/components/kit";
import { TOTAL_QUESTIONS } from "@/data/assessment";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Student Profile | Universal Career Navigator" },
      {
        name: "description",
        content:
          "One central student profile built from your assessment: interests, strengths, skills, goals, preferences, budget and location constraints.",
      },
      { property: "og:title", content: "Your Student Profile — Universal Career Navigator" },
      { property: "og:description", content: "The single profile that powers your matches, colleges, roadmap and progress." },
    ],
  }),
  component: ProfilePage,
});

const FIELD_LABELS: Record<string, { label: string; emoji: string }> = {
  stage: { label: "Current stage", emoji: "🎓" },
  workStyle: { label: "Preferred work style", emoji: "🧩" },
  learningStyle: { label: "Learning preference", emoji: "📖" },
  budget: { label: "Education budget", emoji: "💰" },
  locationPreference: { label: "Location preference", emoji: "📍" },
  relocation: { label: "Relocation", emoji: "🧳" },
  timeline: { label: "Timeline", emoji: "🗓️" },
  riskAppetite: { label: "Exam-prep appetite", emoji: "⏳" },
};

const SECTION_EMOJI: Record<string, string> = {
  Interests: "💡",
  Strengths: "💪",
  Skills: "🛠️",
  Goals: "🎯",
  Preferences: "🧩",
  Constraints: "🚧",
};

function ProfilePage() {
  const { profile, state, matches, hydrated } = useProfile();

  if (hydrated && profile.answeredCount === 0) {
    return (
      <AppShell backFallback="/">
        <EmptyState
          emoji="🪪"
          title="Your profile is waiting on the assessment"
          description="Answer the 14 questions once and this page builds itself. Everything else in the app reads from this single profile."
          action={
            <Link to="/assessment">
              <Button>Start the assessment →</Button>
            </Link>
          }
        />
      </AppShell>
    );
  }

  const chosen = matches.find((m) => m.career.id === state.selection.careerId)?.career;

  return (
    <AppShell backFallback="/assessment">
      <PageHeader
        eyebrow="Step 2 · Profile"
        title="🪪 Your student profile"
        description="One profile, built from your assessment answers, feeding your career matches, college shortlist, roadmap, opportunities and progress. Reassessing updates this same profile — it never creates a duplicate."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold">📋 Assessment summary</h2>
            <Badge tone={profile.complete ? "success" : "warning"}>
              {profile.answeredCount} / {TOTAL_QUESTIONS} answered
            </Badge>
          </div>
          <div className="mt-4">
            <Progress value={hydrated ? (profile.answeredCount / TOTAL_QUESTIONS) * 100 : 0} />
          </div>

          <div className="mt-6 space-y-5">
            {Object.entries(profile.bySection).map(([section, labels]) => (
              <div key={section}>
                <h3 className="text-sm font-bold">
                  <span className="mr-1.5" aria-hidden>
                    {SECTION_EMOJI[section] ?? "•"}
                  </span>
                  {section}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Array.from(new Set(labels)).map((label) => (
                    <Badge key={label} tone="neutral">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/assessment">
              <Button variant="outline">✏️ Reassess (updates this profile)</Button>
            </Link>
            <Link to="/matches">
              <Button>✨ See career matches</Button>
            </Link>
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="text-lg font-bold">⚙️ Preferences & constraints</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {Object.entries(FIELD_LABELS).map(([key, meta]) => {
                const value = profile.fields[key as keyof typeof profile.fields];
                return (
                  <div key={key} className="rounded-xl bg-secondary/70 p-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <span className="mr-1" aria-hidden>
                        {meta.emoji}
                      </span>
                      {meta.label}
                    </dt>
                    <dd className="mt-1 font-bold">{value ?? "Not answered yet"}</dd>
                  </div>
                );
              })}
            </dl>
          </Card>

          <Card>
            <h2 className="text-lg font-bold">🎯 Current direction</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Career</dt>
                <dd className="font-bold">{chosen ? `${chosen.emoji} ${chosen.name}` : "Not chosen yet"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Course</dt>
                <dd className="font-bold">{state.selection.course ?? "Not chosen yet"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">City</dt>
                <dd className="font-bold">{state.selection.city ?? "Not set"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Exam</dt>
                <dd className="font-bold">
                  {state.selection.exam ?? "Not set"}
                  {state.selection.score ? ` · ${state.selection.score}${state.selection.scoreType === "percentile" ? " %ile" : ""}` : ""}
                </dd>
              </div>
            </dl>
            <div className="mt-4">
              <Link to="/colleges">
                <Button variant="outline" size="sm">
                  🏫 Continue to colleges
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
