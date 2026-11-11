import { ExternalLinkIcon } from "@chakra-ui/icons";
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
import {
  LinkedinLegacyIcon as LinkedinIcon,
  LinkedinShareButton,
  XShareButton,
  WhatsappLegacyIcon as WhatsappIcon,
  WhatsappShareButton,
  XLegacyIcon as XIcon,
} from "react-share";



export function ActionRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const shareUrl = "ivanfreire.me"
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
        <ButtonFormated
          msg="Share"
          icon={<ExternalLinkIcon />}
          onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={{ base: "2xl", lg: "3xl" }}>
              Thank&apos;s for sharing
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Flex justifyContent="space-evenly">
                <LinkedinShareButton
                  url={shareUrl}
                >
                  <LinkedinIcon size={iconSize} round />
                </LinkedinShareButton>
                <XShareButton url={shareUrl} text={title}>
                  <XIcon size={iconSize} round />
                </XShareButton>
                <WhatsappShareButton
                  url={shareUrl}
                  message={title}
                  separator={"\n".repeat(2)}
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
        rounded="md"
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
      {modal()}
    </HStack>
  );
}