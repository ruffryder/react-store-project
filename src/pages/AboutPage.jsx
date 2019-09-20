import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBg from "../images/aboutBcg.jpeg";
export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBg}></Hero>
      <Info />>
    </>
  );
}
