import { formatUrlDefault } from "@/app/_lib/formatUrl";
import { Button, Icon, Link } from "@chakra-ui/react";
import { IoMdPaper } from "react-icons/io";

export default function About() {
  return (
    <div className="text-white font-inter space-y-4">
      <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
        Sobre Mim
      </h1>
      <div>
        <p className="text-md font-light leading-relaxed text-justify xl:text-lg">
          Olá, eu sou Ivan Freire. Atualmente sou Engenheiro de Software,
          YouTuber, escritor e empreendedor. Tenho trabalhado
          com tecnologia nos últimos 2 anos, ajudando empresas a entregar os
          melhores resultados.
          <br></br>
          <br></br>
          Minha jornada na tecnologia começou quando tive uma grande ideia para
          um site, mas não tinha o conhecimento necessário para começar. Eu não
          queria fazer um site pré-fabricado, então comecei a aprender a
          programar por conta própria. Aprendi o básico de desenvolvimento web,
          mas não foi suficiente, então me inscrevi em um curso de ciência da
          computação para aprender os conceitos fundamentais de computadores e
          projetos de software.
          <br></br>
          <br></br>
          Hoje em dia, trabalho em tempo integral como desenvolvedor backend e
          escrevo artigos neste blog sobre coisas que considero relevantes para
          as pessoas saberem. Coisas como uma resenha de livro, minhas reflexões
          sobre algum assunto ou apenas meu ponto de vista sobre uma nova
          tecnologia em que estou trabalhando.
        </p>
      </div>

      <div className="w-full grid place-items-center pt-5">
        <Link href={"https://taxco-bucket.s3.us-east-2.amazonaws.com/default/Ivan+Miranda+-+PT.pdf"} isExternal>
          <Button
            leftIcon={<Icon as={IoMdPaper} />}
            size={{ base: "md", xl: "lg" }}
            bg={"white"}
            color={"black"}
          >
            Veja meu currículo
          </Button>
        </Link>
      </div>
    </div>
  );
}
