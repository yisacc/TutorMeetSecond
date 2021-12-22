import * as yup from 'yup'

export const UploadImageSchema = yup
  .object({
    file: yup
      .string()
      .required('Please browse and upload an image file of the identification'),
  })
  .required()
