import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Td, Tbody  } from "@chakra-ui/react";

interface MarkdownText {
  text: string;
}

export default function MarkdownFormatter({ text }: MarkdownText) {
  return (
    <Markdown
      children={text}
      remarkPlugins={[remarkGfm, remarkToc]}
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
            <code {...rest} className={"bg-gray-200 px-1"}>
              {children}
            </code>
          );
        },
        h1(props) {
          return (
            <h1 className="text-xl font-medium my-8" {...props}>
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1 className="text-lg font-medium my-6" {...props}>
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1 className="text-lg font-normal my-4" {...props}>
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
            <p className="text-sm leading-relaxed" {...props}>
              {props.children}
            </p>
          );
        },
        blockquote(props) {
          return (
            <blockquote className="border-l-4 border-gray-500 pl-4 italic">
              {props.children}
            </blockquote>
          );
        },
        a(props) {
          return (
            <a href={props.href} className="text-blue-600 underline">
              {props.children}
            </a>
          );
        },
        table(props) {
          return (
            <TableContainer>
              <Table variant={"simple"}>
                <TableCaption>Metricas de sucesso</TableCaption>
                {props.children}
              </Table>
            </TableContainer>
          );
        },
        thead(props) {
          return <Thead>{props.children}</Thead>;
        },
        tbody(props){
          return <Tbody>{props.children}</Tbody>
        },
        tr(props) {
          return <Tr>{props.children}</Tr>;
        },
        th(props) {
          return <Th className="text-left">{props.children}</Th>;
        },
        td(props) {
          return <Td className="text-left">{props.children}</Td>;
        },
      }}
    />
  );
}