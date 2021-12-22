import { FormSelect } from '../../../../common/FormComponents/FormSelect'

const DateOfBirthMonth = (props) => {
  const { register, errors } = props

  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const data = [{ title: 'Month', value: '', selected: true }]
  monthNames.forEach((element, index) => {
    data.push({ title: element, value: index.length < 2 ? '0' + index : index })
  })

  return (
    <div class="columnsplititem">
      <FormSelect
        register={register}
        name="dobmonth"
        label="&nbsp;"
        id="dobmonth"
        error={errors.dobmonth}
        class="formdropdownpad"
        options={data}
      />
    </div>
  )
}

export default DateOfBirthMonth
