import React from 'react'
import Navbar from './components/header/Navbar'
import Home from './components/home/Home'
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailView from './components/Detail/DetailView'
import Cart from './components/cart/Cart'



export default function App() {
  return (
    <DataProvider>
      <Router>
     
          <Navbar />


          <Box >
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailView/>} />
              <Route path="/cart" element={<Cart/>} />
           
              
            </Routes>
          </Box>
         





    
      </Router>
    </DataProvider>
  )
}
