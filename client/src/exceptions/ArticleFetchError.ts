class ArticleFetchError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ArticleFetchError";
  }
}

export default ArticleFetchError;
