import { FormSelect } from "../../../../common/FormComponents/FormSelect"

const Gender = props => {
  const { register, errors } = props

  return (
    <div class='columnsplititem'>
      <FormSelect
        register={register}
        name='gender'
        label='Gender'
        id='gender'
        error={errors.gender}
        class='formdropdownpad'
        options={[
          { title: "Select", value: "", selected: true },
          { title: `Female`, value: "female" },
          { title: `Male`, value: "male" },
        ]}
      />
    </div>
  )
}
export default Gender
