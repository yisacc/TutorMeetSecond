import { Link } from 'react-router-dom'

import ApiErrorMessage from '../../register/accountInformation/apiErrorMessage'

import Form from '../Form/Form'

const LoginView = (props) => {
  const {
    loading,
    apiError,
    errorMessage,
    register,
    errors,
    handleSubmit,
    handleLogin,
  } = props
  return (
    <>
      {loading ? (
        <div id="js-preloader" class="js-preloader">
          <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            class="dashbord main-banner-dashbord wow fadeIn"
            id="top"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <div id="maincontentouter">
              <div class="pt-5" id="maincontent">
                <h1 class="TutorEthiopiaH1">Login</h1>
                <div class="card width50">
                  <div class="cardheader">
                    <div class="cardtitlewrap">
                      <h3 class="cardtitle">Please Log in here</h3>
                    </div>
                  </div>
                  <div class="cardcontent">
                    {apiError ? (
                      <ApiErrorMessage errorMessage={errorMessage} />
                    ) : null}
                    <Form
                      register={register}
                      errors={errors}
                      handleSubmit={handleSubmit}
                      handleLogin={handleLogin}
                    />
                  </div>
                </div>

                <p>
                  <i
                    class="fas fa-chevron-circle-right"
                    style={{ position: 'relative' }}
                  >
                    {' '}
                  </i>
                  &nbsp;<Link to="/signup">New User?</Link> - Whether you're a
                  student or tutor - <Link to="/signup">sign up here</Link> and
                  make full use of our service.{' '}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default LoginView
