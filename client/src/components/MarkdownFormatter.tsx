import {
  Center,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
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
      children={text}
      remarkPlugins={[remarkGfm, remarkToc]}
      className={"text-white"}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div className="my-12">
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={gruvboxDark}
              />
            </div>
          ) : (
            <code {...rest} className={"bg-gray-200 px-1"}>
              {children}
            </code>
          );
        },
        h1(props) {
          return (
            <h1 className="text-2xl font-medium !my-10 lg:text-3xl" {...props}>
              {props.children}
            </h1>
          );
        },
        h2(props) {
          return (
            <h1 className="text-xl font-medium !my-8 lg:text-2xl" {...props}>
              {props.children}
            </h1>
          );
        },
        h3(props) {
          return (
            <h1 className="text-lg font-normal !my-6 lg:text-xl" {...props}>
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
            <p className="text-sm leading-relaxed lg:text-base" {...props}>
              {props.children}
            </p>
          );
        },
        blockquote(props) {
          return (
            <blockquote className="border-l-4 border-[#EEEEEE] pl-4  bg-neutral-800 my-5 p-2 italic font-serif ">
              {props.children}
            </blockquote>
          );
        },
        a(props) {
          return (
            <a
              href={props.href}
              className="link-color bg-transparent hover:text-white"
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
        hr(props) {
          return (
            <div className="w-full space-x-3 flex justify-center my-3 place-items-baseline">
              <p className="font-itim text-5xl ">.</p>
              <p className="font-itim text-5xl ">.</p>
              <p className="font-itim text-5xl ">.</p>
            </div>
          );
        },
        img(props) {
          console.log(props.src);
          return (
            <Center my={6}>
              <VStack>
                <Image src={props.src} boxSize="250px" />
                <Text fontSize={"xs"} color={"GrayText"}>
                  {props.alt}
                </Text>
              </VStack>
            </Center>
          );
        },
      }}
    />
  );
}
