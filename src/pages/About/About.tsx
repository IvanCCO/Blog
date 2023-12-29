import ABOUTMD from "../../assets/Markdown/about.md";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { PageType } from "../../data/constants";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";

export default function About() {
  const file = importLocalMarkdownFile(ABOUTMD);

  return (
    <>
      <Header type={PageType.US} />
      <main className="main">
        <MarkdownFormatter text={String(file)} />
      </main>
    </>
  );
}
