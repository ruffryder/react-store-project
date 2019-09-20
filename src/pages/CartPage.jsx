import React from "react";
import Hero from "../components/Hero";
import cartBg from "../images/storeBcg.jpeg";
import CartSection from "../components/CartPage";

export default function CartPage(props) {
  return (
    <>
      <Hero img={cartBg} />
      <CartSection history={props.history} />
    </>
  );
}
