import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, isCartOpen, closeCart, cartTotal } = value;
        return (
          <CartWrapper show={isCartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img src={`../${item.image}`} width="35" alt="cart item" />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total: ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 100;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style: none;
  }
`;
