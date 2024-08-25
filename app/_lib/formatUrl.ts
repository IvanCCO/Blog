const IMAGE_STORE_URL="https://taxco-bucket.s3.us-east-2.amazonaws.com/local-articles"
export const formatUrl = (articleId: string, path: string) => {
  return `${IMAGE_STORE_URL}/${articleId}/${path}`;
};