import { FormInput } from "../../../../common/FormComponents/FormInput"
const Password = props => {
  const { register, errors } = props
  return (
    <>
      <div class='columnsplititem'>
        <FormInput
          register={register}
          name='password'
          type='password'
          label='Password'
          id='password'
          error={errors.password}
          class='forminputtextpad'
        />
      </div>
    </>
  )
}
export default Password
