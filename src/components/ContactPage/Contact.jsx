import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us"></Title>
          <form
            className="mt-5"
            action="https://formspree.io/christian_dimitrov@abv.bg"
            method="POST"
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="firstName"
                placeHolder="Jack Sparrow"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeHolder="example@example.com"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="subject"
                placeHolder="Subject"
              />
            </div>
            <div className="form">
              <textarea
                name="message"
                id=""
                className="form-control"
                rows="10"
                placeholder="Hello there"
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
