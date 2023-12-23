import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import ABOUTMD from "../../assets/Markdown/about.md"
import MarkdownFormatter from "../../components/MarkdownFormatter";

export default function About() {

  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(ABOUTMD)
      .then((res) => res.text())
      .then((md) => {
        setPost(md);
      });
  }),
    [];


  return (
    <>
      <Header type={PageType.US} />
      <main className="h-screen py-20 px-default-width space-y-6">
          <MarkdownFormatter text={post}/>
      </main>
    </>
  );
}
