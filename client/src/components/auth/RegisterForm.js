import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import classnames from "classnames";

class Register extends Component {
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
    const { handleSubmit, submitting, error, onSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
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
