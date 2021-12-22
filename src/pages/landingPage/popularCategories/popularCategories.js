import aboutLeftImage from "../../../assets/images/about-left-image.png"
import Academics from "./academics"
import Programming from "./programming"
import ArtAndHobbies from "./artAndHobbies"
import Others from "./others"

const PopularCategories = () => {
  return (
    <>
      <div id='about' class='about-us section'>
        <div class='container TutorEthiopia-container'>
          <div class='row'>
            <div class='col-lg-4'>
              <div
                class='left-image wow fadeIn animated'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
              >
                <img src={aboutLeftImage} alt='person graphic' />
              </div>
            </div>
            <div class='col-lg-8 align-self-center'>
              <div class='services'>
                <div class='row'>
                  <Academics />
                  <Programming />
                  <ArtAndHobbies />
                  <Others />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularCategories
