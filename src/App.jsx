import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdCheckOut from "./pages/ProdCheckOut";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prod/:id" element={<ProdCheckOut />} />
      </Routes>
      
    </>
  );
}

export default App;
