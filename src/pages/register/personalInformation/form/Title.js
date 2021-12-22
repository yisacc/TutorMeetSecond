import { FormSelect } from "../../../../common/FormComponents/FormSelect"

const Title = props => {
  const { register, errors } = props

  return (
    <div class='columnsplititem'>
      <FormSelect
        register={register}
        name='title'
        label='Title'
        id='title'
        error={errors.title}
        class='formdropdownpad'
        options={[
          { title: "Select", value: "", selected: true },
          { title: `Mr`, value: "Mr" },
          { title: `Miss`, value: "Miss" },
          { title: `Mrs`, value: "Mrs" },
          { title: `Ms`, value: "Ms" },
          { title: `Mx`, value: "Mx" },
          { title: `Dr`, value: "Dr" },
          { title: `Prof`, value: "Prof" },
        ]}
      />
    </div>
  )
}
export default Title
