import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { isTemplateElement } from "@babel/types";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
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
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
