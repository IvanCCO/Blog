import { Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Reveal } from "../../components/Reveal";

interface Props {
  title: string;
  author: string;
  url: string;
  buyUrl: string;
}

export default function Suggestions() {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1536px",
  };

  function goToUrl(url: string) {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  const Recomendation = ({ title, author, url, buyUrl }: Props) => (
    <div className="flex flex-col justify-center place-items-center space-y-3 self-center lg:flex-row  lg:justify-start lg:space-x-4">
      <Image src={url} boxSize={"180px"} objectFit={"contain"} maxW={"150px"} />
      <div className="flex justify-between flex-col space-y-5">
        <div className="text-center lg:text-start">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-base text-low-text-black">{author}</p>
        </div>
        <Button
          onClick={() => goToUrl(buyUrl)}
          className="self-center lg:self-start"
          color={"black"}
          w={"max-content"}
          bg={"white"}
          _hover={{
            bg: "silver",
          }}
        >
          Buy on Amazon
        </Button>
      </div>
    </div>
  );

  const books = [
    <Recomendation
      title="12 Rules for live"
      author="Jordam Petterson"
      url="https://images-na.ssl-images-amazon.com/images/I/71YYF%2B1ZGSL.jpg"
      buyUrl="https://a.co/d/cpErzB2"
    />,
    <Recomendation
      title="I, Robot"
      author="Isac Asimov"
      url="http://www.socialbookshelves.com/wp-content/uploads/2013/05/i-robot.jpg"
      buyUrl="https://a.co/d/eAjBaLp"
    />,
    <Recomendation
      title="Sapiens"
      author="Yuval Harari"
      url="https://media.s-bol.com/36zOVvQ41qzx/831x1200.jpg"
      buyUrl="https://a.co/d/9rdOTjt"
    />,
    <Recomendation
      title="Design Patterns"
      author="Erich Gamma"
      url="https://prodimage.images-bn.com/pimages/9780201633610_p0_v5_s1200x630.jpg"
      buyUrl="https://a.co/d/ftdT1S9"
    />,
    <Recomendation
      title="Clean Code"
      author="Robert C. Martin"
      url="https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg"
      buyUrl="https://a.co/d/3boinXs"
    />,
    <Recomendation
      title="How to Take Smart Notes"
      author="Sönke Ahrens"
      url="https://m.media-amazon.com/images/I/71nRKaywvrL._SL1500_.jpg"
      buyUrl="https://a.co/d/3REeCpz"
    />,
  ];

  return (
    <div className="text-white font-inter flex flex-col items-center space-y-4 h-full lg:items-start ">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Books I recommend
      </h1>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacingY={10} w={"full"}>
        {books.map((value, index) => (
          <Reveal
            key={index}
            animation={{ delay: index / 8 }}
            position={{ x: -75 }}
          >
            {value}
          </Reveal>
        ))}
      </SimpleGrid>
    </div>
  );
}
