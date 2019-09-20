import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <>
      <Hero title="Awesome Products" max="true">
        <Link className="main-link" style={{ margin: "2rem" }} to="/products">
          Our Products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
