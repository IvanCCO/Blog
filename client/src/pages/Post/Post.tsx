import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";

import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import { TopicTag } from "../../components/TopicTag";
import ContentFetchError from "../../exceptions/ContentFetchError";
import NotFoundError from "../../exceptions/NotFoundError";
import { fallbackPostContent } from "../../hooks/useFileUtils";
import { articlePath, contentPath, fetchData } from "../../http/operations";
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
  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [errors, setErrors] = useState<Error[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await fetchData<Article>(articlePath(articleId));
        setArticle(data);
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          setErrors((prevErrors) => [...prevErrors, new NotFoundError()]);
        }
      }
    };

    const fetchContent = async () => {
      try {
        const data = await fetchData<string>(contentPath(articleId));
        setContent(data);
      } catch (error) {
        setContent(fallbackPostContent);
        setErrors((prevErrors) => [...prevErrors, new ContentFetchError()]);
      }
    };
    fetchArticle();
    fetchContent();

    console.log(content);
  }, []);

  console.log(content);

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
        <ProgressBar />
        <Header />
        <main className="main space-y-2 sm:px-28 md:px-44 lg:px-52 xl:px-96 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
          <div className="space-y-4">
            <div className="w-fit">
              {article ? (
                <TopicTag
                  color={"purple"}
                  variant="solid"
                  title={article.tag}
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

          <Footer />
        </main>
      </>
    );
  };

  return <PostPage />;
}
