import React from "react";
import Hero from "../components/Hero/Hero";
import cartBg from "../images/cart_bg.png";
import CartSection from "../components/CartPage";

export default function CartPage(props) {
  return (
    <>
      <Hero minHeight={65} bgPosition="center 40%" img={cartBg} />
      <CartSection history={props.history} />
    </>
  );
}
