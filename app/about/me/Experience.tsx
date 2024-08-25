import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { Reveal } from "../../../components/Reveal";

interface LinkProps {
  name: string;
  link: string;
}

export default function Experience() {
  const link = (link: LinkProps) => {
    return (
      <>
        <br />
        <Link href={link.link} isExternal fontSize={{ base: "md", xl: "md" }}>
          {link.name} <ExternalLinkIcon mx="2px" />
        </Link>
      </>
    );
  };

  let chooseNextSide = "left";

  const ExpecienceBlock = (
    year: string,
    title: string,
    content: string,
    externalLink?: LinkProps
  ) => {
    chooseNextSide = chooseNextSide === "right" ? "left" : "right";

    return (
      <div className={`timeline-block timeline-block-${chooseNextSide}`}>
        <div className="marker"></div>
        <div className="timeline-content">
          <h3 className="text-lg font-bold xl:text-xl">{year}</h3>
          <span className="text-[#cacaca] text-base xl:text-lg">{title}</span>
          {externalLink && link(externalLink)}
          <p className="mt-2 text-base leading-6 tracking-wide text-[#888]">
            {content}
          </p>
        </div>
      </div>
    );
  };

  const c6Link: LinkProps = {
    name: "C6Bank",
    link: "https://c6bank.com",
  };

  const startTravel: LinkProps = {
    name: "Start Travel",
    link: "https://github.com/IvanCCO/StarTravel",
  };

  const pointLink: LinkProps = {
    name: "Point",
    link: "https://youtu.be/gsrfYBNBXMc?t=86",
  };

  const southsEagle: LinkProps = {
    name: "South's Eagles",
    link: "https://github.com/orgs/South-s-Eagles/repositories",
  };

  const experiences = [
    ExpecienceBlock(
      "2024 - Current",
      "South's Eagles - College",
      "Designed an innovative IoT solution aimed at measuring stress levels in individuals, employing a range of sensors and developing a simulator to generate data. Orchestrated the Extraction, Transformation, and Loading (ETL) process using cutting-edge technologies including Spark and AWS. Particularly, spearheaded the integration of an EEG sensor to capture brain waves, enabling real-time assessment of user stress levels and relaxation states",
      southsEagle
    ),
    ExpecienceBlock(
      "2023 - Current",
      "Bankend Developer",
      "Responsible for the backend development of limit, secure location management projects, and external integrations. Developed business logic to handle Brazilian monetary transactions such as TED, TEF, and PIX. Additionally, worked on Kubernetes cluster management, conducting migrations, overseeing pods, removing unnecessary resources, contributing to cloud cost reduction, and applying FinOps concepts. Developed solutions to enhance observability and monitoring by constructing dashboards with the necessary metrics. See more on my resume...",
      c6Link
    ),
    ExpecienceBlock(
      "2023",
      "Geekbus - College",
      "As part of a college project, I developed and deployed a web application on AWS aimed at connecting bus drivers with individuals interested in group travel. The application facilitates seamless matching for a more efficient and enjoyable group travel experience"
    ),
    ExpecienceBlock(
      "2022",
      "Point - College",
      "I have designed and deployed a web and Java application on AWS and Azure for a machine monitoring system. This application renders a global heat map displaying the locations of machines basead on the IP Address, providing comprehensive monitoring capabilities.",
      pointLink
    ),
    ExpecienceBlock(
      "2022",
      "Start Travel - College",
      "A social media platform tailored for remote workers and digital nomads, combining work and travel seamlessly.",
      startTravel
    ),
  ];

  return (
    <div className="container">
      {experiences.map((value, index) => (
        <Reveal key={index} position={{ y: 75 }} animation={{ delay: 1.0 + index / 8 }}>
          {value}
        </Reveal>
      ))}
    </div>
  );
}
