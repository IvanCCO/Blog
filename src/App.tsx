import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Post } from "../src/pages/Post/Post";
import "./App.css";
import About from "./pages/About/About";
import { AboutHe } from "./pages/He/AboutHe";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about">
          <Route path="he" element={<AboutHe />} />
          <Route path="taxco" element={<About />} />
        </Route>
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
