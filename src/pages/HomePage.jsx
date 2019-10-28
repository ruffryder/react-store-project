import React from "react";
import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import home_bg from "../images/home-bg.jpg";

export default function HomePage() {
  return (
    <>
      <Hero title="Everything about Gaming" img={home_bg}>
        <Link className="main-link" style={{ margin: "2rem" }} to="/products">
          Our Products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
