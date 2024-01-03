import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

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

  const test = (
    year: number,
    title: string,
    content: string,
    external?: LinkProps,
  ) => {
    return (
      <div className="timeline-block timeline-block-right">
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

  return (
    <div className="container">
      {test(
        2023,
        "Bankend Developer",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium sit, sequi dicta commodi iste tenetur, molestiae ipsum qui praesentium quisquam deleniti, necessitatibus ut libero maxime voluptas illo hic assumenda.",
        c6Link,
      )}
      {test(
        2023,
        "Freelancer",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium sit, sequi dicta commodi iste tenetur, molestiae ipsum qui praesentium quisquam deleniti, necessitatibus ut libero maxime voluptas illo hic assumenda.",
      )}
    </div>
  );
}
