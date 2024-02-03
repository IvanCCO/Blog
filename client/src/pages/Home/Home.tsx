import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard/MainCard";
import MainCardSkeleton from "../../components/MainCard/MainCardSkeleton";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";
import {
  articlePagePath,
  fetchData,
  lastArticlePath,
} from "../../http/operations";

type Article = {
  id: string;
  title: string;
  description: string;
  readTime: number;
  tag: string;
  createdAt: Date;
};

type Page = {
  isFirst: boolean;
  isLast: boolean;
  articles: Article[];
};

export function Home() {
  const [lastArticle, setLastArticle] = useState<Article | null>(null);
  const [articlePage, setArticlePage] = useState<Page | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await fetchData<Article>(lastArticlePath);
        setLastArticle(data);
      } catch (error) {
        console.error("Erro ao buscar artigo:", error);
      }
    };

    fetchArticle();
  }, [currentPage]);

  useEffect(() => {
    const fetchArticlePage = async () => {
      try {
        const data = await fetchData<Page>(articlePagePath(currentPage));
        setArticlePage(data);
      } catch (error) {
        console.error("Erro ao buscar Página de artigo:", error);
      }
    };
    fetchArticlePage();
  }, [currentPage]);

  const justifyContent =
    articlePage && articlePage?.articles.length < 3
      ? "flex-start"
      : "space-between";

  const MainCardRender: React.FC = () => {
    if (lastArticle != null) {
      return (
        <MainCard
          id={lastArticle.id}
          title={lastArticle.title}
          createdAt={lastArticle.createdAt}
          readTime={lastArticle.readTime}
          description={lastArticle.description}
        />
      );
    }
    return <MainCardSkeleton />;
  };

  return (
    <>
      <Header />
      <main className="main space-y-8 grid place-items-center px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 justify-center bg-he-background">
        <div className="space-y-2 text-white w-full">
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            Newest
          </Text>
          <MainCardRender />
        </div>
        <div className="space-y-3 w-full">
          <div className="flex justify-between place-items-center text-white">
            <Text fontSize={"3xl"} fontWeight={"semibold"}>
              Posts
            </Text>
          </div>
          <Stack
            direction={["column", "column", "row"]}
            placeItems={"center"}
            justifyContent={["center", "center", justifyContent]}
            w={"full"}
          >
            {articlePage ? (
              articlePage.articles.map((value, index) => (
                <SampleCard
                  key={index}
                  id={value.id}
                  title={value.title}
                  description={value.description}
                  createdAt={value.createdAt.toString()}
                  readTime={value.readTime}
                  tag={value.tag}
                />
              ))
            ) : (
              <MainCardSkeleton />
            )}
          </Stack>
          {articlePage && (
            <Pagination
              isFirstPage={articlePage.isFirst}
              isLastPage={articlePage.isLast}
              onPageIncrement={() => setCurrentPage(currentPage + 1)}
              onPageDecrement={() => setCurrentPage(currentPage - 1)}
            />
          )}
        </div>
      </main>
    </>
  );
}
