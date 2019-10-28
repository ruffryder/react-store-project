import React from "react";
import Title from "../Title/Title";
import about from "../../images/about.jpg";
import styled from "styled-components";

export default function Info() {
  return (
    <InfoWrapper>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-4 my-2 img-container">
              <img
                src={about}
                className="img-fluid img-thumbnail"
                alt="about company"
                style={{ background: "var(--darkGrey)" }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about us" center="true" />
              <p className="text-lead text-muted my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                vitae debitis, commodi ducimus exercitationem numquam nostrum
                inventore temporibus officiis! Ea!
              </p>
              <p className="text-lead text-muted my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                vitae debitis, commodi ducimus exercitationem numquam nostrum
                inventore temporibus officiis! Ea!
              </p>
              <button
                className="main-link"
                type="button"
                style={{ marginTop: "2rem" }}
              >
                more info
              </button>
            </div>
          </div>
        </div>
      </section>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  @media screen and (max-width: 767px) {
    .img-container {
      order: 2;
    }
  }
`;
