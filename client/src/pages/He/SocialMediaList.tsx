import { SimpleGrid } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { Reveal } from "../../components/Reveal";

type SocialMedia = {
  url: string;
  useDefault?: boolean;
  bg?: string;
  fg?: string;
  network?: string;
};

export function SocialMediaList() {
  const socialMedias: SocialMedia[] = [
    {
      url: "https://github.com/IvanCCO",
      useDefault: false,
      bg: "#fff",
      fg: "#22272E",
      network: "github",
    },
    {
      url: "https://www.linkedin.com/in/ivan-medeiros-024133241",
    },
    {
      url: "https://www.instagram.com/ivan_oliverss/",
    },
    {
      url: "https://www.youtube.com/channel/UCGl5UhjdrFYYPryKV5OIsiQ",
    },
    {
      url: "https://wa.me/551192015034",
      useDefault: false,
      network: "whatsapp",
    },
    {
      url: "ivanmedeiros0903@outlook.com",
      useDefault: false,
      network: "mailto",
    },
  ];

  return (
    <SimpleGrid columns={3} spacing={{ base: 2, sm: 6, md: 2 }}>
      {socialMedias.map((value, index) => (
        <Reveal
          animation={{ delay: 1.0 + index / 3 }}
          position={{ y: -75, x: -30 }}
        >
          {/* TODO: Fui derrotado tem que deixar esse cara responsivo */}
          <SocialIcon
            key={index}
            style={{
              height: "7vw",
              width: "7vw",
            }}
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
