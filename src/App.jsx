import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdCheckOut from "./pages/ProdCheckOut";
import { Navbar } from "./components";

import CartProvider from "./service/CartContext"

function App() {
  return (
    <CartProvider>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prod/:id" element={<ProdCheckOut />} />
      </Routes>
    </>
    </CartProvider> 
  );
}

export default App;
