import { FormTextarea } from "../../../common/FormComponents/FormTextarea"

const Bio = props => {
  const { register, errors } = props

  return (
    <>
      <label for='bio'>Your Bio</label>
      <FormTextarea
        {...register("bio")}
        class='forminputtextpad'
        rows='30'
        cols='8'
        style={{ height: "140px" }}
        register={register}
        name='bio'
        type='text'
        label='Username'
        id='bio'
        error={errors.bio}
      />
    </>
  )
}
export default Bio
