import api from "./api";

export const baseUrl = api.defaults.baseURL;

export async function fetchData<T>(url: string): Promise<T> {
  return (await api.get(url)).data;
}

export const articlePath = (id: string) => {
  return `article/${id}`;
};

export const imagePath = (id: string) => {
  return `${baseUrl}/article/${id}/image`;
};

export const contentPath = (id: string) => {
  return `article/${id}/content`;
};
export const lastArticlePath = `article/last`;

export const storageUrl =
  "https://taxco-bucket.s3.us-east-2.amazonaws.com/local-articles";

export const formatUrl = (articleId: string, path: string) => {
  return `${storageUrl}/${articleId}/${path}`;
};
