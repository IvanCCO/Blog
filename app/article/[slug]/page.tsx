import { Metadata, ResolvingMetadata } from "next";
import { formatUrlArticle } from "@/app/_lib/formatUrl";
import Post from "./Post";
import { allPosts, Post as PostType} from "@/.contentlayer/generated";


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return {
      title: "Página não encontrada",
      description: "O Artigo que você procura não existe.",
      openGraph: {
        images: [],
      },
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      siteName: "Ivan Freire",
      images: [
        {
          url: formatUrlArticle(post.imageUrl),
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
      images: formatUrlArticle(post.imageUrl),
      title: post.title,
      description: post.description,
    },
  };
}


export default async function Page({ params }: Props) {

  const post: PostType | undefined
    = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    throw Error()
  }

  return <Post postData={post!!} />;
}
