import react from "react"
import AffordablePrice from "./affordablePrice"
import ConstantTracking from "./constantTracking"
import ExpertTutor from "./expertTutor"
import HighQualityTutoring from "./highQualityTutoring"
import ImprovedResults from "./improvedResults"
import ReplacementGuarantee from "./replacementGuarantee"

const WhyTutorEthiopia = () => {
  return (
    <>
      <section id='services' class='services our-portfolio section'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6 offset-lg-3'>
              <div
                class='section-heading  wow bounceIn'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
              >
                <h2 class='mb-3'>Why TutorEthiopia?</h2>
                <p class='whyTutorEthiopiaP'>
                  Our Student’s trust us with their life career and growth; it
                  is an honour we don’t take lightly. We aim to please and
                  over-deliver every time.
                </p>
              </div>
            </div>
          </div>

          <div class='row'>
            <ExpertTutor />
            <HighQualityTutoring />
            <AffordablePrice />
            <ImprovedResults />
            <ConstantTracking />
            <ReplacementGuarantee />
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyTutorEthiopia
