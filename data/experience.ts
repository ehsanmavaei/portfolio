export type ExperienceEntry = {
  id: string;
  start: string;
  end: string;
  role: string;
  company: string;
  achievement: string;
  current?: boolean;
};

/** Replace placeholder entries with your real work history. */
export const experience: ExperienceEntry[] = [
  {
    id: "current",
    start: "20XX",
    end: "Present",
    role: "[Placeholder: Your current role]",
    company: "[Placeholder: Company name]",
    achievement:
      "[Placeholder: One-line achievement with a concrete outcome]",
    current: true,
  },
  {
    id: "previous",
    start: "20XX",
    end: "20XX",
    role: "[Placeholder: Previous role]",
    company: "[Placeholder: Company name]",
    achievement:
      "[Placeholder: One-line achievement from this role]",
  },
];
