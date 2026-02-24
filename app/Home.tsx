"use client";
import { Select, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { MainCard } from "../components/MainCard/MainCard";
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

const INITIAL_VISIBLE_POSTS = 6;
const LOAD_MORE_STEP = 3;

function getUniqueTags(posts: Post[]): string[] {
  const tags = posts.map((post) => post.tag);
  return Array.from(new Set(tags));
}

export default function Home({ postsListData }: HomeProps) {
  const router = useRouter();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visiblePostsCount, setVisiblePostsCount] = useState(INITIAL_VISIBLE_POSTS);

  const uniqueTags = useMemo(() => getUniqueTags(postsListData), [postsListData]);
  const loadMoreTriggerRef = useRef<HTMLDivElement | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return postsListData;
    return postsListData.filter((post) => post.tag === selectedTag);
  }, [postsListData, selectedTag]);

  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, visiblePostsCount);
  }, [filteredPosts, visiblePostsCount]);

  const hasMorePosts = visiblePosts.length < filteredPosts.length;

  useEffect(() => {
    setVisiblePostsCount(INITIAL_VISIBLE_POSTS);
  }, [selectedTag]);

  useEffect(() => {
    if (!hasMorePosts) return;
    const triggerNode = loadMoreTriggerRef.current;
    if (!triggerNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;

        setVisiblePostsCount((prevCount) =>
          Math.min(prevCount + LOAD_MORE_STEP, filteredPosts.length)
        );
      },
      {
        root: null,
        rootMargin: "0px 0px 220px 0px",
        threshold: 0.15,
      }
    );

    observer.observe(triggerNode);

    return () => observer.disconnect();
  }, [filteredPosts.length, hasMorePosts]);

  const MainCardRender: React.FC = () => {
    return (
      <MainCard
        id={postsListData[0]._raw.sourceFilePath}
        title={postsListData[0].title}
        createdAt={postsListData[0].createdAt}
        readTime={postsListData[0].readTime}
        description={postsListData[0].description}
        imageUrl={formatUrlArticle(postsListData[0].imageUrl)}
        imageAlt={postsListData[0].imageAlt}
        onClick={() => router.push(postsListData[0].url)}
      />
    );
  };

  const renderPosts = (posts: Post[]) => {
    if (posts.length > 0) {
      return posts.map((value) => (
        <SampleCard
          key={value._raw.sourceFilePath}
          title={value.title}
          description={value.description}
          createdAt={value.createdAt}
          imageUrl={formatUrlArticle(value.imageUrl)}
          imageAlt={value.imageAlt}
          onClick={() => router.push(value.url)}
        />
      ));
    } else {
      return renderSkeletons(3);
    }
  };

  return (
    <>
      <main className="main space-y-8 grid place-items-center px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 justify-center bg-he-background">
        <div className="space-y-2 text-white w-full">
          {postsListData[0] ? <MainCardRender /> : <MainCardSkeleton />}
        </div>
        <div className="space-y-3 w-full">
          <div className="flex justify-between place-items-center text-white">
            <Text fontSize={"xl"} fontWeight={"normal"} fontFamily="heading">
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
                  setSelectedTag(uniqueTags[parseInt(selectedValue, 10)]);
                }
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
          <div className="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {renderPosts(visiblePosts)}
          </div>
          {hasMorePosts && (
            <>
              <div ref={loadMoreTriggerRef} className="h-6 w-full" aria-hidden="true" />
              <Text color="whiteAlpha.700" textAlign="center" fontSize="sm">
                Carregando mais artigos...
              </Text>
            </>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
