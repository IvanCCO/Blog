import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { InstagramEmbed } from "react-social-media-embed";

const MarkerModal = ({ postUrl, isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
    <ModalOverlay backdropBlur="10px" backdropFilter="blur(10px)" />
    <ModalContent
      justifyContent={"center"}
      bg={"transparent"}
      border="1px solid #212121"
      borderRadius="lg"
      p={0}
    >
      <ModalHeader color={"white"}>{postUrl.place}</ModalHeader>
      <ModalCloseButton />
      <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
        <InstagramEmbed url={postUrl.url} width={328} captioned />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default MarkerModal;
