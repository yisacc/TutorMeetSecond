import { Link } from "react-router-dom"
import BannerRightImage from "../../assets/images/banner-right-image.png"

const Banner = () => {
  return (
    <>
      <div
        class='main-banner wow fadeIn'
        id='top'
        data-wow-duration='1s'
        data-wow-delay='0.5s'
      >
        <div class='container TutorEthiopia-container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='row'>
                <div class='col-lg-6 align-self-center'>
                  <div
                    class='left-content header-text wow fadeInLeft animated'
                    data-wow-duration='1s'
                    data-wow-delay='1s'
                  >
                    <h6>Welcome to HI-Trust Tutor</h6>
                    <h2>
                      Meet <em>With</em> <span>Tutors</span> &amp; Learn
                    </h2>
                    <p>
                      Enjoy the top notch learning methods and achieve next
                      level skills! You are the creator of your own career & we
                      will guide you through that.
                    </p>
                    <div class='row home-page-buttons'>
                      <div class='main-blue-button headerreg mr-2'>
                        <Link to='/signup'> Find A Tutor</Link>
                      </div>
                      <div class='main-blue-button headerreg'>
                        <Link to='/signup'> Become A Tutor</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div
                    class='right-image wow fadeInRight animated'
                    data-wow-duration='1s'
                    data-wow-delay='0.5s'
                  >
                    <img src={BannerRightImage} alt='team meeting' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
