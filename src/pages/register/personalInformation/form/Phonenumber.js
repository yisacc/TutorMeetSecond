import { FormInput } from "../../../../common/FormComponents/FormInput"
const Phonenumber = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='phoneNumber'
          type='text'
          label='Phone Number'
          id='phoneNumber'
          error={errors.phoneNumber}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default Phonenumber
