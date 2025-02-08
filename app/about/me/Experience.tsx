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
  
  const kindleTwoNotion: LinkProps = {
    name: "KindleTwoNotion",
    link: "https://kindletwonotion.com",
  };

  const experiences = [
    ExpecienceBlock(
      "2024 - Current",
      "kindleTwoNotion - Founder",
      "Solução para leitores de Kindle e usuários do Notion, onde é possível exportar seus destaques do Kindle para o Notion de maneira simples e rápida. Mantendo seus destaques, notas, em um lugar só. Ajudando leitores, estudantes, empresários, a conseguir revisitar os aprendizados de um livro na mesma plataforma onde gerenciam seus negócios.",
      kindleTwoNotion
    ),
    ExpecienceBlock(
      "2024",
      "South's Eagles - Faculdade",
      "Desenvolvi uma solução inovadora de IoT voltada para medir os níveis de estresse em indivíduos, utilizando uma variedade de sensores e desenvolvendo um simulador para gerar dados. Orquestrei o processo de Extração, Transformação e Carregamento (ETL) usando tecnologias de ponta, incluindo Spark e AWS. Em particular, liderou a integração de um sensor de EEG para capturar ondas cerebrais, possibilitando a avaliação em tempo real dos níveis de estresse e estados de relaxamento dos usuários.",
      southsEagle
    ),
    ExpecienceBlock(
      "2023 - Current",
      "Desenvolvedor Backend",
      "Responsável pelo desenvolvimento backend de projetos de gerenciamento de limites, locais seguros e integrações externas. Desenvolvi a lógica de negócios para lidar com transações monetárias brasileiras, como TED, TEF e PIX. Além disso, trabalhei na gestão de clusters Kubernetes, realizando migrações, supervisionando pods, removendo recursos desnecessários, contribuindo para a redução de custos na nuvem e aplicando conceitos de FinOps. Desenvolvi soluções para melhorar a observabilidade e monitoramento, construindo dashboards com as métricas necessárias. Veja mais no meu currículo...",
      c6Link
    ),
    ExpecienceBlock(
      "2023",
      "Geekbus - Faculdade",
      "Como parte de um projeto universitário, desenvolvi e implantei uma aplicação web na AWS voltada para conectar motoristas de ônibus com pessoas interessadas em viagens em grupo. A aplicação facilita o encontro perfeito, proporcionando uma experiência de viagem em grupo mais eficiente e agradável."
    ),
    ExpecienceBlock(
      "2022",
      "Point - Faculdade",
      "Projetei e implantei uma aplicação web e Java na AWS e Azure para um sistema de monitoramento de máquinas. Esta aplicação exibe um mapa de calor global que mostra as localizações das máquinas com base no endereço IP, oferecendo capacidades abrangentes de monitoramento.",
      pointLink
    ),
    ExpecienceBlock(
      "2022",
      "Start Travel - Faculdade",
      "Uma plataforma de mídia social voltada para trabalhadores remotos e nômades digitais, combinando trabalho e viagens de forma integrada.",
      startTravel
    ),
  ];

  return (
    <div className="container">
      {experiences.map((value, index) => (
        <Reveal
          key={index}
          position={{ y: 75 }}
          animation={{ delay: 1.0 + index / 8 }}
        >
          {value}
        </Reveal>
      ))}
    </div>
  );
}
