import React, {useState} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import ProdCheckOut from "./pages/ProdCheckOut";
import { Navbar, ShoppingCart } from "./components";



import CartProvider from "./service/CartContext";

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const openShoppingCart = () => {
    setShowShoppingCart(true);
  }
  const closeShoppingCart = () => {
    setShowShoppingCart(false);
  }

  return (
    <CartProvider>
      <div className="relative">
        <> 
          {
            showShoppingCart && <ShoppingCart closeShoppingCart = {closeShoppingCart}/>
          }
          <Navbar openShoppingCart = {openShoppingCart}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prod/:id" element={<ProdCheckOut openShoppingCart = {openShoppingCart}/>} />
          </Routes>
        </>
      </div>
    </CartProvider>
  );
}

export default App;
