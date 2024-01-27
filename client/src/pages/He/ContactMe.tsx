import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

interface Props {
  url: string;
  name: string;
}

export default function ContactMe() {
  const SocialComponent = ({ url, name }: Props) => (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 inline-flex place-items-center py-2 px-4 sm:px-8 sm:py-3 md:px-10 space-x-6 bg-white rounded-full"
    >
      <SocialIcon
        url={url}
        style={{ height: 25, width: 25 }}
        bgColor="#000"
        fgColor="#ffffff"
      />
      <p className="text-xl">{name}</p>
    </Link>
  );

  const socialMediasList = [
    <SocialComponent
      url="https://www.linkedin.com/in/ivan-f-m-medeiros"
      name="Linkedin"
    />,
    <SocialComponent url="https://github.com/IvanCCO" name="GitHub" />,
    <SocialComponent
      url="https://www.instagram.com/ivan_oliverss/"
      name="Instagram"
    />,
  ];

  return (
    <div className="text-black font-inter flex flex-col items-center h-full space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Let's build something together?
      </h1>
      <div className="flex-1 flex flex-col space-y-4 font-semibold">
        {socialMediasList}
      </div>
    </div>
  );
}
