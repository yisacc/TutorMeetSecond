import BannerRightImage from "../../assets/images/1-f3.png"

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
                    class='left-content header-text wow fadeInLeft'
                    data-wow-duration='1s'
                    data-wow-delay='1s'
                  >
                    <h2>
                      Become a Tutor. Share your passion. <em>Join</em>{" "}
                      <span>now!</span>
                    </h2>
                    <p>
                      Join Ethiopia’s fastest-growing community of tutors,
                      create a strong profile and grow your network. Whether you
                      are new to tutoring or an established professional tutor,
                      we will help you find new students
                    </p>
                    <div class='main-red-button'>
                      <a href='#contact'>Join TutorEthiopia Now!</a>
                    </div>
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div
                    class='right-image wow fadeInRight'
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
