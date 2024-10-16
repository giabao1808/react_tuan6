import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const handleResetCart = () => {
    setCartItems([])
  }
  return (
    <BrowserRouter >
      <Header cartItems={cartItems}/>
      <Routes>
          <Route path='/' element={<Products addToCart={handleAddToCart}/>}/>
          <Route path='/product-detail/:id' element={<ProductDetails addToCart={handleAddToCart}/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems}  handleResetCart={handleResetCart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
