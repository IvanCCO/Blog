import { Image, useBreakpointValue } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/modules";
import APIGEE from "../../../public/skills_icon/apigee-seeklogo.com.svg";
import AWS from "../../../public/skills_icon/aws.svg";
import GRAFANA from "../../../public/skills_icon/grafana.svg";
import DOCKER from "../../../public/skills_icon/icons8-docker.svg";
import KOTLIN from "../../../public/skills_icon/icons8-kotlin.svg";
import K8S from "../../../public/skills_icon/icons8-kubernetes.svg";
import JAVA from "../../../public/skills_icon/java.svg";
import JS from "../../../public/skills_icon/javascript.svg";
import KAFKA from "../../../public/skills_icon/kafka.svg";
import MONGO from "../../../public/skills_icon/mongo.png";
import REACT from "../../../public/skills_icon/react.svg";
import REDIS from "../../../public/skills_icon/redis.svg";
import SPRING from "../../../public/skills_icon/spring.svg";
import TAILWIND from "../../../public/skills_icon/tailwind.svg";
import TF from "../../../public/skills_icon/terraform.svg";
import VIM from "../../../public/skills_icon/vim.svg";

export default function Skills() {
  const gradientWidth = useBreakpointValue({
    base: 100,
    sm: 120,
    md: 150,
    lg: 200,
    xl: 250,
    "2xl": 300,
  });

  const image = (icon: string, name: string) => {
    return (
      <div className="text-center cursor-pointer py-12">
        <Image src={icon} boxSize={"60px"} mx={5} alt={name}/>
        <p className="text-xs lg:text-base">{name}</p>
      </div>
    );
  };

  return (
    <Marquee
      speed={50}
      gradient={true}
      autoFill={true}
      pauseOnHover={true}
      direction="right"
      gradientColor="#16141C"
      gradientWidth={gradientWidth}
    >
      {image(JAVA.src, "Java")}
      {image(KOTLIN.src, "Kotlin")}
      {image(REACT.src, "React")}
      {image(SPRING.src, "Spring")}
      {image(AWS.src, "AWS")}
      {image(MONGO.src, "MongoDB")}
      {image(TAILWIND.src, "Tailwind")}
      {image(REDIS.src, "Redis")}
      {image(TF.src, "Terraform")}
      {image(DOCKER.src, "Docker")}
      {image(GRAFANA.src, "Grafana")}
      {image(APIGEE.src, "Apigee")}
      {image(K8S.src, "Kubernetes")}
      {image(JS.src, "JavaScript")}
      {image(KAFKA.src, "Kafka")}
      {image(VIM.src, "Vim")}
    </Marquee>
  );
}