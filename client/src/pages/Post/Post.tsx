import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";

import { useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import { TopicTag } from "../../components/TopicTag";
import { articlePath, contentPath, fetchData } from "../../http/operations";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";
import { useParams } from "react-router-dom";

type Article = {
  id: string;
  title: string;
  description: string;
  readTime: number;
  tag: string;
  createdAt: Date;
};
export function Post() {

  const { articleId = '' } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await fetchData<Article>(articlePath(articleId))
        setArticle(data);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
      }
    };

    const fetchContent = async () => {
      try {
        const data = await fetchData<string>(contentPath(articleId));
        setContent(data);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
      }
    };
    fetchArticle();
    fetchContent();
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
          <ImageBlock articleId={articleId} />
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
