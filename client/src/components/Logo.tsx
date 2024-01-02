import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Logo({ color }: { color: string }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("T.");

  // Pegar se a página que está tem /post
  const location = useLocation();

  const isPostPage: boolean = location.pathname.includes("/post");

  // TODO: Ver se a página antiga é do taxco se nao for voltar pra home
  const navigatePage = () => {
    if (isPostPage) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className={`flex-none font-itim text-5xl py-3 text-${color} cursor-pointer w-fit`}
      onClick={() => navigatePage()}
    >
      <span className="hidden md:inline">Taxco.</span>
      <span className="md:hidden">{isPostPage ? "<" : "Tx."}</span>
    </div>
  );
}
