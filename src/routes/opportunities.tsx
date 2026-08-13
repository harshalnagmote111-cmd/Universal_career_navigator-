import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { AppShell } from "@/components/AppShell";
import { Badge, Card, PageHeader } from "@/components/kit";
import { careerById } from "@/data/careers";
import { LIVE_FEED_STATUS, OPPORTUNITIES } from "@/data/opportunities";
import { cn } from "@/lib/utils";
import { useProfile } from "@/store/profile";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Internships, Scholarships & Certifications | Universal Career Navigator" },
      {
        name: "description",
        content:
          "Career-building opportunities: government scholarship portals, internship platforms, national competitions and recognised certifications, with sample content clearly labelled.",
      },
      { property: "og:title", content: "Opportunities — Universal Career Navigator" },
      { property: "og:description", content: "Scholarships, internships, competitions and certifications worth your time." },
    ],
  }),
  component: Opportunities,
});

const KINDS = ["All", "Scholarship", "Internship", "Competition", "Certification", "Project", "Workshop"] as const;

function Opportunities() {
  const { state } = useProfile();
  const [kind, setKind] = useState<(typeof KINDS)[number]>("All");
  const career = careerById(state.selection.careerId);

  const items = useMemo(() => {
    const byKind = kind === "All" ? OPPORTUNITIES : OPPORTUNITIES.filter((o) => o.kind === kind);
    if (!career) return byKind;
    return [...byKind].sort((a, b) => {
      const aRel = a.clusters.includes("all") || a.clusters.includes(career.cluster) ? 0 : 1;
      const bRel = b.clusters.includes("all") || b.clusters.includes(career.cluster) ? 0 : 1;
      return aRel - bRel;
    });
  }, [kind, career]);

  return (
    <AppShell backFallback="/roadmap">
      <PageHeader
        eyebrow="Grow"
        title="🎯 Opportunities"
        description={
          career
            ? `Sorted with ${career.cluster.toLowerCase()} relevance first, based on the path you selected.`
            : "Scholarships, internships, competitions and certifications to build your profile while you decide."
        }
      />

      <Card className="mt-6 border-warning/40 bg-warning/8">
        <p className="text-sm font-semibold leading-relaxed text-warning-foreground">ℹ️ {LIVE_FEED_STATUS}</p>
      </Card>

      <div className="mt-5 flex flex-wrap gap-2">
        {KINDS.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-150 focus-ring active:scale-[0.97]",
              kind === k ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((o) => (
          <Card key={o.id} interactive className="animate-rise flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <span className="text-2xl" aria-hidden>
                {o.emoji.startsWith("�") ? "🎓" : o.emoji}
              </span>
              <Badge tone={o.status === "sample" ? "warning" : "success"}>
                {o.status === "sample" ? "Sample template" : "Real programme"}
              </Badge>
            </div>
            <h2 className="mt-3 text-base font-bold leading-snug">{o.title}</h2>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">
              {o.kind} · {o.provider}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.summary}</p>
            {o.link ? (
              <a
                href={o.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-auto pt-4 text-sm font-bold text-primary hover:underline focus-ring"
              >
                Open official site ↗
              </a>
            ) : (
              <p className="mt-auto pt-4 text-xs font-semibold text-muted-foreground">
                Guided activity — no external application needed.
              </p>
            )}
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
