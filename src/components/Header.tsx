import { Link, useLocation } from "react-router-dom";
import { Logo } from "../components/Logo";
import { PageType } from "../data/constants";
import { Hamburguer } from "./Hamburguer";
import { SearchInput } from "./SearchInput";
{
  /* TODO: Colocar aqui essa página para levar para sobre o projeto 
    TODO: Mostrar apenas o command para quando a tela for grande
*/
}
type HeaderStyle = {
  mainBackground: string;
  logoColor: string;
  hamburgerTheme: string;
  menuListBackground: string;
  menuListBorder: string;
  inputBackground: string;
  inputForeground: string;
  colorText: string;
};

/* Choose header style like input color hamburguer and etc depending on page */
const chooseHeaderStyle = (type: PageType): HeaderStyle => {
  switch (type) {
    case "HE":
      return {
        mainBackground: "bg-he-background",
        logoColor: "white",
        hamburgerTheme: "whiteAlpha",
        menuListBackground: "#3A3A3E",
        inputBackground: "#5B5B5B",
        menuListBorder: "white",
        inputForeground: "white",
        colorText: "white",
      };
    case "SHE":
      return {
        mainBackground: "she-background",
        logoColor: "she-logo-color",
        hamburgerTheme: "gray",
        menuListBackground: "white",
        inputBackground: "black",
        menuListBorder: "black",
        inputForeground: "black",
        colorText: "white",
      };
    case "US":
      return {
        mainBackground: "bg-white",
        logoColor: "black",
        hamburgerTheme: "blackAlpha",
        menuListBackground: "#F1F1F1",
        inputBackground: "#F1F1F1",
        menuListBorder: "black",
        inputForeground: "black",
        colorText: "low-text-black",
      };
    case "DEFAULT":
      return {
        mainBackground: "bg-white",
        logoColor: "black",
        hamburgerTheme: "blackAlpha",
        menuListBackground: "#F1F1F1",
        inputBackground: "#F1F1F1",
        menuListBorder: "black",
        inputForeground: "black",
        colorText: "low-text-black",
      };
    default:
      throw new Error(`Invalid page type: ${type}`);
  }
};

// TODO: Renomear isso kk
const gracinha = (
  text: string,
  color: string,
  path: string,
): React.ReactElement => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const isHe = location.pathname === "/about/he";

  return (
    <Link to={path}>
      <span
        className={`${
          !isActive && "header-item"
        } relative  cursor-pointer p-1 ${isHe ? "text-white" : "text-black"} `}
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
    <div className="hidden md:inline-flex w-1/2 justify-between text-lg">
      {gracinha("He", "bg-purple-700", "/about/he")}
      {gracinha("She", "bg-amber-300", "/about/she")}
      {gracinha("Us", "bg-orange-300", "/")}
      {gracinha("About", "bg-green-200", "/about/taxco")}
    </div>
  );
};

/* Colorscheme on dark mode is whiteAlpha and on white mode is default" */
export function Header({ type }: { type: PageType }) {
  const headerStyle = chooseHeaderStyle(type);

  return (
    <div
      className={`fixed top-0 left-0 right-0 inline-flex justify-between px-default-width place-items-center z-50 ${headerStyle.mainBackground}`}
    >
      <Logo color={headerStyle.logoColor} />

      {headerItens()}

      <div className="flex place-items-center">
        <SearchInput
          backgroundColor={headerStyle.inputBackground}
          foregroundColor={headerStyle.inputForeground}
        />
      </div>

      <div className="md:hidden">
        <Hamburguer
          theme={headerStyle.hamburgerTheme}
          menuListBackground={headerStyle.menuListBackground}
          textColor={headerStyle.colorText}
        />
      </div>
    </div>
  );
}
