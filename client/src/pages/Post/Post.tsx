import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";

import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ARTICLES from "../../assets/JSON/Home-Posts.json";
import ProgressBar from "../../components/ProgressBar";
import { TopicTag } from "../../components/TopicTag";
import NotFoundError from "../../exceptions/NotFoundError";
import { formatUrl } from "../../http/operations";
import { SEO } from "../../utils/Seo";
import { NotFound } from "../NotFound/NotFound";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";

type Article = {
  id: string;
  title: string;
  description: string;
  readTime: number;
  tag: string;
  createdAt: Date;
};
export function Post() {
  const { articleId = "" } = useParams();
  const [article, setArticle] = useState<any | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [errors, setErrors] = useState<Error[]>([]);
  const posts = ARTICLES.posts;

  useEffect(() => {
    const fetchArticle = () => {
      const foundArticle = posts.find((post) => post.id === articleId);
      if (!foundArticle) {
        setErrors((prevErrors) => [...prevErrors, new NotFoundError()]);
      }
      setArticle(foundArticle);
    };

    const fetchContent = async () => {
      try {
        const response = await fetch(`${formatUrl(articleId, "content.txt")}`);
        const text: string = await response.text();
        console.log(text);
        setContent(text);
      } catch (error) {
        setErrors((prevErrors) => [...prevErrors, new NotFoundError()]);
      }
    };
    fetchArticle();
    fetchContent();

    console.log(content);
  }, []);

  const ProfileRowSkeleton = (
    <Box boxShadow="lg" w={"50%"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </Box>
  );

  const PostPage: React.FC = () => {
    if (errors.some((error) => error instanceof NotFoundError)) {
      return <NotFound />;
    }
    return (
      <>
        {article && (
          <SEO
            title={article.title}
            description={article.description}
            meta={[
              {
                name: "description",
                content: article.description,
              },
              {
                property: "og:description",
                content: article.description,
              },
              {
                property: "og:image",
                content: formatUrl(article.id, article.imageUrl),
              },
              {
                property: "og:title",
                content: article.title,
              },
              {
                property: "og:type",
                content: "article",
              },
              {
                name: "twitter:creator",
                content: "Ivan Miranda",
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
              {
                name: "twitter:title",
                content: article.title,
              },
              {
                name: "twitter:description",
                content: article.description,
              },
              {
                name: "twitter:image",
                content: formatUrl(article.id, article.imageUrl),
              },
            ]}
          ></SEO>
        )}

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
                articleId={articleId}
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
