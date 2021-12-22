import { FormSelect } from "../../../../../common/FormComponents/FormSelect"
import { useSelector } from "react-redux"

const IdentificationType = (props) => {
  const { register, errors } = props
  const counter = useSelector((data) => data)
  const IDTypes = counter.IDTypes[counter.IDTypes.length - 1]
  const data = IDTypes?.map((IDType) => ({
    title: IDType.value,
    value: IDType.id,
  }))
  data?.unshift({ title: "Select", value: "", selected: true })

  return (
    <div class='columnsplititem'>
      <FormSelect
        register={register}
        name='idtype'
        label='Identification Type'
        id='idtype'
        error={errors.idtype}
        class='forminputtext'
        options={data}
      />
    </div>
  )
}
export default IdentificationType
