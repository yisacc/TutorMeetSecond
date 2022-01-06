import { FormTextarea } from "../../../../../common/FormComponents/FormTextarea"

const SubjectAreasCovered = props => {
  const { register, errors } = props

  return (
      <div id='specialistsblock' className='thesubtag' name='specialistsblock'>
      <label for='specialists'>Subject Areas Covered{" "}
          <span style={{ "font-size": "80%", "font-style": "italic" }}>
            (optional){" "}
          </span></label>
      <FormTextarea
        {...register("specialists")}
        class='forminputtextpad'
        rows='30'
        cols='2'
        style={{ height: "100px" }}
        register={register}
        name='specialists'
        type='text'
        id='specialists'
        error={errors.specialists}
      />
      </div>
  )
}
export default SubjectAreasCovered
