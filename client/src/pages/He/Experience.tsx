import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { Reveal } from "../../components/Reveal";

interface LinkProps {
  name: string;
  link: string;
}

export default function Experience() {
  const link = (link: LinkProps) => {
    return (
      <>
        <br />
        <Link href={link.link} isExternal fontSize={"xs"}>
          {link.name} <ExternalLinkIcon mx="2px" />
        </Link>
      </>
    );
  };

  let chooseNextSide = "left";

  const test = (
    year: number,
    title: string,
    content: string,
    external?: LinkProps,
  ) => {
    chooseNextSide = chooseNextSide === "right" ? "left" : "right";

    return (
      <div className={`timeline-block timeline-block-${chooseNextSide}`}>
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>{year}</h3>
          <span>{title}</span>
          {external && link(external)}
          <p>{content}</p>
        </div>
      </div>
    );
  };

  const c6Link: LinkProps = {
    name: "C6Bank",
    link: "https://c6bank.com",
  };

  const experiences = [
    test(
      2023,
      "Bankend Developer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium sit, sequi dicta commodi iste tenetur, molestiae ipsum qui praesentium quisquam deleniti, necessitatibus ut libero maxime voluptas illo hic assumenda.",
      c6Link,
    ),
    test(
      2023,
      "Freelancer",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium sit, sequi dicta commodi iste tenetur, molestiae ipsum qui praesentium quisquam deleniti, necessitatibus ut libero maxime voluptas illo hic assumenda.",
    ),
  ];

  return (
    <div className="container">
      {experiences.map((value, index) => (
        <Reveal position={{ y: 75 }} animation={{ delay: 1.0 + index / 8 }}>
          {value}
        </Reveal>
      ))}
    </div>
  );
}
