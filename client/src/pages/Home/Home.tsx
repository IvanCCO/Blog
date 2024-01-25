import { Stack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MOCK from "../../assets/JSON/Posts.json";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";
import { fetchData, lastArticlePath } from "../../http/operations";

type Article = {
  id: string;
  title: string;
  description: string;
  readTime: number;
  tag: string;
  createdAt: Date;
};

export function Home() {
  const [lastArticle, setLastArticle] = useState<Article | null>(null);

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
  }, []);

  const sampleCards: JSX.Element[] = [];

  const pagination = MOCK.pagination;
  const posts = MOCK.posts;

  const justifyContent =
    sampleCards?.length < 3 ? "flex-start" : "space-between";

  return (
    <>
      <Header />
      <main className="main space-y-8 grid place-items-center px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 justify-center bg-he-background">
        <div className="space-y-2 text-white w-full">
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            News
          </Text>
          <MainCard
            id={lastArticle?.id || "error"}
            title={lastArticle?.title || "error"}
            createdAt={lastArticle?.createdAt}
            readTime={lastArticle?.readTime || 0}
            description={lastArticle?.description || "error"}
          />
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
            {posts.map((value, index) => (
              <SampleCard
                key={index}
                title={value.titulo}
                description={value.descricao}
                createdAt={value["data-publicacao"]}
                readTime={
                  isNaN(Number(value["tempo-leitura"]))
                    ? 0
                    : Number(value["tempo-leitura"])
                }
              />
            ))}
          </Stack>
          <Pagination {...pagination} onPageChange={() => console.log("iha")} />
        </div>
      </main>
    </>
  );
}
