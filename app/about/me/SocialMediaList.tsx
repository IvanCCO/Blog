import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { Reveal } from "../../../components/Reveal";

type SocialMedia = {
  url: string;
  useDefault?: boolean;
  bg?: string;
  fg?: string;
  network?: string;
};

export default function SocialMediaList() {
  const socialMedias: SocialMedia[] = [
    {
      url: "https://github.com/IvanCCO",
      useDefault: false,
      bg: "#fff",
      fg: "#22272E",
      network: "github",
    },
    {
      url: "https://www.linkedin.com/in/ivan-f-m-medeiros",
    },
    {
      url: "https://www.instagram.com/ivanfreiremm",
    },
    {
      url: "https://www.youtube.com/channel/UCGl5UhjdrFYYPryKV5OIsiQ",
    },
    {
      url: "https://x.com/IvanFreire53674",
    },
  ];

  const iconSize = useBreakpointValue({
    base: "10vw",
    sm: "60px",
    lg: "40px",
    xl: "50px",
    "2xl": "55px",
  });

  return (
    <SimpleGrid
      columns={{ base: 2, lg: 6 }}
      spacingX={{ base: 2, sm: 2, md: 3, lg: 1 }}
      spacingY={{ base: 4, sm: 6, md: 7 }}
    >
      {socialMedias.map((value, index) => (
        <Reveal
          key={index}
          animation={{ delay: 1.0 + index / 3 }}
          position={{ y: -75, x: -30 }}
        >
          <SocialIcon
            key={index}
            style={{
              height: iconSize,
              width: iconSize,
            }}
            target="_blank"
            url={value.url}
            {...(!value.useDefault && {
              bgColor: value.bg,
              fgColor: value.fg,
              network: value.network,
            })}
          />
        </Reveal>
      ))}
    </SimpleGrid>
  );
}
