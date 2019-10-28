import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero/Hero";
import store from "../images/store.jpg";
export default function AboutPage() {
  return (
    <>
      <Hero minHeight={50} img={store}></Hero>
      <Info />
    </>
  );
}
