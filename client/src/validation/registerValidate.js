const registerValidate = ({ name, email, password, password2 }) => {
  const errors = {};

  if (!name) {
    errors.name = "Required";
  } else if (name.length > 15 || name.length < 4) {
    errors.name = "Must be between 4 and 15 characters";
  }
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Required";
  } else if (password.length < 6 || password.length > 30) {
    errors.password = "Must be between 6 and 30 characters";
  }
  if (!password2) {
    errors.password2 = "Required";
  } else if (password !== password2) {
    errors.password2 = "Passwords must match";
  }
  return errors;
};

export default registerValidate;
