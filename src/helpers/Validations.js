import * as yup from 'yup'
import {EMAIL, FIRST_NAME, LAST_NAME, PASSWORD, USERNAME} from "./FormKeyType";

const usernameValidation = {
  [USERNAME]: yup
    .string().required("username required")
    .min(4, "Must have at least 4 characters")
    .max(12, "No more than 12 characters")
    .matches(/^\S[A-Za-z0-9_]+$/g, {message: "No spaces or special characters", excludeEmptyString: true})
}

const passwordValidation = {
  [PASSWORD]: yup
    .string().required("password required")
    .min(6, "Must be at least 6 characters")
    .max(25, "No more than 25 characters")
    .matches(/^[\S]+$/g, {message: "No spaces permitted", excludeEmptyString: true})
}


const confirmPasswordValidation = {
  confirm_password: yup
    .string().required("must confirm matching passwords")
    .label("Confirm Password")
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value;
    })
}

const firstNameValidation = {
  [FIRST_NAME]: yup
    .string().required("first name required")
    .min(2, "Must have at least 2 characters")
    .max(15, "No more than 15 characters")
    .matches(/^([A-Za-z](\s?|-|'))+[A-Za-z]$/g, {
      message: "No special characters or extra spaces",
      excludeEmptyString: true
    })
}

const lastNameValidation = {
  [LAST_NAME]: yup
    .string().required("last name required")
    .min(2, "Must have at least 2 characters")
    .max(20, "No more than 20 characters")
    .matches(/^([A-Za-z](\s?|-|'))+[A-Za-z]$/g, {message: "No special characters or spaces"})
}

const emailValidation = {
  email: yup
    .string().required("email required").email("Not a valid email")
}
const accountInfoValidations = yup.object().shape({
  ...usernameValidation,
  ...passwordValidation,
  ...confirmPasswordValidation,
  ...firstNameValidation,
  ...lastNameValidation,
  ...emailValidation
})

const editFormValidation = (key) => {
  switch (key) {
    case USERNAME:
      return yup.object().shape({
        ...usernameValidation
      })
    case PASSWORD:
      return yup.object().shape({
        ...passwordValidation
      })
    case FIRST_NAME:
      return yup.object().shape({
        ...firstNameValidation
      })
    case LAST_NAME:
      return yup.object().shape({
        ...lastNameValidation
      })
    case EMAIL:
      return yup.object().shape({
        ...emailValidation
      })
  }
}

export { accountInfoValidations, editFormValidation }