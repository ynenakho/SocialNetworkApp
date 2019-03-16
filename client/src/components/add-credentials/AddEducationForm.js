import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import validate from "../../validation/educationValidate";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddEducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: false,
      disabled: false
    };
  }

  onCheck = () => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const { handleSubmit, submitting, error, onSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="school"
          component={TextFieldGroup}
          placeholder="* School"
        />
        <Field
          name="degree"
          component={TextFieldGroup}
          placeholder="* Degree or Certification"
        />
        <Field
          name="fieldofstudy"
          component={TextFieldGroup}
          placeholder="* Field of Study"
        />
        <h6>From Date</h6>
        <Field type="date" name="from" component={TextFieldGroup} />
        <h6>To Date</h6>
        <Field
          type="date"
          name="to"
          component={TextFieldGroup}
          disabled={this.state.disabled ? "disabled" : ""}
        />
        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            name="current"
            value={this.state.current}
            checked={this.state.current}
            onChange={this.onCheck}
            id="current"
          />
          <label htmlFor="current" className="form-check label">
            Current School
          </label>
        </div>
        <Field
          placeholder="Program Description"
          name="description"
          component={TextAreaFieldGroup}
          info="Tell us about the program that you are in"
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
  form: "addEducationForm",
  validate
})(AddEducationForm);
