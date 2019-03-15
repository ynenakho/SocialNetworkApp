import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  input,
  icon,
  type,
  meta: { touched, error }
}) => {
  return (
    <div className="form-group mb-3">
      <div className="input-group-prepend">
        <div className="span input-group-text">
          <i className={icon} />
        </div>
        <input
          className={classnames("form-control form-control-lg", {
            "is-invalid": error && touched
          })}
          {...input}
          placeholder={placeholder}
          autoComplete="off"
          name={name}
          type={type}
        />
      </div>
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
