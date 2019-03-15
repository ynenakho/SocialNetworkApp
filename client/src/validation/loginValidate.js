const loginValidate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = "Email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Password field is required";
  }
  return errors;
};

export default loginValidate;
