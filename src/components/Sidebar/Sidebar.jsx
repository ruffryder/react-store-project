import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, isSidebarOpen, toggleSidebar } = value;
        return (
          <SideWrapper show={isSidebarOpen}>
            <div className="close_button_container">
              <div className="close_button" onClick={toggleSidebar}>
                <FaArrowAltCircleLeft />
              </div>
            </div>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      className="sidebar-link"
                      onClick={toggleSidebar}
                      to={link.path}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 59px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 100;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style: none;
    padding: 0 !important;
  }

  .close_button_container {
    margin-top: 1rem;
    margin-right: 0.5rem;
    text-align: right;
  }

  .close_button {
    color: var(--primaryColor);
    font-size: 3.5rem;
    cursor: pointer;
    padding: 1rem;
    transition: var(--mainTransition);
  }
  .close_button:hover {
    transform: translateX(-1rem);
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
