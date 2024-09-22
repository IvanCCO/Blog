const STORE_URL = process.env.NEXT_PUBLIC_IMAGE_STORE_URL;
export const formatUrlArticle = (path: string) => {
  return `${STORE_URL}/${path}`;
};
export const formatUrlDefault = (path: string) => {
  return `${STORE_URL}/default/${path}`;
};
