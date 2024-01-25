import { useEffect, useState } from "react";

export const importLocalMarkdownFile = (path: string): string => {
  const [post, setPost] = useState<string>("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((md) => {
        setPost(md);
      })
      .catch((error) => {
        console.log(`Error occuor while trying to get md file ERROR: ${error}`);
        setPost(fallbackContent);
      });
  }),
    [path];

  return post;
};

export const fallbackContent = `# It was not possible to render page
> The server could not render requested page, please try again later and we are sorry for the incovenience`;

export const fallbackPostContent = `# Error

It was not possible render the requested article, please try again later.

---
If you think thats a bug please,[Contact me](https://www.linkedin.com/in/ivan-f-m-medeiros/)`;
