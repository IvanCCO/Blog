import { Button, Image } from "@chakra-ui/react";

interface Props {
  title: string;
  author: string;
  url: string;
}
export default function Suggestions() {
  const Recomendation = ({ title, author, url }: Props) => (
    <div className="flex flex-col justify-center place-items-center space-y-3 self-center">
      <Image src={url} boxSize={"200px"} objectFit={"contain"} />
      <div className="flex justify-between flex-col space-y-3">
        <div className="text-center">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-base text-low-text-black">{author}</p>
        </div>
        <div>
          <Button
            color={"black"}
            bg={"white"}
            _hover={{
              bg: "silver",
            }}
          >
            Buy on Amazon
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-white font-inter flex flex-col items-center space-y-4 h-full md:items-center">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
        Books I recommend
      </h1>

      <div className="flex flex-col space-y-16">
        <Recomendation
          title="12 Rules for live"
          author="Jordam Petterson"
          url="https://images-na.ssl-images-amazon.com/images/I/71YYF%2B1ZGSL.jpg"
        />
        <Recomendation
          title="I, Robot"
          author="Isac Asimov"
          url="http://www.socialbookshelves.com/wp-content/uploads/2013/05/i-robot.jpg"
        />
        <Recomendation
          title="Sapiens"
          author="Yurval Harari"
          url="https://media.s-bol.com/36zOVvQ41qzx/831x1200.jpg"
        />
      </div>
    </div>
  );
}
