import { Image, Icon } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/modules";
import K8S from "../../assets/SkillsIcons/icons8-kubernetes.svg"
import DOCKER from "../../assets/SkillsIcons/icons8-docker.svg"
import JAVA from "../../assets/SkillsIcons/java.svg"
import KOTLIN from "../../assets/SkillsIcons/icons8-kotlin.svg"
import REACT from "../../assets/SkillsIcons/react.svg"
import SPRING from "../../assets/SkillsIcons/spring.svg"

export function SkillsCycle() {

  const image = (icon : string) => {
    return (
      <Image src={icon} boxSize={"60px"} mx={5}/>
    )
  }

  return (
      <Marquee speed={20} gradient={true} autoFill={true} pauseOnClick={true} direction="right" gradientColor="#2E2E32" gradientWidth={100}>
        {image(K8S)}
        {image(DOCKER)}
        {image(JAVA)}
        {image(KOTLIN)}
        {image(REACT)}
        {image(SPRING)}
      </Marquee>
  );
}

{/* <a target="_blank" href="https://icons8.com/icon/bzf0DqjXFHIW/react">React</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
