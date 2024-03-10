import React, {useState} from "react";
import {Routes,Route} from "react-router-dom";
import {Home,ProdCheckOut, Purchases} from "./pages";
import { Navbar, PaymentCard, ShoppingCart } from "./components";
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
        <> 
          {
            showShoppingCart && <ShoppingCart closeShoppingCart = {closeShoppingCart}/>
          }
          <Navbar openShoppingCart = {openShoppingCart}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/newcollection" element={<Home/>} />
            <Route path="/prod/:id" element={<ProdCheckOut openShoppingCart = {openShoppingCart}/>} />
            <Route path="/purchases" element={<Purchases />} />
          </Routes>
        </>

    </CartProvider>
  );
}

export default App;
