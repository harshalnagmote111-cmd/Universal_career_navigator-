import { Link, createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { Badge, Button, Card, EmptyState, PageHeader } from "@/components/kit";
import { careerById } from "@/data/careers";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Careers Side by Side | Universal Career Navigator" },
      {
        name: "description",
        content: "Compare up to three shortlisted careers on courses, entrance exams, core skills, daily work and outlook before you commit.",
      },
      { property: "og:title", content: "Compare Careers — Universal Career Navigator" },
      { property: "og:description", content: "Weigh up to three paths on courses, exams, skills and day-to-day reality." },
    ],
  }),
  component: Compare,
});

const ROWS = [
  { key: "cluster", label: "Field", emoji: "🗂️" },
  { key: "blurb", label: "In one line", emoji: "💬" },
  { key: "courses", label: "Typical courses", emoji: "🎓" },
  { key: "exams", label: "Entrance exams", emoji: "📝" },
  { key: "coreSkills", label: "Core skills", emoji: "🛠️" },
  { key: "dayToDay", label: "Day-to-day", emoji: "🕗" },
  { key: "outlook", label: "Outlook", emoji: "🔭" },
] as const;

function Compare() {
  const { state, matches, toggleCompare, updateSelection } = useProfile();
  const careers = state.compare.map((id) => careerById(id)).filter((c): c is NonNullable<typeof c> => Boolean(c));

  if (careers.length === 0) {
    return (
      <AppShell backFallback="/matches">
        <EmptyState
          emoji="⚖️"
          title="Nothing to compare yet"
          description="Add up to three careers from your matches, then come back here to weigh them side by side."
          action={
            <Link to="/matches">
              <Button>Go to matches →</Button>
            </Link>
          }
        />
      </AppShell>
    );
  }

  return (
    <AppShell backFallback="/matches">
      <PageHeader
        eyebrow="Step 3b · Compare"
        title="⚖️ Compare your shortlist"
        description="No single option here is 'the correct one'. Compare the honest trade-offs — cost of entry, exam load, daily reality — and then pick the path you want to plan for."
      />

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-x-3 border-spacing-y-0 text-sm">
          <thead>
            <tr>
              <th className="w-40" />
              {careers.map((career) => {
                const score = matches.find((m) => m.career.id === career.id)?.score ?? 0;
                return (
                  <th key={career.id} className="align-top">
                    <Card className="text-left">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-2xl" aria-hidden>
                          {career.emoji}
                        </span>
                        <Badge tone="primary">{score}% fit</Badge>
                      </div>
                      <p className="mt-2 text-base font-bold">{career.name}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Link to="/colleges">
                          <Button
                            size="sm"
                            onClick={() => updateSelection({ careerId: career.id, course: career.courses[0], exam: career.exams[0] })}
                          >
                            Plan this →
                          </Button>
                        </Link>
                        <Button size="sm" variant="ghost" onClick={() => toggleCompare(career.id)}>
                          Remove
                        </Button>
                      </div>
                    </Card>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.key}>
                <th className="py-3 text-left align-top text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  <span className="mr-1" aria-hidden>
                    {row.emoji}
                  </span>
                  {row.label}
                </th>
                {careers.map((career) => {
                  const value = career[row.key];
                  return (
                    <td key={career.id} className="border-t border-border py-3 align-top text-sm leading-relaxed">
                      {Array.isArray(value) ? value.join(" · ") : value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
