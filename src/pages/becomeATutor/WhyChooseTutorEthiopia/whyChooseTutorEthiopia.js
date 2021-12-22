import StepOne from "./stepOne"
import StepTwo from "./stepTwo"
import StepThree from "./stepThree"

const WhyChooseTutorEthiopia = () => {
  return (
    <>
      <section id='values' class='values'>
        <div class='container steps-container' data-aos='fade-up'>
          <header class='section-header'>
            <div class='col-lg-12 offset-lg-3 section-title'>
              <div
                class='section-heading  wow bounceIn'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
              >
                <h2 class='mb-3' data-aos='fade-in'>
                  Why Choose <em>Tutor</em>
                  <span>Ethiopia</span>
                </h2>
              </div>
            </div>
          </header>

          <div class='row'>
            <StepOne />
            <StepTwo />
            <StepThree />
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseTutorEthiopia
