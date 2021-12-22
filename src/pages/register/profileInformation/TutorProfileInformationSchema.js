import * as yup from "yup"

export const TutorProfileInformationSchema = yup
  .object({
    distance: yup.string().required("Distance is Required!"),
    experience: yup.string().required("Experience is Required!"),
  })
  .required()
