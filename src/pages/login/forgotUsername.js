import { Link } from "react-router-dom";

const ForgotUsername = () => {
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
              Here you can retrieve your forgotten username, simply enter your
              email address you registered your account with and press the "
              <em>Retrieve Username</em>" button. You will then receieve an
              email with details of your registered username.
            </p>
            <div class='card width50'>
              <div class='cardheader'>
                <h1 class='cardtitle'>Forgot Username</h1>
              </div>
              <div class='cardcontent'>
                <form
                  action='/process-forgot-username.asp'
                  id='login'
                  name='login'
                  method='post'
                >
                  <label for='email'>Please enter your email </label>
                  <input
                    class='forminputtext'
                    type='text'
                    name='email'
                    maxlength='60'
                    style={{ width: "230px" }}
                  />
                  <a
                    onclick="document.getElementById('login').submit();"
                    style={{ "margin-top": "10px" }}
                    class='cardbtn loginbtn'
                  >
                    Retrieve Username{" "}
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
export default ForgotUsername;
