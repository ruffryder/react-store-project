import React from "react";
import { ProductConsumer } from "../../context";
import PaypalBtn from "./PaypalBtn";
import styled from "styled-components";

export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubtotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <CartTotalsContainer>
                  <button
                    className="clear-cart btn btn-outline-danger text-capitalize"
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
                </CartTotalsContainer>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

const CartTotalsContainer = styled.div`
  .clear-cart {
    font-size: 1.6rem;
    padding: 0.4rem 1rem;
    margin-bottom: 1.5rem;
  }
`;
