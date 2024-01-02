import { ExternalLinkIcon } from "@chakra-ui/icons";
import { VStack } from "@chakra-ui/react";

// TODO: Adicionar mais coisas aqui e colocar o ano 
export default function Experience() {
  const experienceIcon = (
    <div className="px-3 border-l-2 border-white ml-">
      <p className="text-sm">2023 - Now</p>
      <div className="space-y-1">
        <p className="text-xs">Backend Developer Intern</p>
        <a href="#" className="text-xs underline">
          C6Bank <ExternalLinkIcon />
        </a>
        <p className="text-xs">São Paulo, Brazil</p>
      </div>
    </div>
  );

  return (
    <VStack
      py={4}
      color={"white"}
      fontFamily={"sans-serif"}
      placeItems={"center"}
      spacing={6}
      justifyContent={"center"}
    >
      {experienceIcon}
      {experienceIcon}
    </VStack>
  );
}
