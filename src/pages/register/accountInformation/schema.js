import * as yup from "yup"

export const schema = yup
  .object({
    accountType: yup.string().required("Account Type is Required!"),
    username: yup.string().required("Username is Required!").min(5).max(15),
    email: yup.string().required("Email is Required!").email(),
    password: yup.string().required("Password is Required!").min(5),
    confirmPassword: yup
      .string()
      .required("Confirm Password is Required!")
      .oneOf([yup.ref("password"), null]),
    termsOfService: yup
      .boolean()
      .oneOf(
        [true],
        "You must agree to our Terms of Service and Privacy Policy"
      )
      .required(),
  })
  .required()
