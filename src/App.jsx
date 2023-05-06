import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeaderCards from "./components/HeaderCards";
import Food from "./components/Food";
import Category from "./components/Category";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeaderCards />
      <Food />
      <Category />
    </div>
  );
}

