import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div
        class='dashbord main-banner wow fadeIn'
        id='top'
        data-wow-duration='1s'
        data-wow-delay='0.5s'
      >
        <div id='maincontentouter'>
          <div class='pt-5' id='maincontent'>
            <p>
              You can retrieve your forgotten password here, simply enter your
              username and press the "<em>Reset Password</em>" button. You will
              then receieve an email with further instructions.
            </p>
            <div class='card width50'>
              <div class='cardheader'>
                <h1 class='cardtitle'>Forgot Password</h1>
              </div>
              <div class='cardcontent'>
                <form
                  action='/process-forgot-password.asp'
                  name='login'
                  id='login'
                  method='post'
                >
                  <label for='password'>Please Enter Your Username </label>
                  <input
                    class='forminputtext'
                    type='text'
                    name='username'
                    maxlength='40'
                    style={{ width: "207px" }}
                  />
                  <a
                    onclick="document.getElementById('login').submit();"
                    style={{ "margin-top": "10px" }}
                    class='cardbtn loginbtn'
                  >
                    Reset Password{" "}
                  </a>
                </form>
                <br />
                <br />
                <i
                  class='fas fa-chevron-circle-right'
                  style={{ position: "relative" }}
                >
                  {" "}
                </i>
                &nbsp;<Link to='/signup'>New User? </Link>- Whether you're a
                student or tutor - <Link to='/signup'>sign up here</Link> and
                make full use of our service.
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
