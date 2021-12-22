import { FormSelect } from '../../../../../common/FormComponents/FormSelect'
const ExpiryDate = (props) => {
  const { register, errors } = props
  const data = [{ title: 'Day', value: '', selected: true }]
  for (let i = 1; i <= 31; i++) {
    let dateFormatted = i.length < 2 ? '0' + i : i
    data.push({ title: dateFormatted, value: dateFormatted })
  }
  return (
    <div class="columnsplititem">
      <FormSelect
        register={register}
        name="expiryday"
        label="&nbsp;"
        id="expiryday"
        error={errors.expiryday}
        class="forminputtext"
        options={data}
      />
    </div>
  )
}

export default ExpiryDate
