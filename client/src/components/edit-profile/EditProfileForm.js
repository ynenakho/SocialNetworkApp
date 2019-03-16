import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import validate from "../../validation/profileValidate";
import TextFieldGroup from "../common/TextFieldGroup";
import InputGroup from "../common/InputGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";

class CreateProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false
    };
  }

  componentWillMount() {
    if (this.props.profile) {
      const profile = this.props.profile;

      // Bring skills array back to CSV
      if (profile.skills && typeof profile.skills === "object") {
        profile.skills = profile.skills.join(",");
      }

      if (profile.social) {
        this.props.initialize({
          ...profile,
          twitter: profile.social.twitter,
          facebook: profile.social.facebook,
          youtube: profile.social.youtube,
          linkedin: profile.social.linkedin,
          instagram: profile.social.instagram
        });
      } else {
        this.props.initialize({
          ...profile
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile !== this.props.profile) {
      const profile = nextProps.profile;

      // Bring skills array back to CSV
      if (profile.skills && typeof profile.skills === "object") {
        profile.skills = profile.skills.join(",");
      }

      if (profile.social) {
        this.props.initialize({
          ...profile,
          twitter: profile.social.twitter,
          facebook: profile.social.facebook,
          youtube: profile.social.youtube,
          linkedin: profile.social.linkedin,
          instagram: profile.social.instagram
        });
      } else {
        this.props.initialize({
          ...profile
        });
      }
    }
  }

  render() {
    const { handleSubmit, submitting, error, onSubmit } = this.props;

    const { displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <Field
            name="twitter"
            component={InputGroup}
            placeholder="Twitter Profile URL"
            icon="fab fa-twitter"
          />
          <Field
            name="facebook"
            component={InputGroup}
            placeholder="Facebook Profile URL"
            icon="fab fa-facebook"
          />
          <Field
            name="linkedin"
            component={InputGroup}
            placeholder="Linkedin Profile URL"
            icon="fab fa-linkedin"
          />
          <Field
            name="youtube"
            component={InputGroup}
            placeholder="YouTube Profile URL"
            icon="fab fa-youtube"
          />
          <Field
            name="instagram"
            component={InputGroup}
            placeholder="Instagram Profile URL"
            icon="fab fa-instagram"
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student", value: "Student" },
      { label: "Instructor or Teacher", value: "Developer" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="handle"
          component={TextFieldGroup}
          placeholder="* Profile Handle"
          info="A unique handle for your profile URL"
        />
        <Field
          name="status"
          component={SelectListGroup}
          placeholder="Status"
          options={options}
          info="Give us an idia where are you at in your career"
        />
        <Field
          name="company"
          component={TextFieldGroup}
          placeholder="Company"
          info="Could be your own company or one you work for"
        />
        <Field
          name="website"
          component={TextFieldGroup}
          placeholder="Website"
          info="Could be your own website or a company one"
        />
        <Field
          name="location"
          component={TextFieldGroup}
          placeholder="Location"
          info="City and State (eg. Boston, MA)"
        />
        <Field
          name="skills"
          component={TextFieldGroup}
          placeholder="* Skills"
          info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP"
        />
        <Field
          name="githubusername"
          component={TextFieldGroup}
          placeholder="Github Username"
          info="If you want your latest repos and a Github link, include your username"
        />
        <Field
          name="bio"
          component={TextAreaFieldGroup}
          placeholder="Short Bio"
          info="Tell us a little about yourself"
        />
        <div className="mb-3">
          <button
            type="button"
            onClick={() => {
              this.setState(prevState => ({
                displaySocialInputs: !prevState.displaySocialInputs
              }));
            }}
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span className="text-muted">Optional</span>
        </div>
        {socialInputs}
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
  form: "editProfileForm",
  validate
})(CreateProfileForm);
