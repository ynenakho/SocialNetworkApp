import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";
import { Field, reduxForm } from "redux-form";
import validate from "../../validation/postValidate";

class PostForm extends Component {
  onSubmit = ({ text }) => {
    const { user } = this.props.auth;
    this.props.dispatch(this.props.reset("postForm"));
    const newPost = {
      text: text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
  };

  render() {
    const { handleSubmit, submitting, error } = this.props;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <Field
                  placeholder="Create a Post"
                  name="text"
                  component={TextAreaFieldGroup}
                />
              </div>
              {error && (
                <div className="alert alert-danger w-100 text-center">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-dark"
                disabled={submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = {
  addPost
};

// const afterSubmit = (result, dispatch) => {
//   dispatch(reset("postForm"));
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "postForm",
    validate
    // onSubmitSuccess: afterSubmit
  })(PostForm)
);
