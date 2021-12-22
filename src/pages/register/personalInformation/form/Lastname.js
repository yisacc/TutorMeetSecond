import { FormInput } from "../../../../common/FormComponents/FormInput"
const Lastname = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='lastName'
          type='text'
          label='Last Name'
          id='lastName'
          error={errors.lastName}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default Lastname
