import { Button } from "@chakra-ui/react";
import mypic from "../../assets/he-pic.jpg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import { SkillsCycle } from "./SkillsCycle";
import { SocialMediaList } from "./SocialMediaList";
import {ArrowForwardIcon} from "@chakra-ui/icons"

// TODO: Componentes irem aparecendo conforme o scroll do mouse vai descendo
const desktopWorking = (
  <>
    <main className="h-full bg-he-background px-page-default space-y-14 pt-24">
      <div className="font-jomolhari flex justify-between h-4/6">
        <div className="flex flex-col justify-center w-1/2 px-7 space-y-9">
          <div className="space-y-2">
            <div>
              <p className="text-xl text-white">Hi there, i am</p>
            </div>
            <div>
              <p className="text-7xl text-white leading-tight">
                Ivan Miranda, Software Enginner🤙
              </p>
            </div>
            <div>
              <p className="text-md text-low-text-black font-inter">
                Currently working at @C6Bank, São Paulo Brasil
              </p>
            </div>
          </div>
          <SocialMediaList />
        </div>
        <div className="flex items-center bg-slate-100 w-1/2 rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm overflow-hidden max-h-fit">
          <img
            src={mypic}
            alt="Descrição da imagem"
            className="w-full h-full object-cover rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm"
          />
        </div>
      </div>
    </main>
  </>
);

export function AboutHe() {
  return (
    <>
      <Header type={PageType.HE} />

      <main className="h-full py-32 bg-he-background px-default-width lg:px-96">
        <div className="font-jomolhari flex flex-col text-font-black-color space-y-default-heigh">
          <div className="flex flex-col justify-center space-y-2">
            <div>
              <div>
                <p className="text-md text-white">Hi there, i am</p>
              </div>
              <div>
                <p className="text-5xl leading-tight text-white">
                  Ivan Miranda, Software Enginner🤙
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-low-text-black font-inter">
                Currently working at @C6Bank, São Paulo Brasil
              </p>
            </div>
          </div>
          {/* TODO:  My posts components -> arrow maybe change to something better*/}
          <div className="flex flex-row">
            <img
              src={mypic}
              alt="Descrição da imagem"
              className="w-1/2 object-cover rounded-tl-sm rounded-bl-sm rounded-br-full rounded-tr-full"
            />
            <div className="w-1/2 flex flex-col space-y-4 justify-center place-items-center">
              <SocialMediaList />
              {/* TODO: Deixar um botão mais maneiro. */}
              <Button w={"100%"} variant={"solid"} colorScheme="purple" fontWeight={"bold"} rightIcon={<ArrowForwardIcon color={"white"} boxSize={5}/>}>My Posts</Button>
            </div>
          </div>

          <div className="text-white font-inter space-y-4">
            <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
              About me
            </h1>
            {/* TODO: Colocar um texto verdadeiro  */}
            <p className="text-md font-light leading-relaxed">
              {" "}
              My name is Ivan Miranda, i am a Software Enginner Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Dicta provident
              rerum earum beatae aspernatur odit, iure eveniet molestiae sequi
              recusandae ratione, voluptatibus dolore ab. Nulla officia
              assumenda beatae consequatur fugiat?
            </p>
          </div>

          <div className="text-white font-inter flex flex-col items-center justify-center space-y-4 h-full ">
            <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-center px-4">
              Skills
            </h1>
            <SkillsCycle />
            <div>
              <span className="text-xs">All those icons are from ️</span>
              <a
                target="_blank"
                href="https://icons8.com"
                className="link-color text-xs"
              >
                Icons8 ❤
              </a>
            </div>
          </div>

          {/* TODO: Aba de experiência */}
          <Footer textColor="white"/>
        </div>
      </main>
    </>
  );
}
