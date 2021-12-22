import { FormInput } from "../../../../common/FormComponents/FormInput"
const AddressOne = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='address1'
          type='text'
          label='Address 1'
          id='address1'
          error={errors.address1}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default AddressOne
