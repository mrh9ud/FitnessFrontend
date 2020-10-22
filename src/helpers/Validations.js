import * as yup from 'yup'
import { EMAIL, FIRST_NAME, LAST_NAME, PASSWORD, USERNAME, DURATION, CONFIRM_PASSWORD } from "./FormKeyType";

const usernameRegisterValidation = {
  [USERNAME]: yup
    .string().required("username required")
    .min(4, "Must have at least 4 characters")
    .max(12, "No more than 12 characters")
    .matches(/^\S[A-Za-z0-9_]+$/g, {message: "No spaces or special characters", excludeEmptyString: true})
}

const passwordRegisterValidation = {
  [PASSWORD]: yup
    .string().required("password required")
    .min(6, "Must be at least 6 characters")
    .max(25, "No more than 25 characters")
    .matches(/^[\S]+$/g, {message: "No spaces permitted", excludeEmptyString: true})
}

const loginUsernameValidation = {
  [USERNAME]: yup
    .string().required("username required")
}

const loginPasswordValidation = {
  [PASSWORD]: yup
    .string().required("password required")
}

const confirmPasswordValidation = {
  [CONFIRM_PASSWORD]: yup
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
    [EMAIL]: yup
    .string().required("email required").email("Not a valid email")
  }
  
  const workoutDurationValidation = {
    [DURATION]: yup
      .string().required("Must include a workout duration")
      .max(3, "Healthy exercise should be constrained to less than 1000 minutes a day")
      .matches(/^\d+$/g, { message: "Numbers only!", excludeEmptyString: true })
  }

const loginFormValidations = yup.object().shape({
  ...loginUsernameValidation,
  ...loginPasswordValidation
})

const registrationFormValidations = yup.object().shape({
  ...usernameRegisterValidation,
  ...passwordRegisterValidation,
  ...confirmPasswordValidation,
  ...firstNameValidation,
  ...lastNameValidation,
  ...emailValidation
})

const workoutQuestionsValidations = yup.object().shape({
  ...workoutDurationValidation
})

const editFormValidations = (key) => {
  switch (key) {
    case USERNAME:
      return yup.object().shape({
        ...usernameRegisterValidation
      })
    case PASSWORD:
      return yup.object().shape({
        ...passwordRegisterValidation
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


export { registrationFormValidations, editFormValidations, loginFormValidations, workoutQuestionsValidations }