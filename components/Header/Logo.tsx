import { itim } from "@/app/fonts";
import { useRouter } from "next/navigation";

export function Logo() {


  const router = useRouter();

  // TODO: Ver se a página antiga é do taxco se nao for voltar pra home
  return (
    <div
      className={`flex-none text-5xl py-3 text-white cursor-pointer w-fit ${itim.className}`}
      onClick={() => router.push("/")}
    >
      <span className="hidden md:inline" translate="no">Taxco.</span>
      {/* <span className="md:hidden">{isPostPage ? "<" : "Tx."}</span> */}
      <span className="md:hidden" translate="no">{"Tx."}</span>
    </div>
  );
}
