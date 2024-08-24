import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  // TODO: Ver se a página antiga é do taxco se nao for voltar pra home
  return (
    <div
      className={`flex-none font-itim text-5xl py-3 text-white cursor-pointer w-fit`}
      onClick={() => router.push("/")}
    >
      <span className="hidden md:inline">Taxco.</span>
      {/* <span className="md:hidden">{isPostPage ? "<" : "Tx."}</span> */}
      <span className="md:hidden">{"Tx."}</span>
    </div>
  );
}
