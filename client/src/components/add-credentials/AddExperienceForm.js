import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import validate from "../../validation/experienceValidate";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class AddExperienceForm extends Component {
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
          name="company"
          component={TextFieldGroup}
          placeholder="* Company"
        />
        <Field
          name="title"
          component={TextFieldGroup}
          placeholder="* Job Title"
        />
        <Field
          name="location"
          component={TextFieldGroup}
          placeholder="Location"
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
            Current Job
          </label>
        </div>
        <Field
          placeholder="Job Description"
          name="description"
          component={TextAreaFieldGroup}
          info="Tell us about the position"
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
  form: "addExperienceForm",
  validate
})(AddExperienceForm);
