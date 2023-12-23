import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { AboutHe } from "./pages/He/AboutHe";
import { Home } from "./pages/Home/Home";
import { Post } from "../src/pages/Post/Post";
import About from "./pages/About/About";

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
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
