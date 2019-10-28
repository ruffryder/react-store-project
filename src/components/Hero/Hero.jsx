import React from "react";
import styled from "styled-components";
import mainBg from "../../images/home-bg.jpg";

export default function Hero({ img, title, minHeight, bgPosition, children }) {
  return (
    <HeroWrapper minHeight={minHeight} bgPosition={bgPosition} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.minHeight ? props.minHeight + "vh" : "100vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) no-repeat;
  background-position: ${props =>
    props.bgPosition ? props.bgPosition : "center 20%"};
  background-size: cover;
  .title {
    padding-top: 2rem;
    font-size: 5rem !important;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBg
};
