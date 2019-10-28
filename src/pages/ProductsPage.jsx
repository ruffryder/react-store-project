import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero/Hero";
import products_bg from "../images/products.png";

export default function ProductsPage() {
  return (
    <>
      <Hero minHeight={50} img={products_bg} />
      <Products />
    </>
  );
}
