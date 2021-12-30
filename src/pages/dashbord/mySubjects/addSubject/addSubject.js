import AddSubjectView from "./addSubjectView";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {AddSubjectSchema} from './addSubjectSchema'
const AddSubject = () => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        // eslint-disable-next-line no-undef
        resolver: yupResolver(AddSubjectSchema),
    })
  return (
    <>
      <AddSubjectView register={register}
                      errors={errors}
                      handleSubmit={handleSubmit}

                      setValue={setValue} />
    </>
  );
};

export default AddSubject;
