import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum?"
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum?"
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "Secured payment",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, harum?"
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className="py-md-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  key={item.id}
                  className="service-container col-10 mx-auto col-sm-6 col-md-4"
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.div`
  background: var(--darkGrey);
  color: var(--mainWhite);
  text-align: center;
  .service-container {
    margin-top: 3rem;
    padding: 0 3rem;
  }
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  @media screen and (min-width: 768px) {
    .service-container {
      padding: 0 5rem;
    }
  }
  @media screen and (min-width: 576px) {
    .service-container {
      margin-top: 0;
    }
  }
`;
