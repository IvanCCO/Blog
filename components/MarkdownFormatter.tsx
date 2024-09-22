import {
  Center,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

interface MarkdownText {
  text: string;
}

export default function MarkdownFormatter({ text }: MarkdownText) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkToc]}
      className={"text-white pb-24"}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div className="my-12 text-xs lg:text-sm">
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                style={gruvboxDark}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code {...rest} className={"bg-gray-600 px-1 font-mono"}>
              {children}
            </code>
          );
        },
        h1(props) {
          return (
            <h1
              className="text-2xl !my-10 lg:text-3xl font-bold text-[#AE9DFF]"
              {...props}
            >
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1
              className="text-xl font-bold !my-8 lg:text-2xl text-[#AE9DFF]"
              {...props}
            >
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1
              className="text-lg font-bold !my-6 lg:text-xl text-[#AE9DFF]"
              {...props}
            >
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
            <li
              className="text-base leading-relaxed lg:text-lg my-6"
              {...props}
            >
              {props.children}
            </li>
          );
        },
        p(props) {
          const childContent =
            typeof props.children === "string" ? props.children : "";

          if(childContent == "/"){
            return <br/>
          }

          if (childContent.startsWith("$$") && childContent.endsWith("$$")) {
            const strippedContent = childContent.slice(2, -2);
            return (
              <>
                <p
                  className="text-base font-bold leading-loose lg:text-lg italic my-14"
                  {...props}
                >
                  {strippedContent}
                </p>
              </>
            );
          }

          if (childContent == "/") {
            return <br></br>;
          }

          return (
            <p className="text-base leading-relaxed lg:text-lg" {...props}>
              {props.children}
            </p>
          );
        },
        blockquote(props) {
          return (
            <blockquote className="relative w-5/5 mx-auto my-12 p-8 pl-12 italic font-sans text-lg text-white border-l-8 border-[#AE9DFF] leading-7">
              <span className="absolute left-2 top-[-10px] text-4xl text-[#AE9DFF] font-sans">
                &ldquo;
              </span>
              {props.children}
              <span className="absolute right-2 bottom-[-10px] text-4xl text-[#AE9DFF] font-sans">
                &ldquo;
              </span>
            </blockquote>
          );
        },
        a(props) {
          return (
            <a
              href={props.href}
              className="link-color bg-transparent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.children}
            </a>
          );
        },
        table(props) {
          return (
            <TableContainer>
              <Table variant={"simple"} my={10}>
                {props.children}
              </Table>
            </TableContainer>
          );
        },
        thead(props) {
          return <Thead>{props.children}</Thead>;
        },
        tbody(props) {
          return <Tbody>{props.children}</Tbody>;
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
        strong(props) {
          return (
            <strong className="font-bold text-[#F19953]">
              {props.children}
            </strong>
          );
        },
        hr() {
          return (
            <div className="w-full flex justify-center my-3 place-items-baseline my-20">
              <p className="font-itim text-xl ">ههههه</p>
            </div>
          );
        },
        img(props) {
          return (
            <div className="flex justify-center items-center my-6 flex-col text-center">
              <Image
                src={props.src}
                boxSize={["100%", "80%", "70%"]}
                alt={props.alt}
              />
              <Text fontSize={"xs"} color={"GrayText"}>
                {props.alt}
              </Text>
            </div>
          );
        },
      }}
    >
      {text}
    </Markdown>
  );
}
