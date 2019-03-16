const postValidate = ({ text }) => {
  const errors = {};

  if (!text) {
    errors.text = "Text field is required";
  } else if (text.length < 10 || text.length > 300) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  return errors;
};

export default postValidate;
