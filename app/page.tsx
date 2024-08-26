import { getPostListData } from "./cache";
import Home from "./Home";

export default async function Page() {
  const postData = await getPostListData();
  console.log("Teste");
  return <Home postsListData={postData} />;
}
