const educationValidate = ({ school, degree, fieldofstudy, from }) => {
  const errors = {};

  if (!school) {
    errors.school = "School field is required";
  }
  if (!degree) {
    errors.degree = "Degree field is required";
  }
  if (!fieldofstudy) {
    errors.fieldofstudy = "Field of study field is required";
  }
  if (!from) {
    errors.from = "From date field is required";
  }
  return errors;
};

export default educationValidate;
