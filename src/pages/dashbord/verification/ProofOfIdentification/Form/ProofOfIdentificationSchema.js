import * as yup from "yup"

export const ProofOfIdentificationSchema = yup
  .object({
    firstname: yup.string().required("Please enter your first name."),
    lastname: yup.string().required("Please enter your last name."),
    idtype: yup.string().required("Please select an identification type"),
    expiryyear: yup.string().required("Please select the expiry date Year."),
    expirymonth: yup.string().required("Please select the expiry date Month."),
    expiryday: yup.string().required("Please select the expiry date Day."),
    file: yup
      .mixed()
      .required("You need to provide a file")
      .test("fileSize", "The file is too large", (value) => {
        return value && value[0].size <= 5000000
      }),
  })
  .required()
