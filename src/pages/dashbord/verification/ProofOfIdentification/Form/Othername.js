import { FormInput } from '../../../../../common/FormComponents/FormInput'

const Othername = (props) => {
  const { register, errors } = props

  return (
    <div class="columnsplititem">
      <FormInput
        register={register}
        name="othername"
        type="text"
        label="Other names on Document"
        id="othername"
        error={errors.othername}
        class="forminputtext"
      />
    </div>
  )
}
export default Othername
