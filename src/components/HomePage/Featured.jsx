import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center="true"></Title>
        <div className="row">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return featuredProducts.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
