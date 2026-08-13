import { Link, createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, Progress } from "@/components/kit";
import { TOTAL_QUESTIONS } from "@/data/assessment";
import { CLUSTERS } from "@/data/careers";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Universal Career Navigator — Find your path, then your next step" },
      {
        name: "description",
        content:
          "A 14-question career assessment that builds one student profile, then guides you from career to course, city, entrance exam, colleges, roadmap and progress.",
      },
      { property: "og:title", content: "Universal Career Navigator" },
      {
        property: "og:description",
        content: "We don't just tell students what career may suit them. We help them understand what to do next.",
      },
    ],
  }),
  component: Home,
});

const JOURNEY = [
  { emoji: "🔍", title: "Discover", copy: "14 quick questions build your profile." },
  { emoji: "🧠", title: "Explore", copy: "See career matches across every field." },
  { emoji: "🗺️", title: "Plan", copy: "Course, city, exam and college shortlist." },
  { emoji: "📄", title: "Apply", copy: "Fit bands, documents and deadlines." },
  { emoji: "🌱", title: "Grow", copy: "Skills, projects and opportunities." },
];

function Home() {
  const { state, profile, matches, hydrated } = useProfile();
  const answered = profile.answeredCount;
  const pct = (answered / TOTAL_QUESTIONS) * 100;
  const top = matches.slice(0, 3);

  return (
    <AppShell>
      <section className="overflow-hidden rounded-3xl border border-border bg-hero p-7 text-primary-foreground shadow-[0_28px_60px_-32px_var(--primary)] sm:p-11">
        <div className="max-w-3xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-tight backdrop-blur">
            🧭 Career guidance for every field — not just engineering
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            We don't just tell you what career may suit you. We show you what to do next.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            Answer {TOTAL_QUESTIONS} questions once. Get a personal profile that powers your career matches, course
            choices, city-based college shortlist, entrance-exam plan, roadmap and progress — all in one place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/assessment">
              <Button size="lg" className="bg-card text-foreground hover:brightness-100 hover:bg-card/90">
                {answered > 0 ? "Continue assessment →" : "Start assessment →"}
              </Button>
            </Link>
            <Link to="/matches">
              <Button size="lg" variant="ghost" className="bg-white/12 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                ✨ See career matches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="sm:col-span-2">
          <h2 className="text-lg font-bold">📌 Your journey so far</h2>
          <div className="mt-4">
            <Progress value={hydrated ? pct : 0} label={`Assessment · ${answered} of ${TOTAL_QUESTIONS} answered`} />
          </div>
          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-xl bg-secondary/70 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Profile</dt>
              <dd className="mt-1 font-bold">{profile.complete ? "Ready ✅" : answered > 0 ? "In progress" : "Not started"}</dd>
            </div>
            <div className="rounded-xl bg-secondary/70 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Chosen career</dt>
              <dd className="mt-1 font-bold">
                {state.selection.careerId ? matches.find((m) => m.career.id === state.selection.careerId)?.career.name : "Not chosen"}
              </dd>
            </div>
            <div className="rounded-xl bg-secondary/70 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Preferred city</dt>
              <dd className="mt-1 font-bold">{state.selection.city || "Not set"}</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <h2 className="text-lg font-bold">🔗 The decision chain</h2>
          <ol className="mt-3 space-y-1.5 text-sm font-semibold text-muted-foreground">
            {["Assessment", "Profile", "Career", "Course", "City", "Exam & score", "Colleges", "Roadmap", "Progress"].map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[0.65rem] font-bold text-primary">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </Card>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold">🚀 Discover → Explore → Plan → Apply → Grow</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {JOURNEY.map((step) => (
            <Card key={step.title} interactive className="animate-rise">
              <div className="text-2xl" aria-hidden>
                {step.emoji}
              </div>
              <h3 className="mt-2 text-base font-bold">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      {profile.complete && top.length > 0 ? (
        <section className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold">✨ Your current top matches</h2>
            <Link to="/matches" className="text-sm font-semibold text-primary hover:underline">
              View all matches →
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {top.map((m) => (
              <Card key={m.career.id} interactive>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl" aria-hidden>
                    {m.career.emoji}
                  </span>
                  <Badge tone="primary">{m.score}% fit</Badge>
                </div>
                <h3 className="mt-3 text-base font-bold">{m.career.name}</h3>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">{m.career.cluster}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.career.blurb}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold">🌍 Every field is on the table</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Matching is driven by your profile — never by an assumption that every student should pick engineering.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {CLUSTERS.map((c) => (
              <Badge key={c} tone="accent">
                {c}
              </Badge>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-bold">🔒 What this prototype does and doesn't do</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Working now:</strong> assessment with autosave, one shared student
              profile, career matching, comparison, city-aware college shortlisting, roadmap and progress tracking.
            </li>
            <li>
              <strong className="text-foreground">Planned for production:</strong> live nationwide college data, live
              cutoffs and fees from official admission authorities, and a live opportunities feed.
            </li>
            <li>
              <strong className="text-foreground">Never:</strong> invented colleges, fees, cutoffs or admission
              guarantees. Missing information is marked for verification.
            </li>
          </ul>
        </Card>
      </section>
    </AppShell>
  );
}
