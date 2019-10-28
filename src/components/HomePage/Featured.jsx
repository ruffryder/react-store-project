import React from "react";
import Product from "../ProductsPage/Product";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import { ProductConsumer } from "../../context";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center="true"></Title>
        <div className="row mt-5">
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
              SEE ALL PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
