import { FormInput } from '../../../../../common/FormComponents/FormInput'

const Lastname = (props) => {
  const { register, errors } = props

  return (
    <div class="columnsplititem">
      <FormInput
        register={register}
        name="lastname"
        type="text"
        label="Last name on Document"
        id="lastname"
        error={errors.lastname}
        class="forminputtext"
      />
    </div>
  )
}
export default Lastname
