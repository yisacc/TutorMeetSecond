import { FormSelect } from "../../../../../common/FormComponents/FormSelect"

import {useSelector} from "react-redux";

const SubjectCategory = (props) => {
  const { register, errors,handleSubjectCategoryChange } = props
    const counter = useSelector((data) => data)
    const subjectCategories = counter.Subjects[counter.Subjects.length - 1]
  const data = subjectCategories?.map((subjectCat) => ({
    title: subjectCat.name,
    value: subjectCat.subjectCategoryId,
  }))
  data?.unshift({ title: "Select", value: "", selected: true })

  return (
    <div class='columnsplititem'>
      <FormSelect
        register={register}
        name='category'
        label='Subject'
        id='category'
        error={errors.category}
        class='forminputtext'
        options={data}
        onChange={handleSubjectCategoryChange}
      />
    </div>
  )
}
export default SubjectCategory
