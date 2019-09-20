import React from "react";
import { ProductConsumer } from "../../context";
import PaypalBtn from "./PaypalBtn";

export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubtotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3>Subtotal : ${cartSubtotal}</h3>
                <h3>Tax : ${cartTax}</h3>
                <h3>Total : ${cartTotal}</h3>
                <PaypalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
