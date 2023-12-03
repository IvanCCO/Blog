import React from 'react';
import logo from './logo.svg';
import { formatDate } from './utils/formatDate';
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header';
import { IconInput } from './components/Input';

function App() {

  return (
    <ChakraProvider>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Not found</h1>} />
    </Routes>
    </ChakraProvider>
  )
}

export default App;
