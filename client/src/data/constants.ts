export const PageType = {
  HE: "HE" as const,
  SHE: "SHE" as const,
  US: "US" as const,
  DEFAULT: "DEFAULT" as const,
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PageType = typeof PageType[keyof typeof PageType];