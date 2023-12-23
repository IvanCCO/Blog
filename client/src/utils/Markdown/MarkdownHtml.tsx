import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  text: string;
}

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
};

export default function MarkdownHtml({ text }: MarkdownProps) {
  return (
    <Markdown components={components} remarkPlugins={[remarkGfm]}>
      {text}
    </Markdown>
  );
}
