import ABOUTMD from "../../assets/Markdown/about.md";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { PageType } from "../../data/constants";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import HARDCORE from "../../assets/Markdown/hardcore.md"

export default function About() {
  const file = importLocalMarkdownFile(HARDCORE);

  return (
    <>
      <Header type={PageType.US} />
      <main className="main sm:px-28 md:px-44 lg:px-96">
        <MarkdownFormatter text={String(file)} />
      </main>
    </>
  );
}
