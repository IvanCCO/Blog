class ContentFetchError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "ContentFetchError";
  }
}

export default ContentFetchError;
