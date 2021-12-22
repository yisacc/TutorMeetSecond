import { FormInput } from "../../../../common/FormComponents/FormInput"
const Username = props => {
  const { register, errors } = props
  return (
    <div class='columnsplititem'>
      <FormInput
        register={register}
        name='username'
        type='text'
        label='Username'
        id='Username'
        error={errors.username}
        class='forminputtextpad'
      />
    </div>
  )
}
export default Username
