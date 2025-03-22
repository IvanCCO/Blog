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
  AspectRatio,
} from "@chakra-ui/react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkCallout from "@r4ai/remark-callout"
import remarkToc from "remark-toc";

const YOUTUBE_URL = "https://www.youtube.com"

interface MarkdownText {
  text: string;
}

export default function MarkdownFormatter({ text }: MarkdownText) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkToc, remarkCallout]}
      className={"text-[#f8e5e7] pb-12"}
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
              className="text-2xl !my-10 lg:text-3xl font-bold text-[#f09394]"
              {...props}
            >
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1
              className="text-xl font-bold !my-8 lg:text-2xl text-[#f09394]"
              {...props}
            >
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1
              className="text-lg font-bold !my-6 lg:text-xl text-[#f09394]"
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

          if (childContent == "/") {
            return <br />
          }

          if (childContent.startsWith("$$") && childContent.endsWith("$$")) {
            const strippedContent = childContent.slice(2, -2);
            return (
              <Center>
                <p
                  className="text-base lg:text-lg font-light leading-loose italic my-14 formula-text border border-white-main p-10 rounded-xl text-white-main"
                  {...props}
                >
                  {strippedContent}
                </p>
              </Center>
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
            <blockquote className="relative w-5/5 mx-auto my-12 p-8 pl-12 italic font-sans text-lg text-[#f8e5e7] border-l-8 border-[#f09394] leading-7">
              <span className="absolute left-2 top-[-10px] text-4xl text-[#f09394] font-sans">
                &ldquo;
              </span>
              {props.children}
              <span className="absolute right-2 bottom-[-10px] text-4xl text-[#f09394] font-sans">
                &ldquo;
              </span>
            </blockquote>
          );
        },
        a(props) {

          if (props.href?.startsWith(YOUTUBE_URL)) {
            return (
              <Center my={4}>
                <AspectRatio maxW="860px" w="100%" ratio={16 / 9}>
                  <iframe
                    title="youtube-video"
                    src={props.href.replace("watch?v=", "embed/")}
                    allowFullScreen
                  />
                </AspectRatio>
              </Center>
            );
          }

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
            <div className="w-full flex justify-center place-items-baseline my-20">
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
