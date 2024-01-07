import ABOUTMD from "../../assets/Markdown/about.md";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import ProgressBar from "../../components/ProgressBar";
import { PageType } from "../../data/constants";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";

export default function About() {
  const file = importLocalMarkdownFile(ABOUTMD);

  return (
    <>
      <ProgressBar />
      <Header type={PageType.HE} />
      <main className="main sm:px-28 md:px-44 lg:px-72 xl:px-96 2xl:px-96 bg-he-background">
        <MarkdownFormatter text={String(file)} />
      </main>
    </>
  );
}
