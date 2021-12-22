import * as yup from "yup"

export const PersonalInfoSchema = yup
  .object({
    firstname: yup.string().required("First Name is Required!"),
    lastName: yup.string().required("Last Name is Required!"),
    title: yup.string().required("Title is Required!"),
    gender: yup.string().required("Gender is Required!"),
    address2: yup.string().required("Address Two is Required!"),
    city: yup.string().required("City is Required!"),
    subCity: yup.string().required("SubCity is Required!"),
    phoneNumber: yup
      .string()
      .required("Phone Number is Required!")
      .min(10)
      .max(10),
    dobday: yup.string().required("Day is Required!"),
    dobmonth: yup.string().required("Month is Required!"),
    dobyear: yup.string().required("Year is Required!"),
  })
  .required()
