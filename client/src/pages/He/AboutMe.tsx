import { Button, Icon, Link } from "@chakra-ui/react";
import { IoMdPaper } from "react-icons/io";
import RESUME from "../../assets/Resume.pdf";

export default function AboutMe() {
  return (
    <div className="text-white font-inter space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
        About me
      </h1>
      {/* TODO: Colocar um texto verdadeiro  */}
      <div>
        <p className="text-md font-light leading-relaxed text-justify xl:text-lg">
          {" "}
          I am addicted to technology, that's my burden. Ever since I started
          delving into the world of technology, I felt captivated by the
          possibility of creating whatever I want from wherever I want. What
          excites me the most isn't just the end result but the entire
          process—the decisions that need to be made to achieve the goal, the
          limitations, and all the possibilities involved. Furthermore, what I
          find most appealing is the impact on people with every line of code
          written. A misplaced 'if' statement, and BOOM, thousands or even
          millions of dollars lost, and someone left stranded. That's why, when
          it comes to developing solutions, I always like to consider the
          consequences I'm causing for the end user. Despite the seemingly
          daunting responsibility, it's incredibly enjoyable! I'm not sure if
          this text truly serves as an ABOUT ME, but the fact is, this is what I
          think/who I am when it comes to technology.
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
