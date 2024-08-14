import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";

import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ARTICLES from "../../assets/JSON/Home-Posts.json";
import ProgressBar from "../../components/ProgressBar";
import { TopicTag } from "../../components/TopicTag";
import NotFoundError from "../../exceptions/NotFoundError";
import { contentPath, fetchData, imagePath } from "../../http/operations";
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
      if(!foundArticle){
        setErrors((prevErrors) => [...prevErrors, new NotFoundError()]);
      }
      setArticle(foundArticle);
    };

    const fetchContent = async () => {
      try {
        const data = await fetchData<string>(contentPath(articleId));
        setContent(data);
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
          <Helmet>
            <meta
              name="description"
              property="og:description"
              content={article.description}
            ></meta>
            <meta
              name="image"
              property="og:image"
              content={imagePath(article.id)}
            ></meta>
            <meta name="title" property="og:title" content={article.title} />
          </Helmet>
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
                  borderRadius="full"
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
            <ImageBlock articleId={articleId} />
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
