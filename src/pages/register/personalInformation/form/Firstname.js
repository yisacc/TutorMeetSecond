import { FormInput } from "../../../../common/FormComponents/FormInput"
const Firstname = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='firstname'
          type='text'
          label='First Name'
          id='firstname'
          error={errors.firstname}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default Firstname
