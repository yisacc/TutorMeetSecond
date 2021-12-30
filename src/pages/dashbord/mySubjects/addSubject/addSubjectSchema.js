import * as yup from "yup"

export const AddSubjectSchema = yup
    .object({
        firstname: yup.string().required("Please enter your first name."),
        file: yup
            .mixed()
            .required("You need to provide a file")
            .test("fileSize", "The file is too large", (value) => {
                return value && value[0].size <= 5000000
            }),
    })
    .required()
