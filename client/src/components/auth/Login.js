import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";

import classnames from "classnames";

class Login extends Component {
  onSubmit = formValues => {
    console.log(formValues);
  };

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched
          // "is-valid": !error && touched
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
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                  <Field
                    name="email"
                    type="text"
                    component={this.renderField}
                    label="Email Address"
                  />
                </div>
                <div className="form-group">
                  <Field
                    name="password"
                    type="password"
                    component={this.renderField}
                    label="Password"
                  />
                </div>
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

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Required";
  }
  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate
})(Login);
