import React from 'react';
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { AboutHe } from './pages/He/AboutHe';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header';
import { PageType } from './data/constants';

function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about'>
          <Route path='he' element={<AboutHe />} />
        </Route>
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </ChakraProvider>
  )
}

export default App;
