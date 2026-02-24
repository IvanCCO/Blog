const STORE_URL = process.env.NEXT_PUBLIC_IMAGE_STORE_URL;

const hasExternalProtocol = (path: string) =>
  /^https?:\/\//i.test(path);

const normalizePath = (path: string) => path.replace(/^\/+/, "");

export const formatUrlArticle = (path?: string) => {
  if (!path) return "";
  if (hasExternalProtocol(path)) return path;
  if (path.startsWith("/")) return path;

  if (path.startsWith("internal_posts/")) {
    return `/${normalizePath(path)}`;
  }

  if (STORE_URL) {
    return `${STORE_URL}/${normalizePath(path)}`;
  }

  return `/${normalizePath(path)}`;
};

export const formatUrlDefault = (path: string) => {
  if (hasExternalProtocol(path)) return path;
  if (path.startsWith("/")) return path;

  if (STORE_URL) {
    return `${STORE_URL}/default/${normalizePath(path)}`;
  }

  return `/default/${normalizePath(path)}`;
};
