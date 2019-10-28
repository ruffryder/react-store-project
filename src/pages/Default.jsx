import React from "react";
import Hero from "../components/Hero/Hero";
import default_bg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <Hero minHeight={77} img={default_bg} title="404">
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          return home
        </Link>
      </Hero>
    </>
  );
}
