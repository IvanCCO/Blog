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

  const geekbusLink: LinkProps = {
    name: "Geekbus",
    link: "https://geekbus.com",
  };

  const startTravel : LinkProps = {
    name : "Start Travel",
    link: "https://github.com/IvanCCO/StarTravel"
  }

  const pointLink: LinkProps = {
    name: "Point",
    link: "https://youtu.be/gsrfYBNBXMc?t=86",
  };

  const experiences = [
    test(
      2023,
      "Bankend Developer",
      "Responsible for the backend development of limit, secure location management projects, and external integrations. Developed business logic to handle Brazilian monetary transactions such as TED, TEF, and PIX. Additionally, worked on Kubernetes cluster management, conducting migrations, overseeing pods, removing unnecessary resources, contributing to cloud cost reduction, and applying FinOps concepts. Developed solutions to enhance observability and monitoring by constructing dashboards with the necessary metrics. (AND A LOT MORE)",
      c6Link,
    ),
    test(
      2023,
      "Geekbus - College",
      "As part of a college project, I developed and deployed a web application on AWS aimed at connecting bus drivers with individuals interested in group travel. The application facilitates seamless matching for a more efficient and enjoyable group travel experience.",
    ),
    test(
      2022,
      "Point - College",
      "I have designed and deployed a web and Java application on AWS and Azure for a monitoring system. This application renders a global heat map displaying the locations of machines basead on the IP Address, providing comprehensive monitoring capabilities.",
      pointLink,
    ),
test(
      2022,
      "Start Travel - College",
      "A social media platform crafted specifically for tech-savvy professionals seamlessly navigating the landscape of remote work, all while indulging their fervor for globetrotting",
      startTravel,
    )
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
