import { Divider } from "@chakra-ui/react";
import Image from "next/image";
import GITHUB_ICON from "./icons/github.svg";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "./icons/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-5 absolute bottom-0 left-0 right-0 space-y-3">
      <Divider />
      <div className="flex flex-row justify-center gap-8">
        <Link href={"https://github.com/IvanCCO"} target="_blank">
          <GithubIcon fill="white" w="20" />
        </Link>
        <Link href={"https://www.instagram.com/ivanfreiremm"} target="_blank">
          <InstagramIcon fill="white" w="20" />
        </Link>
        <Link href={"https://www.linkedin.com/in/ivan-f-m-medeiros"} target="_blank">
          <LinkedInIcon fill="white" w="20" />
        </Link>
        <Link href={"https://www.youtube.com/@ivanfreirem"} target="_blank">
          <YoutubeIcon fill="white" w="20" />
        </Link>
      </div>
    </div>
  );
}
