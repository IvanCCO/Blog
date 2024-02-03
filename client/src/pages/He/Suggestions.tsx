import { Button, Image, SimpleGrid } from "@chakra-ui/react";
import { Reveal } from "../../components/Reveal";
import { goToUrl } from "../../utils/commom";

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
      title="Brave new world"
      author="Aldos Huxley"
      url="https://1.bp.blogspot.com/-VKwWtOtDJ08/UGhCP917HrI/AAAAAAAAATM/7Hpd2RlO5-M/s1600/Brave+new+world.jpg"
      buyUrl="https://a.co/d/7pkSXF1"
    />,
    <Recomendation
      title="L'Étranger"
      author="Albert Camus"
      url="https://i.pinimg.com/originals/6f/fa/4e/6ffa4ecd1931e36640110d801f4e8483.jpg"
      buyUrl="https://a.co/d/b883Z8D"
    />,
    <Recomendation
      title="Sobrevivendo no Inferno"
      author="Racionais"
      url="https://img.travessa.com.br/livro/GR/61/61a2d994-da97-4ec5-89dc-1ef959d840cb.jpg"
      buyUrl="https://a.co/d/2b2vOq9"
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
