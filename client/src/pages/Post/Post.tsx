import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";

import { useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import { TopicTag } from "../../components/TopicTag";
import api from "../../http/api";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";

const fetchData = async (request: string): Promise<Article> => {
  return (await api.get(request)).data;
};
const fetchContentData = async (request: string): Promise<string> => {
  return (await api.get(request)).data;
};

type Article = {
  id: string;
  title: string;
  description: string;
  readTime: number;
  tag: string;
  createdAt: Date;
};
export function Post() {

  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {

    const fetchArticle = async () => {
      try {
        const data = await fetchData("article/01HMSX6HFE9YR77QT7S2R53HER");
        setArticle(data);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
      }
    };

    const fetchContent = async () => {
      try {
        const data = await fetchContentData("article/01HMSX6HFE9YR77QT7S2R53HER/content");
        setContent(data);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
      }
    };



    fetchArticle();
    fetchContent()
    
  }, []);

  const color = (n: number): string => {
    switch (n) {
      case 1:
        return "purple";
      case 2:
        return "cyan";
      case 3:
        return "red";
      case 4:
        return "red";
      case 5:
        return "red";
      default:
        return "red";
    }
  };
  return (
    <>
      <ProgressBar />
      <Header />
      <main className="main space-y-2 sm:px-28 md:px-44 lg:px-52 xl:px-96 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
        <div className="space-y-4">
          <div className="w-fit">
            <TopicTag
              color={color(Math.floor(Math.random() * (5 - 0 + 1) + 0))}
              variant="solid"
              title={article?.tag || "error"}
              borderRadius="full"
            />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold">
            {article?.title || "error"}
          </h1>
          <p className="text-sm sm:text-lg font-light text-neutral-400">
            {article?.description || "error"}
          </p>

          <ProfileRow data={article?.createdAt} readTime={article?.readTime} />
          <ActionRow />
        </div>
        <div className="py-6">
          <ImageBlock articleId="01HMSX6HFE9YR77QT7S2R53HER" />
        </div>

        <div>
          <MarkdownFormatter text={content || "Not Possible"} />
        </div>
        {/* TODO: Colocar carinha para mostrar os posts relacionados */}

        <Footer />
      </main>
    </>
  );
}
