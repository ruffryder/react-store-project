import React from "react";
import Hero from "../components/Hero/Hero";
import contact_bg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

export default function ContactPage() {
  return (
    <>
      <Hero minHeight={50} img={contact_bg}></Hero>
      <Contact />
    </>
  );
}
