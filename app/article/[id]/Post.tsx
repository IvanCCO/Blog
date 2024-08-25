"use client";
import { useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarkdownFormatter from "../../../components/MarkdownFormatter";

import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useEffect } from "react";
import ProgressBar from "../../../components/ProgressBar";
import { TopicTag } from "../../../components/TopicTag";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";
import {  useRouter } from "next/navigation";
import { formatUrlArticle } from "@/app/_lib/formatUrl";

type PostProps = {
  postData: any;
};

export default function Post({ postData }: PostProps) {
  const router = useRouter();
  const [article, setArticle] = useState<any | null>(postData);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `${formatUrlArticle(postData.id, "content.txt")}`
        );
        const text: string = await response.text();
        setContent(text);
      } catch (error) {
        router.replace("/404");
      }
    };

    fetchContent();
  }, []);

  const ProfileRowSkeleton = (
    <Box boxShadow="lg" w={"50%"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </Box>
  );

  const PostPage: React.FC = () => {
    return (
      <>
        <ProgressBar />
        <Header />
        <main className="main space-y-2 px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
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
          <Footer />
        </main>
      </>
    );
  };

  return <PostPage />;
}
