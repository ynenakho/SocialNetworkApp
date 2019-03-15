import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import EditProfileForm from "./EditProfileForm";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  state = {};

  onSubmit = async formValues => {
    console.log(formValues);

    await this.props.createProfile(formValues, this.props.history);
  };

  async componentWillMount() {
    await this.props.getCurrentProfile();
  }

  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Your Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <EditProfileForm
                onSubmit={this.onSubmit}
                getCurrentProfile={this.props.getCurrentProfile}
                profile={this.props.profile.profile}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
