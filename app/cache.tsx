let posts: any[] | null = null;

export async function getPostListData(): Promise<any[]> {
  if (posts) {
    return posts;
  }

  const url = process.env.EDGE_CONFIG;

  const fetchedPosts = await fetch(String(url))
    .then((res) => res.json())
    .then((r) => r.items.posts.filter((p: any) => p.enabled));


  if (fetchedPosts) {
    posts = fetchedPosts;
  }

  return fetchedPosts;
}
