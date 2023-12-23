import { useState, useEffect } from "react";
import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { Image } from "@chakra-ui/react";
import EX from "../../assets/Markdown/ex.md"

export function Post() {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(EX)
      .then((res) => res.text())
      .then((md) => {
        setPost(md);
      });
  }),
    [];


  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="h-screen py-32 px-default-width space-y-6">
        <div className="flex-col space-y-5">
          <Image
            src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
            alt="A big octopus managing containers"
            borderStartEndRadius="2xl"
            borderStartStartRadius="2xl"
            objectFit="cover"
          />
          <MarkdownFormatter text={post}/>
        </div>
      </main>
    </>
  );
}
