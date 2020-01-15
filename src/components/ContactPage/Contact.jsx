import React, { Component } from "react";
import Title from "../Title/Title";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  validateField = (name, value) => {
    let errors = { ...this.state.errors };
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    switch (name) {
      case "name":
        if (value === "") {
          errors[name] = "This field cannot be empty";
        } else if (value.length > 50) {
          errors[name] = "Name field cannot be more than 50 symbols";
        } else {
          errors[name] = "";
        }
        break;
      case "email":
        if (value === "") {
          errors[name] = "This field cannot be empty";
        } else if (!validEmailRegex.test(value)) {
          errors[name] = "Email is not valid";
        } else {
          errors[name] = "";
        }
        break;
      case "subject":
        if (value === "") {
          errors[name] = "This field cannot be empty";
        } else if (value.length > 50) {
          errors[name] = "Name field cannot be more than 50 symbols";
        } else {
          errors[name] = "";
        }
        break;
      case "message":
        if (value === "") {
          errors[name] = "This field cannot be empty";
        } else if (value.length > 50) {
          errors[name] = "Name field cannot be more than 50 symbols";
        } else {
          errors[name] = "";
        }
        break;
      default:
        return;
    }
    return errors;
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const errors = this.validateField(name, value);
    this.setState({
      errors,
      [e.target.name]: e.target.value
    });
  };

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      val => val.length > 0 && (valid = false)
    );
    return valid;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-4">
            <Title title="contact us" center></Title>
            <form
              className="mt-5"
              method="POST"
              noValidate
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                {errors.name.length > 0 && (
                  <span className="d-block invalid-feedback">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {errors.email.length > 0 && (
                  <span className="d-block invalid-feedback">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
                {errors.subject.length > 0 && (
                  <span className="d-block invalid-feedback">
                    {errors.subject}
                  </span>
                )}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                ></textarea>
                {errors.message.length > 0 && (
                  <span className="d-block invalid-feedback">
                    {errors.message}
                  </span>
                )}
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  className=" d-block mx-auto main-link"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
