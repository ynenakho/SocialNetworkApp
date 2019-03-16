const experienceValidate = ({ company, title, from }) => {
  const errors = {};

  if (!company) {
    errors.company = "Company field is required";
  }
  if (!title) {
    errors.title = "Job Title field is required";
  }
  if (!from) {
    errors.from = "From date field is required";
  }
  return errors;
};

export default experienceValidate;
