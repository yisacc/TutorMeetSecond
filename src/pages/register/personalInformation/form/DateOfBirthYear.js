import { FormSelect } from '../../../../common/FormComponents/FormSelect'

const DateOfBirthYear = (props) => {
  const { register, errors } = props
  const year = new Date().getFullYear()

  const years = Array.from(new Array(100), (val, index) =>
    Math.abs(index - year)
  )
  const data = [{ title: 'Year', value: '', selected: true }]
  years.forEach((year, index) => {
    data.push({ title: year, value: year })
  })

  return (
    <div class="columnsplititem">
      <FormSelect
        register={register}
        name="dobyear"
        label="Date of birth"
        id="dobyear"
        error={errors.dobyear}
        class="formdropdownpad"
        options={data}
      />
    </div>
  )
}

export default DateOfBirthYear
