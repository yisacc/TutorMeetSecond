import ContactDecoration from "../../assets/images/contact-decoration.png"
import FullNameInput from "./formFields/fullNameInput"
import CityInput from "./formFields/cityInput"
import AreaInput from "./formFields/areaInput"
import PhoneInput from "./formFields/phoneInput"
import EmailInput from "./formFields/emailInput"
import SubjectsInput from "./formFields/subjectsInput"
import GetStartedButton from "./formFields/getStartedButton"

const JoinTutorEthiopiaForm = () => {
  return (
    <>
      <form id='contact' action='' method='post'>
        <div class='row'>
          <div class='col-lg-12'>
            <FullNameInput />
          </div>
          <div class='col-lg-6'>
            <CityInput />
          </div>
          <div class='col-lg-6'>
            <AreaInput />
          </div>
          <div class='col-lg-6'>
            <PhoneInput />
          </div>
          <div class='col-lg-6'>
            <EmailInput />
          </div>

          <div class='col-lg-12'>
            <SubjectsInput />
          </div>
          <div class='col-lg-12'>
            <GetStartedButton />
          </div>
        </div>
        <div class='contact-dec'>
          <img src={ContactDecoration} alt='' />
        </div>
      </form>
    </>
  )
}

export default JoinTutorEthiopiaForm
