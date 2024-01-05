import { Button, Image } from "@chakra-ui/react";
import { Reveal } from "../../components/Reveal";

interface Props {
  title: string;
  author: string;
  url: string;
}
export default function Suggestions() {
  const Recomendation = ({ title, author, url }: Props) => (
    <div className="flex flex-col justify-center place-items-center space-y-3 self-center">
      <Image src={url} boxSize={"200px"} objectFit={"contain"} />
      <div className="flex justify-between flex-col space-y-5">
        <div className="text-center">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-base text-low-text-black">{author}</p>
        </div>
        <Button
          color={"black"}
          bg={"white"}
          _hover={{
            bg: "silver",
          }}
          alignSelf={"center"}
        >
          Buy on Amazon
        </Button>
      </div>
    </div>
  );

  const books = [
    <Recomendation
      title="Domain Driven Design"
      author="Eric Evans"
      url="https://images.isbndb.com/covers/12/73/9780132181273.jpg"
    />,
    <Recomendation
      title="The Pragmatic Programmer"
      author="Eric Evans"
      url="https://resources.mindx.edu.vn/uploads/images/sach-day-lap-trinh-co-ban-2.jpg"
    />,
    <Recomendation
      title="12 Rules for live"
      author="Jordam Petterson"
      url="https://images-na.ssl-images-amazon.com/images/I/71YYF%2B1ZGSL.jpg"
    />,
    <Recomendation
      title="I, Robot"
      author="Isac Asimov"
      url="http://www.socialbookshelves.com/wp-content/uploads/2013/05/i-robot.jpg"
    />,
    <Recomendation
      title="Sapiens"
      author="Yuval Harari"
      url="https://media.s-bol.com/36zOVvQ41qzx/831x1200.jpg"
    />,
  ];

  return (
    <div className="text-white font-inter flex flex-col items-center space-y-4 h-full md:items-center">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Books I recommend
      </h1>

      {books.map((value, index) => (
        <Reveal
          key={index}
          animation={{ delay: index / 8 }}
          position={{ x: -75 }}
        >
          {value}
        </Reveal>
      ))}

      <div className="flex flex-col space-y-16"></div>
    </div>
  );
}
