import { SocialIcon } from "react-social-icons";
import { Reveal } from "../../components/Reveal";

interface Props {
  url: string;
  name: string;
}

export default function ContactMe() {
  const SocialComponent = ({ url, name }: Props) => (
    <div className="flex-1 inline-flex place-items-center py-2 px-4 sm:px-8 sm:py-3 md:px-10 space-x-6 bg-[#26262F]  rounded-full">
      <SocialIcon
        url={url}
        style={{ height: 25, width: 25 }}
        bgColor="#ffffff"
        fgColor="#000"
      />
      <p className="text-xl">{name}</p>
    </div>
  );

  const socialMediasList = [
    <SocialComponent
      url="https://www.linkedin.com/in/ivan-f-m-medeiros"
      name="Linkedin"
    />,
    <SocialComponent
      url="https://www.instagram.com/ivan_oliverss/"
      name="Instagram"
    />,
    <SocialComponent url="https://github.com/IvanCCO" name="GitHub" />,
  ];

  return (
    <div className="text-white font-inter flex flex-col items-center h-full space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Contact Me
      </h1>
      {socialMediasList.map((value, index) => (
        <Reveal position={{ y: -75 }} animation={{ delay: 0.6 + index / 7 }}>
          {value}
        </Reveal>
      ))}
    </div>
  );
}
