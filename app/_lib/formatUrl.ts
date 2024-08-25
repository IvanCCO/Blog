const IMAGE_STORE_URL="https://taxco-bucket.s3.us-east-2.amazonaws.com"
export const formatUrlArticle = (articleId: string, path: string) => {
  return `${IMAGE_STORE_URL}/local-articles/${articleId}/${path}`;
};
export const formatUrlDefault = (path: string) => {
  return `${IMAGE_STORE_URL}/default/${path}`;
};