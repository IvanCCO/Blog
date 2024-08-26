import { Metadata, ResolvingMetadata } from "next";
import { getPostData } from "./cache";
import { formatUrlArticle } from "@/app/_lib/formatUrl";
import Post from "./Post";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const post = await getPostData(id);

  if (!post) {
    return {
      title: "Post not found",
      description: "The post you are looking for does not exist.",
      openGraph: {
        images: [],
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      siteName: "Taxco",
      images: [
        {
          url: formatUrlArticle(id, post.imageUrl),
          width: 800,
          height: 600,
        },
      ],
      type: "article",
      title: post.title,
      description: post.description,
    },
    twitter: {
      card: "summary_large_image",
      images: formatUrlArticle(id, post.imageUrl),
      title: post.title,
      description: post.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const postData = await getPostData(params.id);

  if (!postData) {
    return <div>Post not found</div>;
  }

  return <Post postData={postData} />;
}
