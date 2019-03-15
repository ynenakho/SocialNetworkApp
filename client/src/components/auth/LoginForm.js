import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// import classnames from "classnames";

import validate from "../../validation/loginValidate";
import RenderField from "../common/TextFieldGroup";

class Login extends Component {
  render() {
    const { handleSubmit, submitting, error, onSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          type="text"
          component={RenderField}
          placeholder="Email Address"
        />
        <Field
          name="password"
          type="password"
          component={RenderField}
          placeholder="Password"
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
  form: "loginForm",
  validate
})(Login);
