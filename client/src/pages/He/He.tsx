import { ArrowForwardIcon } from "@chakra-ui/icons";
import mypic from "../../assets/he-pic.jpg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Reveal } from "../../components/Reveal";
import { PageType } from "../../data/constants";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import { SkillsCycle } from "./SkillsCycle";
import { SocialMediaList } from "./SocialMediaList";

export function He() {
  const introdution = (
    <div className="flex flex-col justify-center space-y-2">
      <div>
        <div>
          <p className="text-md text-white">Hi there, i am</p>
        </div>
        <div>
          <p className="text-5xl leading-tight text-white">
            Ivan, Software Enginner🤙
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm text-low-text-black font-inter">
          Currently working at @C6Bank, São Paulo Brasil
        </p>
      </div>
    </div>
  );

  const contact = (
    <div className="flex flex-row">
      <img
        src={mypic}
        alt="Descrição da imagem"
        className="w-1/2 object-cover rounded-tl-sm rounded-bl-sm rounded-br-full rounded-tr-full"
      />
      <div className="w-1/2 flex flex-col space-y-3 justify-center place-items-center">
        <SocialMediaList />
        <div className="gradient relative items-center content-center text-white text-md rounded-md py-2 px-4 z-0 flex-row inline-flex w-full justify-center cursor-pointer">
          <p className="text-center font-inter font-bold">My Posts</p>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );

  const skills = (
    <div className="text-white font-inter flex flex-col items-center justify-center space-y-4 h-full ">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-center px-4">
        Skills
      </h1>
      <SkillsCycle />
      <div>
        <span className="text-xs">All those icons are from </span>
        <a
          target="_blank"
          href="https://icons8.com"
          className="link-color text-xs"
        >
          Icons8 ❤
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Header type={PageType.HE} />

      <main className="h-full py-24 bg-he-background px-default-width lg:px-96">
        <div className="font-jomolhari flex flex-col text-font-black-color space-y-16">
          <Reveal>{introdution}</Reveal>
          <Reveal>{contact}</Reveal>
          <Reveal>
            <AboutMe />
          </Reveal>
          <Reveal>{skills}</Reveal>
          <div className="text-white font-inter flex flex-col items-start space-y-4 h-full ">
            <Reveal>
              <>
                <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
                  Experience <span className="text-lg font-normal">&</span>{" "}
                  Projects
                </h1>
                <Experience />
              </>
            </Reveal>
          </div>
          <Footer textColor="white" />
        </div>
      </main>
    </>
  );
}
