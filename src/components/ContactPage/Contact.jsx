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
    },
    isFormValid: false
  };

  validateField = (name, value) => {
    let errors = { ...this.state.errors };
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
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

  validateForm = () => {
    let valid = true;
    let errors = this.validateField("name", this.state.name);
    if (errors.name.length > 0) {
      this.setState({ errors });
      valid = false;
      return valid;
    }
    errors = this.validateField("email", this.state.email);
    if (errors.email.length > 0) {
      this.setState({ errors });
      valid = false;
      return valid;
    }
    errors = this.validateField("subject", this.state.subject);
    if (errors.subject.length > 0) {
      this.setState({ errors });
      valid = false;
      return valid;
    }
    errors = this.validateField("message", this.state.message);
    if (errors.message.length > 0) {
      this.setState({ errors });
      valid = false;
      return valid;
    }
    return valid;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    if (errors) {
      this.setState({
        isFormValid: true,
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  handleCloseAlert = () => {
    this.setState({
      isFormValid: false
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-4">
            <Title title="contact us" center></Title>
            {this.state.isFormValid && (
              <div
                className="alert alert-success alert-dismissible fade show mt-3"
                role="alert"
              >
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={this.handleCloseAlert}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                Your message has been sent successfully.
              </div>
            )}
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
