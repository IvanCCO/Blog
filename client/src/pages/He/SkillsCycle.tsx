import { Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/modules";
import APIGEE from "../../assets/SkillsIcons/apigee-seeklogo.com.svg";
import AWS from "../../assets/SkillsIcons/aws.svg";
import GRAFANA from "../../assets/SkillsIcons/grafana.svg";
import DOCKER from "../../assets/SkillsIcons/icons8-docker.svg";
import KOTLIN from "../../assets/SkillsIcons/icons8-kotlin.svg";
import K8S from "../../assets/SkillsIcons/icons8-kubernetes.svg";
import JAVA from "../../assets/SkillsIcons/java.svg";
import MONGO from "../../assets/SkillsIcons/mongo.png";
import REACT from "../../assets/SkillsIcons/react.svg";
import REDIS from "../../assets/SkillsIcons/redis.svg";
import SPRING from "../../assets/SkillsIcons/spring.svg";
import TF from "../../assets/SkillsIcons/terraform.svg";
import JS from "../../assets/SkillsIcons/javascript.svg"
import TAILWIND from "../../assets/SkillsIcons/tailwind.svg"

export function SkillsCycle() {
  const image = (icon: string, nome: string) => {
    // TODO: Colocar para linkar para o ícone ou para a tecnologia
    return (
      <div className="text-center cursor-pointer">
        <Image src={icon} boxSize={"60px"} mx={5} />
        <p className="text-xs">{nome}</p>
      </div>
    );
  };

  return (
    <Marquee
      speed={30}
      gradient={true}
      autoFill={true}
      pauseOnHover={true}
      direction="right"
      gradientColor="#2E2E32"
      gradientWidth={100}
    >
      {image(JAVA, "Java")}
      {image(KOTLIN, "Kotlin")}
      {image(REACT, "React")}
      {image(SPRING, "Spring")}
      {image(AWS, "AWS")}
      {image(MONGO, "MongoDB")}
      {image(TAILWIND, "Tailwind")}
      {image(REDIS, "Redis")}
      {image(TF, "Terraform")}
      {image(DOCKER, "Docker")}
      {image(GRAFANA, "Grafana")}
      {image(APIGEE, "Apigee")}
      {image(K8S, "Kubernetes")}
      {image(JS, "JavaScript")}
    </Marquee>
  );
}

{
  /* <a target="_blank" href="https://icons8.com/icon/bzf0DqjXFHIW/react">React</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
