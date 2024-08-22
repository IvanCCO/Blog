import { Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ARTICLES from "../../assets/JSON/Home-Posts.json";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard/MainCard";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";
import { formatUrl } from "../../http/operations";

function getUniqueTags(posts: any[]): string[] {
  const tags = posts.map((post) => post.tag.name);
  return Array.from(new Set(tags));
}

export function Home() {
  const sampleCards: JSX.Element[] = [];

  const posts = ARTICLES.posts.filter((post) => post.enabled);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const [currentPosts, setCurrentPosts] = useState<any[]>([]);

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [totalPages, setTotalPages] = useState(1);

  const uniqueTags = getUniqueTags(posts);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const justifyContent =
    sampleCards?.length < 3 ? "flex-start" : "space-between";

  const MainCardRender: React.FC = () => {
    return (
      <MainCard
        id={posts[0].id.toString()}
        title={posts[0].title}
        createdAt={posts[0].createdAt}
        readTime={posts[0].readTime}
        description={posts[0].description}
        imageUrl={formatUrl(posts[0].id.toString(), posts[0].imageUrl)}
      />
    );
  };

  useEffect(() => {
    const filteredPosts = selectedTag
      ? posts.filter((post) => post.tag.name === selectedTag)
      : posts;

    const startIndex = (currentPage - 1) * postsPerPage;
    setCurrentPosts(filteredPosts.slice(startIndex, startIndex + postsPerPage));
    setTotalPages(Math.ceil(filteredPosts.length / postsPerPage));
  }, [selectedTag, currentPage, posts]);

  return (
    <>
      <Header />
      <main className="main space-y-8 grid place-items-center px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 justify-center bg-he-background">
        <div className="space-y-2 text-white w-full">
          <Text fontSize={"3xl"} fontWeight={"semibold"}></Text>
          <MainCardRender />
        </div>
        <div className="space-y-3 w-full">
          <div className="flex justify-between place-items-center text-white">
            <Text fontSize={"3xl"} fontWeight={"semibold"}>
              Posts
            </Text>
            <Select
              sx={{
                "--select-bg": "#16141C",
              }}
              bg={"#16141C"}
              variant="flushed"
              w={1 / 3}
              onChange={(e) => {
                const selectedValue = e.target.value;
                if (selectedValue === "all") {
                  setSelectedTag(null);
                } else {
                  setSelectedTag(uniqueTags[parseInt(selectedValue)]);
                }
                setCurrentPage(1);
              }}
            >
              <option value="all">All</option>
              {uniqueTags.map((tag, index) => (
                <option key={index} value={index}>
                  {tag}
                </option>
              ))}
            </Select>
          </div>
          <Stack
            direction={["column", "column", "row"]}
            placeItems={"center"}
            justifyContent={["center", "center", justifyContent]}
            w={"full"}
          >
            {currentPosts.map((value, index) => (
              <SampleCard
                key={index}
                id={value.id}
                title={value.title}
                description={value.description}
                createdAt={value.createdAt}
                readTime={value.readTime}
                imageUrl={formatUrl(value.id, posts[0].imageUrl)}
                imageAlt={value.imageAlt}
                tag={value.tag}
              />
            ))}
          </Stack>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </main>
    </>
  );
}
