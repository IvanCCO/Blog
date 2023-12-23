import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Light, Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface MarkdownProps {
  text: string;
}

// TODO: Aumentar o espacamento entre as palavras, botar para colocar foto
const components = {
  h1: ({ ...props }) => (
    <h1 className="text-3xl font-semibold my-4" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="text-xl font-semibold my-2" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-lg font-semibold my-1" {...props} />
  ),
  code: ({ ...props }) => {
    console.log(props);
    const { children, className, node, ...rest } = props;
    console.log(children);
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={dracula}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};

export default function MarkdownHtml({ text }: MarkdownProps) {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
    >
      {text}
    </Markdown>
  );
}
