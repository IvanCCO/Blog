"use client";
import { formatUrlArticle, formatUrlDefault } from "@/app/_lib/formatUrl";
import Header from "../../../components/Header";
import MarkdownFormatter from "@/components/MarkdownFormatter";
import { useEffect, useState } from "react";

export default function About() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${formatUrlDefault("about.txt")}`);
        const text: string = await response.text();
        console.log(text);
        setContent(text);
      } catch (error) {
        // setErrors((prevErrors) => [...prevErrors, new NotFoundError()]);
      }
    };

    fetchContent();
  }, []);

  return (
    <>
      <Header />
      <main className="main sm:px-28 md:px-44 lg:px-52 xl:px-96 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
        <MarkdownFormatter text={content} />
      </main>
    </>
  );
}
