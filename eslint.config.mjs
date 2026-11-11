import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: [".next/**", ".contentlayer/**", "out/**", "build/**", "next-env.d.ts", ".agents/**"],
  },
];

export default config;
