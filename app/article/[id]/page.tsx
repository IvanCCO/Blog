import { Metadata, ResolvingMetadata } from "next";
import { formatUrlArticle } from "@/app/_lib/formatUrl";
import Post from "./Post"; // Importa o componente separado

const postCache: { [id: string]: any } = {};

export async function getPostData(id: string): Promise<any> {
  if (postCache[id]) {
    return postCache[id];
  }

  const post = await fetch(`http://localhost:3000/api/posts`)
    .then((res) => res.json())
    .then((posts) => posts.find((post: any) => post.id === id));

  if (post) {
    postCache[id] = post;
  }

  return post;
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
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
      title: post.title,
      description: post.description,
      images: [formatUrlArticle(id, post.imageUrl), ...previousImages],
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
