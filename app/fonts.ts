import { Itim, Lora } from "next/font/google";

export const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});
