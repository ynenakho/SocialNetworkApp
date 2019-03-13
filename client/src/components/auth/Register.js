import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";

import classnames from "classnames";
import axios from "axios";

class Register extends Component {
  onSubmit = formValues => {
    return axios
      .post("/api/users/register", formValues)
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err.response.data);
        if (err.response.data.email) {
          throw new SubmissionError({
            email: err.response.data.email,
            _error: "Registration failed!"
          });
        }
      });
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched,
          "is-valid": !error && touched
        })}
        {...input}
        placeholder={label}
        type={type}
        autoComplete="off"
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
    </div>
  );

  render() {
    const { handleSubmit, submitting, error } = this.props;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                  <Field
                    name="name"
                    type="text"
                    component={this.renderField}
                    label="Name"
                  />
                </div>
                <div className="form-group">
                  <Field
                    name="email"
                    type="text"
                    component={this.renderField}
                    label="Email Address"
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <Field
                    name="password"
                    type="password"
                    component={this.renderField}
                    label="Password"
                  />
                </div>
                <div className="form-group">
                  <Field
                    name="password2"
                    type="password"
                    component={this.renderField}
                    label="Confirm Password"
                  />
                </div>
                {error && (
                  <div className="alert alert-danger w-100 text-center">
                    {error}
                  </div>
                )}
                <button
                  disabled={submitting}
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const validate = ({ name, email, password, password2 }) => {
  const errors = {};

  if (!name) {
    errors.name = "Required";
  } else if (name.length > 15 || name.length < 4) {
    errors.name = "Must be between 4 and 15 characters";
  }
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Required";
  } else if (password.length < 6 || password.length > 30) {
    errors.password = "Must be between 6 and 30 characters";
  }
  if (!password2) {
    errors.password2 = "Required";
  } else if (password !== password2) {
    errors.password2 = "Passwords must match";
  }
  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate
})(Register);
