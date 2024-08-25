const IMAGE_STORE_URL = process.env.NEXT_PUBLIC_IMAGE_STORE_URL;
export const formatUrlArticle = (articleId: string, path: string) => {
  return `${IMAGE_STORE_URL}/local-articles/${articleId}/${path}`;
};
export const formatUrlDefault = (path: string) => {
  return `${IMAGE_STORE_URL}/default/${path}`;
};
