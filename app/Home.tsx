"use client";
import { Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { MainCard } from "../components/MainCard/MainCard";
import { Pagination } from "../components/Pagination";
import { SampleCard } from "../components/SampleCard/SampleCard";
import { formatUrlArticle } from "./_lib/formatUrl";
import { useRouter } from "next/navigation";
import MainCardSkeleton from "@/components/MainCard/MainCardSkeleton";
import { renderSkeletons } from "@/components/SampleCard/SampleCardSkeleton";
import { Post } from "@/.contentlayer/generated";
import Footer from "@/components/Footer";

type HomeProps = {
  postsListData: Post[];
};

function getUniqueTags(posts: any[]): string[] {
  const tags = posts.map((post) => post.tag);
  return Array.from(new Set(tags));
}

export default function Home({ postsListData }: HomeProps) {
  const router = useRouter();

  const [posts, _] = useState<Post[]>(postsListData);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const [currentPosts, setCurrentPosts] = useState<Post[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const uniqueTags = getUniqueTags(posts);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const justifyContent =
    currentPosts?.length < 3 ? "flex-start" : "space-between";

  useEffect(() => {
    if (posts.length > 0) {
      const filteredPosts = selectedTag
        ? posts.filter((post) => post.tag === selectedTag)
        : posts;

      setCurrentPosts(
        filteredPosts.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage
        )
      );
      setTotalPages(Math.ceil(filteredPosts.length / postsPerPage));
    }
  }, [selectedTag, currentPage, posts]);

  const MainCardRender: React.FC = () => {
    return (
      <MainCard
        id={posts[0]._raw.sourceFilePath}
        title={posts[0].title}
        createdAt={posts[0].createdAt}
        readTime={posts[0].readTime}
        description={posts[0].description}
        imageUrl={formatUrlArticle(posts[0].imageUrl)}
        imageAlt={posts[0].imageAlt}
        onClick={() => router.push(posts[0].url)}
      />
    );
  };

  const renderPosts = (posts: Post[]) => {
    if (posts.length > 0) {
      return posts.map((value, index) => (
        <SampleCard
          key={index}
          id={value.title}
          title={value.title}
          description={value.description}
          createdAt={value.createdAt}
          readTime={value.readTime}
          imageUrl={formatUrlArticle(value.imageUrl)}
          imageAlt={value.imageAlt}
          tag={value.tag}
          tagColor={value.tagColor}
          onClick={() => router.push(value.url)}
        />
      ));
    } else {
      return renderSkeletons(3);
    }
  };

  return (
    <>
      <Header />
      <main className="main space-y-8 grid place-items-center px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 justify-center bg-he-background">
        <div className="space-y-2 text-white w-full">
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            Novidade
          </Text>
          {posts[0] ? <MainCardRender /> : <MainCardSkeleton />}
        </div>
        <div className="space-y-3 w-full">
          <div className="flex justify-between place-items-center text-white">
            <Text fontSize={"3xl"} fontWeight={"semibold"}>
              Artigos
            </Text>
            <Select
              aria-label="Select a topic"
              sx={{
                "--select-bg": "transparent !important",
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
              <option value="all">Todos</option>
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
            {renderPosts(currentPosts)}
          </Stack>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
