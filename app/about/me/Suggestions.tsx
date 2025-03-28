import { Button, Image, Link, SimpleGrid } from "@chakra-ui/react";
import { Reveal } from "../../../components/Reveal";

interface Props {
  title: string;
  author: string;
  imageUrl: string;
  buyUrl: string;
}

export default function Suggestions() {
  function goToUrl(url: string) {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  }

  const Recomendation = ({ title, author, imageUrl: url, buyUrl }: Props) => (
    <div className="flex flex-col justify-center place-items-center space-y-3 self-center lg:flex-row  lg:justify-start lg:space-x-4">
      <Image
        src={url}
        boxSize={"180px"}
        objectFit={"contain"}
        maxW={"150px"}
        alt={`Book: ${title}`}
      />
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
          Compre na Amazon
        </Button>
      </div>
    </div>
  );

  const books = [
    <Recomendation
      key={0}
      title="Previsivelmente irracional"
      author="Dan Ariely"
      imageUrl="https://m.media-amazon.com/images/I/81cbXYZBbTL._SL1500_.jpg"
      buyUrl="https://amzn.to/3ElLzmU"
    />,
    <Recomendation
      key={1}
      title="Domain-Driven Design"
      author="Eric Evans"
      imageUrl="https://m.media-amazon.com/images/I/61aIS4n2jZL._SL1000_.jpg"
      buyUrl="https://amzn.to/3Oup6WF"
    />,
    <Recomendation
      key={2}
      title="Código: A Vida Secreta dos Computadores"
      author=" Charles Petzold"
      imageUrl="https://m.media-amazon.com/images/I/51EQYgFpYtL._SL1359_.jpg"
      buyUrl="https://amzn.to/4iAM8Zm"
    />,
    <Recomendation
      key={3}
      title="A startup enxuta"
      author="Eric Ries"
      imageUrl="https://m.media-amazon.com/images/I/71KJRfm0pGL._SL1500_.jpg"
      buyUrl="https://amzn.to/3CUvF2r"
    />,
    <Recomendation
      key={4}
      title="A morte de Ivan Ilitch"
      author="Lev Tolstoi"
      imageUrl="https://m.media-amazon.com/images/I/61zgVBVoqqL._SL1500_.jpg"
      buyUrl="https://amzn.to/4ivwC0K"
    />,
    <Recomendation
      key={5}
      title="De zero a um"
      author="Peter Thiel"
      imageUrl="https://m.media-amazon.com/images/I/71nURqHifwL._SL1500_.jpg"
      buyUrl="https://amzn.to/4hHGgfX"
    />,
  ];

  return (
    <div className="text-white font-inter flex flex-col items-center space-y-4 h-full lg:items-start">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Leituras do momento
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
