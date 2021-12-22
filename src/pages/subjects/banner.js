import react from "react";
import BannerRightImage from "../../assets/images/91f3.png";

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
                      We offer tuition on a very <em>wide </em>
                      <span>range</span>of subjects
                    </h2>
                    <p>
                      TutorEthiopia connects parents and students with a
                      nationwide network of professional, expert tutors. Below
                      you will find a list of the most popular subjects we offer
                      tuition. Get in touch with us and give your requirements!
                    </p>
                    <div class='main-red-button'>
                      <a href='#contact'>Book a Tutor</a>
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
  );
};

export default Banner;
