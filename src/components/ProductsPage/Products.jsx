import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title/Title";
import Product from "./Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />
              <ProductFilter />
              <div className="row">
                <h6 className="col-6 mx-auto text-title text-center">
                  total products: {filteredProducts.length}
                </h6>
              </div>
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-center text-title">
                    sorry, no items matched your search
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
