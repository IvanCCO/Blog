"use client";
import { useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarkdownFormatter from "../../../components/MarkdownFormatter";

import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useEffect } from "react";
// import ARTICLES from "../../assets/JSON/Home-Posts.json";
import ProgressBar from "../../../components/ProgressBar";
import { TopicTag } from "../../../components/TopicTag";
// import { NotFound } from "../NotFound/NotFound";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";
import { useParams } from "next/navigation";
import { formatUrl } from "@/app/_lib/formatUrl";

export default function Post() {
  const { id } = useParams();
  const [article, setArticle] = useState<any | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [errors, setErrors] = useState<Error[]>([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch("/api/posts");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        const foundArticle = data.filter((p: any) => p.id === id);

        if (foundArticle.length === 0) {
          setErrors((prevErrors) => [
            ...prevErrors,
            new Error("Article not found"),
          ]);
        }

        setArticle(foundArticle.length > 0 ? foundArticle[0] : null);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    const fetchContent = async () => {
      try {
        const response = await fetch(`${formatUrl(String(id), "content.txt")}`);
        const text: string = await response.text();
        console.log(text);
        setContent(text);
      } catch (error) {
        // setErrors((prevErrors) => [...prevErrors, new NotFoundError()]);
      }
    };

    fetchArticle();
    fetchContent()
  }, [id]);

  const ProfileRowSkeleton = (
    <Box boxShadow="lg" w={"50%"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </Box>
  );

  const PostPage: React.FC = () => {
    // if (errors.some((error) => error instanceof NotFoundError)) {
    //   return <NotFound />;
    // }
    return (
      <>
        <ProgressBar />
        <Header />
        <main className="main space-y-2 sm:px-28 md:px-44 lg:px-52 xl:px-96 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
          <div className="space-y-4">
            <div className="w-fit">
              {article ? (
                <TopicTag
                  color={article.tag.color}
                  variant="solid"
                  title={article.tag.name}
                />
              ) : (
                <Skeleton
                  startColor="pink.500"
                  endColor="orange.500"
                  height={"20px"}
                  w={"80px"}
                  rounded={"full"}
                />
              )}
            </div>

            {article ? (
              <>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold">
                  {article.title}
                </h1>
                <p className="text-sm sm:text-lg font-light text-neutral-400">
                  {article.description}
                </p>
              </>
            ) : (
              <Skeleton height="30px" />
            )}

            {article ? (
              <ProfileRow
                data={article.createdAt}
                readTime={article.readTime}
              />
            ) : (
              ProfileRowSkeleton
            )}

            {article && (
              <ActionRow
                title={article.title}
                description={article.description}
              />
            )}
          </div>
          <div className="py-6">
            {article && (
              <ImageBlock
                articleId={article.id}
                imagePath={article.imageUrl}
                imageAlt={article.imageAlt}
              />
            )}
          </div>

          <div>
            {content ? (
              <MarkdownFormatter text={content} />
            ) : (
              <SkeletonText mt={3} noOfLines={4} />
            )}
          </div>
          {/* TODO: Colocar carinha para mostrar os posts relacionados */}
          {/* TODO: Colocar carinha para mostrar os produtos relacionados */}

          <Footer />
        </main>
      </>
    );
  };

  return <PostPage />;
}
