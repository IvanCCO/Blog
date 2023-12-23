import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownHtml from "../../utils/Markdown/MarkdownHtml";

export function Post() {
  const markdown = `# Introdução ao Kubernetes: Orquestração de Contêineres

O Kubernetes, frequentemente abreviado como K8s, é uma poderosa plataforma de orquestração de contêineres de código aberto que automatiza a implantação, o dimensionamento e a gestão de aplicativos em contêineres. Desenvolvido pelo Google e agora mantido pela Cloud Native Computing Foundation (CNCF), o Kubernetes se tornou uma peça fundamental na construção e operação de aplicações distribuídas em escala.

## O que são Contêineres?

Antes de mergulharmos no Kubernetes, vamos entender o que são contêineres. Os contêineres são unidades leves e portáteis que encapsulam o código, suas dependências e configurações. Eles garantem que uma aplicação seja executada de maneira consistente em diferentes ambientes.

## Por que Kubernetes?

À medida que as aplicações crescem em complexidade, gerenciar contêineres manualmente se torna desafiador. Aqui é onde o Kubernetes brilha, oferecendo:

- **Orquestração Avançada:** O Kubernetes gerencia automaticamente a distribuição e escalabilidade de contêineres, garantindo que as aplicações estejam sempre disponíveis e funcionando corretamente.

- **Escalabilidade Horizontal:** O Kubernetes facilita a escala de aplicações horizontalmente, adicionando ou removendo contêineres conforme a demanda, mantendo assim o desempenho e a confiabilidade.

- **Auto-Recuperação:** Em caso de falhas, o Kubernetes detecta e substitui automaticamente os contêineres com problemas, garantindo uma alta disponibilidade contínua.

## Conceitos Chave do Kubernetes

### Pods

Os Pods são a menor unidade no Kubernetes e podem conter um ou mais contêineres. Eles compartilham um namespace de rede e armazenamento, facilitando a comunicação e a colaboração entre contêineres.

### Services

Os Serviços Kubernetes são usados para expor aplicações e seus componentes aos outros Pods. Eles fornecem uma abstração consistente para a comunicação entre Pods, independentemente de sua localização na rede.

### Deployment

Os Deployments gerenciam a implantação de aplicações e permitem atualizações sem tempo de inatividade. Eles garantem que o número desejado de réplicas esteja sempre em execução.

## Exemplo Prático

Vamos criar um Deployment simples para ilustrar o poder do Kubernetes:

~~~yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minha-aplicacao
spec:
  replicas: 3
  selector:
    matchLabels:
      app: minha-aplicacao
  template:
    metadata:
      labels:
        app: minha-aplicacao
    spec:
      containers:
      - name: meu-contenedor
        image: minha-imagem:latest
~~~
`;

  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="h-screen py-32 px-default-width space-y-6">
        <div className="border-2 border-purple-800 flex-row justify-between">
          <div>
            <MarkdownHtml text={markdown} />
          </div>
        </div>
      </main>
    </>
  );
}
