import { Button, Icon, Link } from "@chakra-ui/react";
import { IoMdPaper } from "react-icons/io";
import RESUME from "../../assets/Resume.pdf";

export default function AboutMe() {
  return (
    <div className="text-white font-inter space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
        About Ivan
      </h1>
      <div>
        <p className="text-md font-light leading-relaxed text-justify xl:text-lg">
          Hey, I'm Ivan Medeiros. I'm currently a Software Engineer, YouTuber,
          writer, gamer, and entrepreneur. I've been working with technology for
          the past 2 years, helping companies deliver the best results.
          <br></br>
          <br></br>
          My technology journey started when I had a great idea for a website,
          but I didn't have the knowledge to start. I didn't want to make a
          pre-built website, so I started learning how to code on my own. I
          learned the basics of web development, but it wasn't enough, so I
          enrolled in computer science degree to learn the fundamental concepts
          of computers and software projects.
          <br></br>
          <br></br>
          Nowadays, I work full time as backend developer and I write articles
          on this blog about things that I think it's relevant to people to
          know. Things like a book review, my thought about some topic or just
          my point of view about a new tecnology that I am working on.
        </p>
      </div>

      <div className="w-full grid place-items-center pt-5">
        <Link href={RESUME} isExternal>
          <Button
            leftIcon={<Icon as={IoMdPaper} />}
            size={{ base: "md", xl: "lg" }}
            colorScheme="teal"
          >
            See my Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
