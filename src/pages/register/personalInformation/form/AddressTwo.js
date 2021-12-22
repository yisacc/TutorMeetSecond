import { FormInput } from "../../../../common/FormComponents/FormInput"
const AddressTwo = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='address2'
          type='text'
          label='Address 2*'
          id='address2'
          error={errors.address2}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default AddressTwo
