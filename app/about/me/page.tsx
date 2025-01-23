"use client";
import { useRouter } from "next/navigation";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Image, useMediaQuery } from "@chakra-ui/react";
import MY_PIC from "../../../public/myself.jpg";
import Header from "../../../components/Header";
import { Reveal } from "../../../components/Reveal";
import About from "./About";
import Experience from "./Experience";
import SocialMediaList from "./SocialMediaList";
import Suggestions from "./Suggestions";
import Skills from "./Skills";
import Footer from "@/components/Footer";
import { Blog, WithContext } from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<Blog> =
{
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ivan Freire",
  url: "https://www.ivanfreire.me",
  inLanguage: 'pt-BR',
  description: "Nesse blog compartilho Minha jornada, vivências, derrotas, vitórias e desafios.",
  about: "My Life",
  author: "Ivan Freire",
  character: {
    "@type": "Person",
    name: "Ivan Freire",
  },
  creator: {
    "@type": "Person",
    name: "Ivan Freire",
  }
};



export default function He() {
  const desktopWorking = (
    <div className="flex justify-between h-4/6">
      <div className="flex flex-col w-1/2 pr-7 space-y-7 xl:justify-evenly">
        <Reveal position={{ y: 120 }} animation={{ delay: 0.8 }}>
          <div>
            <div>
              <p className="text-xl text-white 2xl:text-2xl">
                Olá amigos, eu sou
              </p>
            </div>
            <p className="text-5xl text-white leading-tight 2xl:text-7xl">
              Ivan Freire, Engenheiro de Software🤙
            </p>
            <Reveal position={{ x: 120 }} animation={{ delay: 1.5 }}>
              <div>
                <p className="text-sm text-low-text-black font-inter xl:text-lg mt-8">
                  Atualmente trabalho no @C6Bank, São Paulo Brasil
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <SocialMediaList />
      </div>
      <Image
        src={MY_PIC.src}
        alt="Ivan Freire com óculos de motocross"
        className="w-1/2 object-cover rounded-tl-full rounded-bl-full rounded-br-md rounded-tr-md max-h-[500px] max-w-[500px]"
        loading="lazy"
      />
    </div>
  );
  const introdution = (
    <div className="flex flex-col justify-center space-y-2">
      <div>
        <Reveal
          position={{ y: -100 }}
          animation={{ delay: 0.3, duration: 1.2 }}
        >
          <div>
            <p className="text-md sm:text-lg lg:text-lg text-white">
              Olá amigos, eu sou
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal position={{ y: 120 }} animation={{ delay: 0.8 }}>
            <p className="text-5xl leading-tight text-white md:text-6xl lg:text-7xl md:pb-3">
              Ivan Freire, Engenheiro de Software🤙
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal position={{ x: 120 }} animation={{ delay: 1.5 }}>
        <div>
          <p className="text-sm md:text-base lg:text-lg text-low-text-black font-inter ">
            Atualmente trabalho no @C6Bank, São Paulo Brasil
          </p>
        </div>
      </Reveal>
    </div>
  );

  const contact = (
    <div className="flex flex-row">
      <Image
        src={MY_PIC.src}
        alt="Descrição da imagem"
        className="w-1/2 object-cover rounded-tl-sm rounded-bl-sm rounded-br-full rounded-tr-full"
      />
      <div className="w-1/2 flex flex-col space-y-3 justify-center place-items-center">
        <SocialMediaList />
      </div>
    </div>
  );

  const skills = (
    <div className="text-white font-inter flex flex-col items-center justify-center space-y-4 h-full ">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-center px-4">
        Skills
      </h1>
      <Skills />
      <div>
        <span className="text-xs lg:text-base">Todos os ícones são do </span>
        <a
          target="_blank"
          href="https://icons8.com"
          className="link-color text-xs lg:text-base"
        >
          Icons8 ❤
        </a>
      </div>
    </div>
  );

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <Script
        id="about-me-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Header />

      <main className="h-full py-24 bg-he-background px-default-width sm:px-28 md:px-44 lg:px-52 xl:px-72 2xl:px-96">
        <div className="font-jomolhari flex flex-col text-font-black-color space-y-16">
          {isLargerThan1024 ? (
            desktopWorking
          ) : (
            <>
              {introdution}
              <Reveal>{contact}</Reveal>
            </>
          )}
          <Reveal position={{ y: 75 }}>
            <About />
          </Reveal>
          <Reveal position={{ x: -75 }}>{skills}</Reveal>
          <div className="text-white font-inter flex flex-col items-start space-y-4 h-full md:items-center">
            <>
              <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-start pr-2 text-white mb-5">
                Experiência <span className="text-lg font-normal">&</span>{" "}
                Projetos
              </h1>
              <Experience />
            </>
          </div>
          <Suggestions />
          <Footer />
        </div>
      </main>
    </>
  );
}
