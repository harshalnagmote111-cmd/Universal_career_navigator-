import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const BUTTON_BASE =
  "inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold focus-ring transition-[transform,background-color,box-shadow,color] duration-150 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const BUTTON_VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground shadow-[0_10px_24px_-14px_var(--primary)] hover:brightness-110",
  secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
  ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
  outline: "border border-border bg-card text-foreground hover:border-primary/50 hover:bg-secondary",
};

const BUTTON_SIZES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)} {...props} />;
}

export function Card({ className, interactive, ...props }: HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return <div className={cn(interactive ? "card-interactive" : "card-surface", "p-5 sm:p-6", className)} {...props} />;
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "success" | "warning" | "accent";
  className?: string;
}) {
  const tones = {
    neutral: "bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary",
    success: "bg-success/12 text-success",
    warning: "bg-warning/18 text-warning-foreground",
    accent: "bg-accent/15 text-accent-foreground",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Progress({ value, label }: { value: number; label?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      {label ? (
        <div className="mb-2 flex items-baseline justify-between text-xs font-semibold text-muted-foreground">
          <span>{label}</span>
          <span className="tabular-nums text-foreground">{Math.round(pct)}%</span>
        </div>
      ) : null}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-hero transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="animate-rise">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p> : null}
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h1>
      {description ? <p className="mt-3 max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground">{description}</p> : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </header>
  );
}

export function EmptyState({ emoji, title, description, action }: { emoji: string; title: string; description: string; action?: ReactNode }) {
  return (
    <Card className="text-center">
      <div className="text-3xl" aria-hidden>
        {emoji}
      </div>
      <h2 className="mt-3 text-lg font-bold">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </Card>
  );
}

export function VerifyNote({ children }: { children?: ReactNode }) {
  return (
    <p className="rounded-lg border border-warning/35 bg-warning/10 px-3 py-2 text-xs leading-relaxed text-warning-foreground">
      ⚠️ {children ?? "Information needs to be verified from the official source. Cutoffs, fees, eligibility and seat availability change every cycle."}
    </p>
  );
}
