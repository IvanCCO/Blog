import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export function ActionRow() {
  const button = (msg: string, icon: React.ReactElement) => {
    return (
      <Button
        variant={"outline"}
        boxShadow="md"
        rounded="full"
        bg={"white"}
        color={"black"}
        size={{ base: "xs", sm: "sm" }}
        leftIcon={icon}
        fontWeight={"normal"}
        px={3}
        display={"inline-block"}
      >
        {msg}
      </Button>
    );
  };

  return (
    <HStack spacing={4} align="center">
      {/* TODO: Criar um popup para mostrar onde compartilhar -> e copiar o link */}
      {button("Share", <ExternalLinkIcon />)}
      {/* TODO: Abrir um popup para saber se quer baixar a página como pdf ou se quer baixar como markdown */}
      {button("Download", <DownloadIcon />)}
    </HStack>
  );
}
