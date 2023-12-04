export const PageType = {
  HE: "HE" as const,
  SHE: "SHE" as const,
  US: "US" as const,
  DEFAULT: "DEFAULT" as const,
};
export type PageType = typeof PageType[keyof typeof PageType];