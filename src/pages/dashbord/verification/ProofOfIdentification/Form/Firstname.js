import { FormInput } from '../../../../../common/FormComponents/FormInput'

const Firstname = (props) => {
  const { register, errors } = props
  return (
    <div class="columnsplititem">
      <FormInput
        register={register}
        name="firstname"
        type="text"
        label="First name on Document"
        id="firstname"
        error={errors.firstname}
        class="forminputtext"
      />
    </div>
  )
}
export default Firstname
