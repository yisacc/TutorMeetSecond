import { FormInput } from "../../../../common/FormComponents/FormInput"
const Email = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='email'
          type='text'
          label='Email Address'
          id='email'
          error={errors.email}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default Email
