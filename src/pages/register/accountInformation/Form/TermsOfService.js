import { Link } from "react-router-dom"

const TermsOfService = props => {
  const { register, errors } = props
  return (
    <>
      <label class='checkcontainer'>
        I agree to Tutor Ethiopia's
        <Link to='/tos-content' rel='nofollow' target='_blank'>
          Terms &amp; Conditions
        </Link>
        and
        <Link to='/privacy-policy' rel='nofollow' target='_blank'>
          Privacy Policy
        </Link>
        <input
          type='checkbox'
          class='forminputtextpad'
          {...register("termsOfService")}
        />
        <span class='checkmark'></span>
      </label>

      <div className='text-monospace'>
        <p className='check-agree' style={{ color: "red" }}>
          {errors.termsOfService?.message}
        </p>
      </div>
      <div class='cardbtncontainer col-lg-2'>
        <input type='submit' value='Continue' class='btn btnsuccess' />
      </div>
    </>
  )
}
export default TermsOfService
