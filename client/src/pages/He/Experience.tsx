import { ExternalLinkIcon } from "@chakra-ui/icons";

// TODO: Adicionar mais coisas aqui e colocar o ano
export default function Experience() {
  const experienceIcon = (
    <div className="px-3 border-l-2 border-white ml-">
      <p className="text-sm">2023 - Now</p>
      <div className="space-y-1">
        <p className="text-xs">Backend Developer Intern</p>

        <p className="text-xs">São Paulo, Brazil</p>
      </div>
    </div>
  );

  const test = (
    <div className="timeline-block timeline-block-right">
      <div className="marker"></div>
      <div className="timeline-content">
        <h3>2023 - Now</h3>
        <span>Backend Developer Intern</span>
        <br />
        <a href="https://www.c6bank.com.br/" className="text-xs underline">
          C6Bank <ExternalLinkIcon />
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
      </div>
    </div>
  );

  return (
    <div className="container">
      {test}
      {test}
    </div>
  );
}
