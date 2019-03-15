import Validator from "validator";

const profileValidate = ({
  handle,
  status,
  skills,
  website,
  youtube,
  twitter,
  facebook,
  linkedin,
  instagram
}) => {
  const errors = {};

  if (!handle) {
    errors.handle = "Profile handle is required";
  } else if (handle.length > 15 || handle.length < 4) {
    errors.handle = "Handle nedds to be between 4 and 15 characters";
  }
  if (!status || status === "0") {
    errors.status = "Status field is required";
  }
  if (!skills) {
    errors.skills = "Skills field is required";
  }
  if (website) {
    if (!Validator.isURL(website)) {
      errors.website = "Not a valid URL";
    }
  }
  if (youtube) {
    if (!Validator.isURL(youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  if (twitter) {
    if (!Validator.isURL(twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }
  if (facebook) {
    if (!Validator.isURL(facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  if (linkedin) {
    if (!Validator.isURL(linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (instagram) {
    if (!Validator.isURL(instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  return errors;
};

export default profileValidate;
