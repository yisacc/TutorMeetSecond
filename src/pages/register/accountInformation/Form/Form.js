import AccountType from "./AccountType"
import Username from "./Username"
import Email from "./Email"
import Password from "./Password"
import ConfirmPassword from "./ConfirmPassword"
import TermsOfService from "./TermsOfService"

const Form = props => {
  const { register, errors, handleSubmit, onSubmit } = props
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id='signupform'>
        <div class='columnsplit'>
          <AccountType register={register} errors={errors} />
          <div class='columnsplititem'></div>
        </div>
        <div class='columnsplit'>
          <Username register={register} errors={errors} />
          <Email register={register} errors={errors} />
        </div>
        <div class='columnsplit'>
          <Password register={register} errors={errors} />
          <ConfirmPassword register={register} errors={errors} />
        </div>

        <TermsOfService register={register} errors={errors} />
      </form>
    </>
  )
}
export default Form
