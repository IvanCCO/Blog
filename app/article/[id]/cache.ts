const postCache: { [id: string]: any } = {};

export async function getPostData(id: string): Promise<any> {
  const url = process.env.EDGE_CONFIG;
  if (postCache[id]) {
    return postCache[id];
  }

  const post = await fetch(String(url))
    .then((res) => res.json())
    .then((r) => r.items.posts.find((post: any) => post.id === id));

  if (post) {
    postCache[id] = post;
  }

  return post;
}
