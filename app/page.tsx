import { getPostListData } from "./cache";
import Home from "./Home";

export default async function Page() {
  const postData = await getPostListData();
  return <Home postsListData={postData} />;
}
