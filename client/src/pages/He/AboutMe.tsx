import { Button, Icon } from "@chakra-ui/react";
import { IoMdPaper } from "react-icons/io";

export default function AboutMe() {
  return (
    <div className="text-white font-inter space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
        About me
      </h1>
      {/* TODO: Colocar um texto verdadeiro  */}
      <div>
        <p className="text-md font-light leading-relaxed text-justify">
          {" "}
          Hello, my name is Ivan, 
        </p>
      </div>

      <div className="w-full grid place-items-center">
        <Button
          leftIcon={<Icon as={IoMdPaper} />}
          size={"sm"}
          colorScheme="teal"
        >
          Resume
        </Button>
      </div>
    </div>
  );
}
