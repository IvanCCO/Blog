import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import { Post } from "../src/pages/Post/Post";
import "./App.css";
import About from "./pages/About/About";
import { He } from "./pages/He/He";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import Places from "./pages/Places/Places";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/me" element={<He />} />
          <Route path="/about/taxco" element={<About />} />
          <Route path="/article/:articleId" element={<Post />} />
          <Route path="/world" element={<Places />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default App;
