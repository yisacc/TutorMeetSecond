import { FormSelect } from "../../../../../common/FormComponents/FormSelect"

const Subject = (props) => {
    const { register, errors,subjects } = props

    const data = subjects?.map((subject) => ({
        title: subject.name,
        value: subject.categoryLevelId,
    }))
    data?.unshift({ title: "Select", value: "", selected: true })

    return (
        <div class='columnsplititem'>
            <FormSelect
                register={register}
                name='subject_list'
                label='&nbsp;'
                id='subject_list'
                error={errors.subject_list}
                class='forminputtext'
                options={data}
            />
        </div>
    )
}
export default Subject
