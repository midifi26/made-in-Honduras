import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/Main/ProductList/ProductList'
import ProductDetails from './components/Main/ProductDetails/ProductDetails';
import './App.css'

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:name" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
