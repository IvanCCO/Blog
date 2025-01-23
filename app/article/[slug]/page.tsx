import { Metadata, ResolvingMetadata } from "next";
import { notFound } from 'next/navigation'
import { formatUrlArticle } from "@/app/_lib/formatUrl";
import Post from "./Post";
import { allPosts, Post as PostType } from "@/.contentlayer/generated";
import Script from "next/script";
import { BlogPosting, WithContext } from "schema-dts";


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
    notFound()
  }


  const jsonLd: WithContext<BlogPosting> =
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    identifier: post._id,
    inLanguage: 'pt-BR',
    headline: post.title,
    description: post.description,
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    articleBody: post.body.raw,
    about: post.tag,
    author: {
      "@type": "Person",
      name: "Ivan Freire",
    },
    image: formatUrlArticle(post.imageUrl),
    url: `https://www.ivanfreire.me/article/${post._raw.flattenedPath}`,
    publisher: {
      "@type": "Organization",
      name: "Ivan Freire",
    }
  }


  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Post postData={post!!} />;
    </>
  )
}
