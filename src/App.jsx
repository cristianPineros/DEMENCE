import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import ProdCheckOut from "./pages/ProdCheckOut";
import { Navbar, ShoppingCart } from "./components";

import CartProvider from "./service/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="relative overflow-hidden">
        <>  
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prod/:id" element={<ProdCheckOut />} />
          </Routes>
        </>
      </div>
    </CartProvider>
  );
}

export default App;
