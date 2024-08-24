"use client";
import Header from "../../../components/Header";
import MarkdownFormatter from "@/components/MarkdownFormatter";

export default function About() {
  return (
    <>
      <Header />
      <main className="main sm:px-28 md:px-44 lg:px-52 xl:px-96 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
        <MarkdownFormatter text={String("## Taxco")} />
      </main>
    </>
  );
}
