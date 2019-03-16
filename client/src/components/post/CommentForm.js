import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment } from "../../actions/postActions";
import { Field, reduxForm } from "redux-form";
import validate from "../../validation/postValidate";

class CommentForm extends Component {
  onSubmit = ({ text }) => {
    const { user } = this.props.auth;
    const { postId } = this.props;
    this.props.dispatch(this.props.reset("commentForm"));
    const newComment = {
      text: text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(newComment, postId);
  };

  render() {
    const { handleSubmit, submitting, error } = this.props;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <Field
                  placeholder="Reply to post"
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

CommentForm.propTypes = {
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = {
  addComment
};

// const afterSubmit = (result, dispatch) => {
//   dispatch(reset("CommentForm"));
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "commentForm",
    validate
    // onSubmitSuccess: afterSubmit
  })(CommentForm)
);
