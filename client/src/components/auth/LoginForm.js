import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import classnames from "classnames";

class Login extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched
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
    const { handleSubmit, submitting, error, onSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {error && (
          <div className="alert alert-danger w-100 text-center">{error}</div>
        )}
        <button
          disabled={submitting}
          type="submit"
          className="btn btn-info btn-block mt-4"
        >
          Submit
        </button>
      </form>
    );
  }
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "Email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Password field is required";
  }
  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate
})(Login);
