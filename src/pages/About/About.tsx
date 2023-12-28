import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import ABOUTMD from "../../assets/Markdown/about.md";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import HARDCORE from "../../assets/Markdown/hardcore.md";

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
