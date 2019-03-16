import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  input,
  type,
  info,
  disabled,
  meta: { touched, error }
}) => {
  if (disabled) {
    input.value = "";
  }
  return (
    <div className="form-group">
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched
        })}
        {...input}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        disabled={disabled}
        name={name}
      />
      {touched && error && <span className="invalid-feedback">{error}</span>}
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
