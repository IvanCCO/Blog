import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

let posts: any[] | null = null;

export async function getPostListData(): Promise<Post[]> {
  if (posts) {
    return posts;
  }

  const fetchedPosts = allPosts.filter((p) => p.enabled).sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))

  if (fetchedPosts) {
    posts = fetchedPosts;
  }

  return fetchedPosts;
}
