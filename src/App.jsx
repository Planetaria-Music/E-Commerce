import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import products from "../products.json";
import Product from "./components/Product";
import Gallery from './components/Gallery';
import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const cartCopy = [...cart];
    cartCopy.push(productToAdd);
    setSelectedProduct(cartCopy);
  }

  return (
    <>
     
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/store" element={<Gallery selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />} />
            <Route path="/store/product-details" element={<Product selectedProduct={selectedProduct} addToCart={addToCart} />} />
            <Route path="*" element={<Navigate to="/store"/>} />
          </Routes>
        </div>
        <Footer />

      
    </>
  )
}

export default App;
