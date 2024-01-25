import { Link, useLocation } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Hamburguer } from "./Hamburguer";
import { SearchInput } from "./SearchInput";

const beforeStyle = (
  text: string,
  color: string,
  path: string,
): React.ReactElement => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const isHe =
    location.pathname === "/about/me" || location.pathname === "/world";

  return (
    <Link to={path}>
      <span
        className={`${
          !isActive && "header-item"
        } relative  cursor-pointer p-1 ${isHe ? "text-white" : "text-white"} text-xl`}
        id={text}
      >
        <span>{text}</span>
        {isActive && <span className={`circle ${color}`}></span>}
      </span>
    </Link>
  );
};

const headerItens = () => {
  return (
    // TODO: adicionar campo para criar post -> como vai ser um botão que vai aparecer só pra mim acho que não faz tanto mal ficar feio de início.
    <div className="hidden sm:inline-flex w-1/2 justify-between text-lg">
      {beforeStyle("Me", "bg-purple-700", "/about/me")}
      {beforeStyle("Posts", "bg-orange-700", "/")}
      {beforeStyle("World", "bg-cyan-700", "/world")}
      {beforeStyle("Taxco", "bg-green-800", "/about/taxco")}
    </div>
  );
};

export function Header() {
  return (
    <div
      className={`fixed top-0 left-0 right-0 inline-flex justify-between px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 place-items-center z-50 bg-he-background`}
    >
      <Logo />

      {headerItens()}

      <div className="place-items-center hidden">
        <SearchInput />
      </div>

      <div className="sm:hidden">
        <Hamburguer />
      </div>
    </div>
  );
}
