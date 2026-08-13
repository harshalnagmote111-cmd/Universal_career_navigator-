import { Link, useRouter } from "@tanstack/react-router";
import { useCallback, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", emoji: "🏠" },
  { to: "/assessment", label: "Assessment", emoji: "🧭" },
  { to: "/profile", label: "Profile", emoji: "🪪" },
  { to: "/matches", label: "Matches", emoji: "✨" },
  { to: "/compare", label: "Compare", emoji: "⚖️" },
  { to: "/colleges", label: "Colleges", emoji: "🏫" },
  { to: "/roadmap", label: "Roadmap", emoji: "🗺️" },
  { to: "/opportunities", label: "Opportunities", emoji: "🎯" },
  { to: "/progress", label: "Progress", emoji: "📈" },
] as const;

/** History-aware back with a safe route fallback. Never clears saved state. */
export function BackButton({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();
  const goBack = useCallback(() => {
    const canGoBack = typeof window !== "undefined" && window.history.length > 1;
    if (canGoBack) router.history.back();
    else router.navigate({ to: fallback });
  }, [router, fallback]);

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-sm font-semibold text-foreground transition-colors duration-150 hover:bg-secondary focus-ring active:scale-[0.97]"
    >
      ← Back
    </button>
  );
}

export function HomeButton() {
  return (
    <Link
      to="/"
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 text-sm font-semibold text-foreground transition-colors duration-150 hover:bg-secondary focus-ring active:scale-[0.97]"
      aria-label="Go to home dashboard"
    >
      <span aria-hidden>🏠</span> Home
    </Link>
  );
}

export function AppShell({ children, backFallback = "/" }: { children: ReactNode; backFallback?: string }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="group flex items-center gap-2.5 focus-ring rounded-full" aria-label="Universal Career Navigator home">
            <span className="grid size-9 place-items-center rounded-xl bg-hero text-base shadow-[0_8px_18px_-10px_var(--primary)]" aria-hidden>
              🧭
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight">Universal Career Navigator</span>
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                by Team PathPilot
              </span>
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <BackButton fallback={backFallback} />
            <HomeButton />
          </div>
        </div>
        <nav className="mx-auto max-w-6xl px-2 pb-2 sm:px-4">
          <ul className="flex snap-x gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "inline-flex snap-start items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground focus-ring",
                  )}
                  activeProps={{ className: "bg-primary/10 text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  <span aria-hidden>{item.emoji}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>

      <footer className="border-t border-border/70 py-8">
        <div className="mx-auto max-w-6xl px-4 text-xs leading-relaxed text-muted-foreground sm:px-6">
          <p className="font-semibold text-foreground">Universal Career Navigator — prototype build</p>
          <p className="mt-1.5 max-w-3xl">
            Guidance only. Career matches, fit bands and roadmaps are suggestions, not guarantees of admission or outcome.
            Always verify fees, cutoffs, eligibility and dates on official college, university and admission-authority
            websites. Your answers stay on this device.
          </p>
        </div>
      </footer>
    </div>
  );
}
