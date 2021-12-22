import BreiefSection from "./breiefSection"
import StepOne from "./stepOne"
import StepTwo from "./stepTwo"
import StepThree from "./stepThree"
import StepFour from "./stepFour"
import StepFive from "./stepFive"
const StepsToBecomeATutor = () => {
  return (
    <>
      <section id='features' class='features section-bg'>
        <div class='container steps-container'>
          <BreiefSection />
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepFive />
        </div>
      </section>
    </>
  )
}

export default StepsToBecomeATutor
