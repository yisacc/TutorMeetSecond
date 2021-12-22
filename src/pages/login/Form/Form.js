import Username from "../../register/accountInformation/Form/Username"
import Password from "../../register/accountInformation/Form/Password"
import { Link } from "react-router-dom"

const Form = props => {
  const { register, errors, handleSubmit, handleLogin } = props
  return (
    <form id='mainloginform' onSubmit={handleSubmit(handleLogin)}>
      <div class='columnsplit'>
        <div class='columnsplititem'>
          <Username register={register} errors={errors} />
        </div>
      </div>
      <div class='columnsplit'>
        <div class='columnsplititem'>
          <Password register={register} errors={errors} />
        </div>
      </div>
      <input type='submit' class='cardbtn  loginbtn' value='LogIn' />

      <div style={{ float: "right" }}>
        <small>
          <Link to='/forgot-password'>Forgot Your Password </Link>
          <br />
          <Link to='/forgot-username'>Forgot Your Username</Link>
        </small>
      </div>
    </form>
  )
}
export default Form
