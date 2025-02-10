import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { InstagramEmbed } from "react-social-media-embed";

const MarkerModal = ({ post, isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
    <ModalOverlay backdropBlur="10px" backdropFilter="blur(10px)" />
    <ModalContent
      justifyContent={"center"}
      bg={"transparent"}
      border="1px solid #212121"
      borderRadius="lg"
      p={0}
    >
      <ModalHeader color={"white"}>
        <div className="flex flex-col">
          <p>{post.place}</p>
          <p className="text-xs font-light text-neutral-400">{post.history}</p>
        </div>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody
        p={0}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        {post.url && <InstagramEmbed url={post.url} width={328} />}
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default MarkerModal;
