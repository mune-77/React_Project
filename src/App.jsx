
import React from "react";
import {CartProvider} from './context/CartContext';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
function App() {


  return (
    <>
<CartProvider>
  <Router>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  </Router>
</CartProvider>
    </>
  )
}

export default App
