import { itim } from "@/app/fonts";
import { useRouter } from "next/navigation";

export function Logo() {


  const router = useRouter();

  return (
    <div
      className={`flex-none text-5xl py-3 text-white cursor-pointer w-fit ${itim.className}`}
      onClick={() => router.push("/")}
    >
      <span className="hidden md:inline" translate="no">Ivan.F</span>
      {/* <span className="md:hidden">{isPostPage ? "<" : "Tx."}</span> */}
      <span className="md:hidden" translate="no">{"I.F"}</span>
    </div>
  );
}
