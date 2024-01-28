import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import {
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { baseUrl } from "../../http/operations";

export function ActionRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const shareUrl = window.location.href;
  const iconSize = useBreakpointValue({
    base: "15vw",
    sm: "60px",
    lg: "60px",
    xl: "70px",
    "2xl": "85px",
  });

  const modal = () => {
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            property="og:description"
            content={description}
          ></meta>
        </Helmet>
        <ButtonFormated
          msg="Share"
          icon={<ExternalLinkIcon />}
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={{ base: "2xl", lg: "3xl" }}>
              Thank's for sharing
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Flex justifyContent="space-evenly">
                <LinkedinShareButton
                  url={shareUrl}
                  title={title}
                  summary={description}
                  source={baseUrl}
                >
                  <LinkedinIcon size={iconSize} round />
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                  <XIcon size={iconSize} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator="=> "
                >
                  <WhatsappIcon size={iconSize} round />
                </WhatsappShareButton>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="purple" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const ButtonFormated: React.FC<{
    msg: string;
    icon: React.ReactElement;
    onClick: () => void;
  }> = ({ msg, icon, onClick }) => {
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
        onClick={onClick}
      >
        {msg}
      </Button>
    );
  };
  return (
    <HStack spacing={4} align="center">
      {/* TODO: Criar um popup para mostrar onde compartilhar -> e copiar o link */}
      {/* {button("Share", <ExternalLinkIcon />)} */}
      {modal()}
      {/* TODO: Abrir um popup para saber se quer baixar a página como pdf ou se quer baixar como markdown */}
      <ButtonFormated
        msg="Download"
        icon={<DownloadIcon />}
        onClick={() => console.log("fujiwnei")}
      />
    </HStack>
  );
}
