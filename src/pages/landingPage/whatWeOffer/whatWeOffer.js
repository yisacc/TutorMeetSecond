import servicesLeftImage from "../../../assets/images/services-left-image.png"
import HomeTutoring from "./homeTutoring"
import OnlineTutoring from "./onlineTutoring"
import GroupClasses from "./groupClasses"
import PackageCourses from "./packageCourses"
import SectionHeading from "./sectionHeading"
const WhatWeOffer = () => {
  return (
    <>
      <div id='services' class='our-services section'>
        <div class='container'>
          <div class='row'>
            <div
              class='col-lg-6 align-self-center  wow fadeInLeft animated'
              data-wow-duration='1s'
              data-wow-delay='0.2s'
            >
              <div class='left-image'>
                <img src={servicesLeftImage} alt='' />
              </div>
            </div>
            <div
              class='col-lg-6 wow fadeInRight animated'
              data-wow-duration='1s'
              data-wow-delay='0.2s'
            >
              <SectionHeading />
              <div class='row'>
                <HomeTutoring />
                <OnlineTutoring />
                <GroupClasses />
                <PackageCourses />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
