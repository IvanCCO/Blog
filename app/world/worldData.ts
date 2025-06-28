import { StringFieldDef } from "contentlayer/core";

type LocationData = {
  type: string;
  features: {
    type: string;
    geometry: {
      type: string;
      coordinates: number[];
    };
    properties: {
      title: string;
      description: string;
      url?: string | null | undefined;
    };
  }[];
};

export const world: LocationData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-34.913, -7.032],
      },
      properties: {
        title: "João Pessoa, Paraíba",
        description:
          "Tem as praias mais bonitas nos arredores, o calçadão é bem movimentado só é preciso tomar um pouco de cuidado a noite porque não é muito seguro. Mas gostei bastante ❤",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-48.502282, -1.450172],
      },
      properties: {
        title: "Belém, Pará",
        description:
          "Minha experiência não foi das melhores, não gostei muito do porto nem do Veropeso, achei meio sem graça, uma cidade que parece estar meio abandonada.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-49.889772, -6.079684],
      },
      properties: {
        title: "Parauapebas, Pará",
        description:
          "Uma cidade pequena grande, com muita coisa para fazer, vários rolês na natureza, águas termais, tribos indígenas e um pouco de contato com a floresta Amazônica",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-47.926047, -15.811179],
      },
      properties: {
        title: "Brasília, DF",
        description:
          "Uma cidade bem planejada, tem uns rolês legais nos museus, da pra tirar umas fotos maneiras, mas nada demais, talvez ir a trabalho deva ser mais divertido",
        url: "https://www.instagram.com/p/C-VuHONOQRA/?utm_source=ig_embed&amp;utm_campaign=loading",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-46.596501, -23.587851],
      },
      properties: {
        title: "São Paulo, São Paulo",
        description:
          "Minha cidade natal, tem seus problemas mas eu amo muito, eu amo a aleatoriedade dessa cidade",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-81.390563, 28.52471],
      },
      properties: {
        title: "Orlando, Florida",
        description:
          "Fui para Disney quando era mais novo, passeios muito legais, e uma experiência realmente única, mas caro para brasileiros",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-43.182156, -22.968441],
      },
      properties: {
        title: "Rio de Janeiro, Rio de Janeiro",
        description:
          "A cidade maravilhosa é maravilhosa, tem seus problemas de segurança mas é de fato a cidade mais bonita do Brasil",
        url: "https://www.instagram.com/p/DKr4fuAAmp4/?utm_source=ig_embed&amp;utm_campaign=loading"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-48.187471, -7.180745],
      },
      properties: {
        title: "Araguaína, Tocantins",
        description: "Tem nada",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-34.889414, -8.074846],
      },
      properties: {
        title: "Recife, Pernambuco",
        description:
          "Tem seu valor porém fiquei pouco tempo então não sei julgar",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-40.513457, -2.795719],
      },
      properties: {
        title: "Jericoacoara, Ceará",
        description:
          "Muito gostoso, tem passeio na praia, esporte radical, diversos parques e muuuita água, um pouco caro e tem a vibe de pay-to-have-fun mas é muito bom, e a noite na vila é inesquecível",
        url: "https://www.instagram.com/p/C-lAnjKuehF/?theme=dark&utm_source=ig_embed&amp;utm_campaign=loading",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-42.81435, -2.758592],
      },
      properties: {
        title: "Barrerinhas, Maranhão",
        description:
          "O lugar mais bonito que você pode pensar em visitar, é mais bonito pessoalmente, acredite!",
        url: "https://www.instagram.com/p/DF7w4ckp-kp/?utm_source=ig_embed&amp%3Butm_campaign=loading"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-41.557363, -3.471038],
      },
      properties: {
        title: "Cocal, Piauí",
        description: "Tem nada aqui também",
      },
    },
  ],
};
