import { FormSelect } from '../../../../../common/FormComponents/FormSelect'

const ExpiryYear = (props) => {
  const { register, errors } = props
  const year = new Date().getFullYear()

  const yearsPast = Array.from(new Array(5), (val, index) =>
    Math.abs(index - year)
  )
  const yearsFuture = Array.from(new Array(10), (val, index) =>
    Math.abs(index + year)
  )
  const data = [{ title: 'Year', value: '', selected: true }]
  yearsFuture.shift()
  yearsFuture.reverse()
  yearsFuture.forEach((year, index) => {
    data.push({ title: year, value: year })
  })
  yearsPast.forEach((year, index) => {
    data.push({ title: year, value: year })
  })

  return (
    <div class="columnsplititem">
      <FormSelect
        register={register}
        name="expiryyear"
        label="Expiry Date:"
        id="expiryyear"
        error={errors.expiryyear}
        class="formdropdownpad"
        options={data}
      />
    </div>
  )
}

export default ExpiryYear
