import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import classnames from "classnames";

import validate from "../../validation/registerValidate";

class Register extends Component {
  renderField = ({
    info,
    input,
    placeholder,
    type,
    meta: { touched, error }
  }) => (
    <div className="form-group">
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched,
          "is-valid": !error && touched
        })}
        {...input}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );

  render() {
    const { handleSubmit, submitting, error, onSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="name"
          type="text"
          component={this.renderField}
          placeholder="Name"
        />
        <Field
          name="email"
          type="text"
          component={this.renderField}
          placeholder="Email Address"
          info="This site uses Gravatar so if you want a profile image, use a Gravatar
          email"
        />
        <Field
          name="password"
          type="password"
          component={this.renderField}
          placeholder="Password"
        />
        <Field
          name="password2"
          type="password"
          component={this.renderField}
          placeholder="Confirm Password"
        />
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

export default reduxForm({
  form: "registerForm",
  validate
})(Register);
