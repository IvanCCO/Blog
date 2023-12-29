import { DownloadIcon, EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export function ActionRow() {
  const button = (msg: string, icon: React.ReactElement) => {
    return (
      <Button
        variant={"outline"}
        boxShadow="md"
        rounded="full"
        colorScheme="gray"
        color={"black"}
        size={"xs"}
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
      {button("Share", <ExternalLinkIcon />)}
      {button("Edit", <EditIcon />)}
      {button("Download", <DownloadIcon />)}
    </HStack>
  );
}
