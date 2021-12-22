import Profiling from "./profiling"
import Matching from "./matching"
import Teaching from "./teaching"
import Caring from "./caring"

const HowItWorks = () => {
  return (
    <>
      <div id='portfolio' class='our-portfolio section'>
        <div class='container TutorEthiopia-container'>
          <div class='row'>
            <div class='col-lg-6 offset-lg-3'>
              <div
                class='section-heading  wow bounceIn animated'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
              >
                <h2 class='mb-3'>How It Works</h2>
                <h2>
                  Find your <em>perfect</em> <span>Tutor</span> in four easy
                  steps
                </h2>
              </div>
            </div>
          </div>
          <div class='row'>
            <Profiling />
            <Matching />
            <Teaching />
            <Caring />
          </div>
        </div>
      </div>
    </>
  )
}
export default HowItWorks
