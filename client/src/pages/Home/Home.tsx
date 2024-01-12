import { Stack, Text } from "@chakra-ui/react";
import MOCK from "../../assets/JSON/Posts.json";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";

export function Home() {
  const sampleCards: JSX.Element[] = [];

  const newPost = MOCK["new-post"];
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
            title={newPost.titulo}
            createdAt={newPost["data-publicacao"]}
            readTime={Number(newPost["tempo-leitura"]) || 0}
            description={newPost.descricao}
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
          <Pagination {...pagination} onPageChange={() => console.log("iha")}/>
        </div>
      </main>
    </>
  );
}
