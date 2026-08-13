import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { QUESTIONS } from "@/data/assessment";
import { deriveProfile, rankCareers, type Answers, type CareerMatch, type DerivedProfile } from "@/lib/matching";

const STORAGE_KEY = "ucn.student-profile.v1";

export type Selection = {
  careerId?: string | undefined;
  course?: string | undefined;
  city?: string | undefined;
  exam?: string | undefined;
  score?: string | undefined;
  scoreType?: "score" | "percentile" | undefined;
};

export type ProfileState = {
  answers: Answers;
  step: number;
  completedAt: string | null;
  selection: Selection;
  compare: string[];
  roadmapDone: string[];
};

const EMPTY: ProfileState = {
  answers: {},
  step: 0,
  completedAt: null,
  selection: {},
  compare: [],
  roadmapDone: [],
};

function readStored(): ProfileState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ProfileState>;
    return { ...EMPTY, ...parsed, answers: parsed.answers ?? {} };
  } catch {
    return EMPTY;
  }
}

type Ctx = {
  hydrated: boolean;
  state: ProfileState;
  profile: DerivedProfile;
  matches: CareerMatch[];
  toggleAnswer: (questionId: string, choiceId: string, multi: boolean, maxSelect?: number) => void;
  setStep: (step: number) => void;
  markComplete: () => void;
  updateSelection: (patch: Selection) => void;
  toggleCompare: (careerId: string) => void;
  toggleRoadmapStep: (stepId: string) => void;
  resetAll: () => void;
};

const ProfileContext = createContext<Ctx | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProfileState>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  // Restore saved state after hydration (avoids SSR mismatch).
  useEffect(() => {
    setState(readStored());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable — session continues in memory */
    }
  }, [state, hydrated]);

  const toggleAnswer = useCallback((questionId: string, choiceId: string, multi: boolean, maxSelect?: number) => {
    setState((prev) => {
      const current = prev.answers[questionId] ?? [];
      let next: string[];
      if (!multi) {
        next = current[0] === choiceId ? [] : [choiceId];
      } else if (current.includes(choiceId)) {
        next = current.filter((id) => id !== choiceId);
      } else {
        next = [...current, choiceId];
        if (maxSelect && next.length > maxSelect) next = next.slice(next.length - maxSelect);
      }
      return { ...prev, answers: { ...prev.answers, [questionId]: next } };
    });
  }, []);

  const setStep = useCallback((step: number) => {
    setState((prev) => ({ ...prev, step: Math.max(0, Math.min(QUESTIONS.length - 1, step)) }));
  }, []);

  const markComplete = useCallback(() => {
    setState((prev) => ({ ...prev, completedAt: new Date().toISOString() }));
  }, []);

  const updateSelection = useCallback((patch: Selection) => {
    setState((prev) => ({ ...prev, selection: { ...prev.selection, ...patch } }));
  }, []);

  const toggleCompare = useCallback((careerId: string) => {
    setState((prev) => {
      const has = prev.compare.includes(careerId);
      const compare = has ? prev.compare.filter((id) => id !== careerId) : [...prev.compare, careerId].slice(-3);
      return { ...prev, compare };
    });
  }, []);

  const toggleRoadmapStep = useCallback((stepId: string) => {
    setState((prev) => ({
      ...prev,
      roadmapDone: prev.roadmapDone.includes(stepId)
        ? prev.roadmapDone.filter((id) => id !== stepId)
        : [...prev.roadmapDone, stepId],
    }));
  }, []);

  const resetAll = useCallback(() => setState(EMPTY), []);

  const profile = useMemo(() => deriveProfile(state.answers), [state.answers]);
  const matches = useMemo(() => rankCareers(profile), [profile]);

  const value = useMemo<Ctx>(
    () => ({
      hydrated,
      state,
      profile,
      matches,
      toggleAnswer,
      setStep,
      markComplete,
      updateSelection,
      toggleCompare,
      toggleRoadmapStep,
      resetAll,
    }),
    [hydrated, state, profile, matches, toggleAnswer, setStep, markComplete, updateSelection, toggleCompare, toggleRoadmapStep, resetAll],
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used inside <ProfileProvider>");
  return ctx;
}
