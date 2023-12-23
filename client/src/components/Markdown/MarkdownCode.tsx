import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import EX from "../../assets/Markdown/ex.md";
import remarkGfm from "remark-gfm";

export default function MarkdownCode() {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(EX)
      .then((res) => res.text())
      .then((md) => {
        setPost(md);
      });
  }),
    [];

  console.log(post);

  return (
    <Markdown
      children={post}
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={prism}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        h1(props) {
          return (
            <h1 className="text-3xl font-semibold my-8" {...props}>
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1 className="text-xl font-semibold my-6" {...props}>
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1 className="text-lg font-semibold my-4" {...props}>
              {props.children}
            </h1>
          );
        },
        h4(props) {
          return (
            <h1 className="text-base font-bold my-2" {...props}>
              {props.children}
            </h1>
          );
        },
        ul(props) {
          return (
            <ul className="list-disc ml-4 text-sm" {...props}>
              {props.children}
            </ul>
          );
        },
        li(props) {
          return (
            <li className="my-6" {...props}>
              {props.children}
            </li>
          );
        },
        p(props) {
          return (
            <p className="leading-relaxed" {...props}>
              {props.children}
            </p>
          );
        },
      }}
    />
  );
}
