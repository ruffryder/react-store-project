import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6 text-center text-md-left">
                  <p className="text-capitalize">
                    copyright &copy; store{new Date().getFullYear()}. all rights
                    reserved
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(icon => {
                    return (
                      <a key={icon.id} href={icon.url}>
                        {icon.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 3rem;
    color: var(--mainGrey);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
