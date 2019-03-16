import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  input,
  info,
  meta: { touched, error }
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched
        })}
        {...input}
        placeholder={placeholder}
        autoComplete="off"
        name={name}
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  info: PropTypes.string
};

export default TextAreaFieldGroup;
