import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, toggleSidebar, toggleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={toggleSidebar} />
              <Link className="logo-container" to="/">
                <img src={logo} alt="store logo" />
              </Link>
              <div className="nav-cart">
                <FaCartPlus
                  className="cart-icon"
                  onClick={toggleCart}
                ></FaCartPlus>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
  }
  .logo-container {
    width: 25%;
  }
  .nav-icon {
    font-size: 3rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--mainBlack);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
  .cart-icon {
    color: var(--primaryColor);
    font-size: 24px;
  }

  @media screen and (min-width: 601px) {
    .logo-container {
      width: 15%;
    }
    .cart-icon {
      font-size: 32px;
    }
  }
`;
