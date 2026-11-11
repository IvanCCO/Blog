"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  if (pathname === "/v2" || pathname.startsWith("/v2/")) return null;

  return <Header />;
}
