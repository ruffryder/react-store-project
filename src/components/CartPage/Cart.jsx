import React from "react";
import Title from "../Title/Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";

export default function Cart({ history }) {
  return (
    <section className="py-5">
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length === 0) {
            return (
              <>
                <h1 className="text-title text-center my-4">
                  Your cart is empty
                </h1>
                <Link
                  to="/products"
                  className="d-block mx-auto w-25 text-center main-link"
                >
                  Back to Shopping
                </Link>
              </>
            );
          }
          return (
            <>
              <div className="container">
                <Title title="your cart items" center />
              </div>
              <CartColumns />
              <CartList />
              <CartTotals history={history} />
            </>
          );
        }}
      </ProductConsumer>
    </section>
  );
}
