import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownCode from "../../components/Markdown/MarkdownCode";

export function Post() {
  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="h-screen py-32 px-default-width space-y-6">
        <div className="border-2 border-purple-800 flex-row justify-between">
          <div>
            <MarkdownCode />
          </div>
        </div>
      </main>
    </>
  );
}
