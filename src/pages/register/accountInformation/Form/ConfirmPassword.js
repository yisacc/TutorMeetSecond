import { FormInput } from "../../../../common/FormComponents/FormInput"
const ConfirmPassword = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          id='confirmPassword'
          error={errors.confirmPassword}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default ConfirmPassword
