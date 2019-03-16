import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,
  input,
  info,
  meta: { touched, error },
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error && touched
        })}
        {...input}
        autoComplete="off"
        name={name}
      >
        {selectOptions}
      </select>
      {touched && error && <span className="invalid-feedback">{error}</span>}
      {info && <small className="form-text text-muted">{info}</small>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
