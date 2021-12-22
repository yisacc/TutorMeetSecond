import ContactDecoration from "../../../assets/images/contact-decoration.png"
import AreaInput from "../../becomeATutor/formFields/areaInput"
import EmailInput from "../../becomeATutor/formFields/emailInput"
import Message from "../../becomeATutor/formFields/message"
import NameInput from "../../becomeATutor/formFields/nameInput"
import PhoneInput from "../../becomeATutor/formFields/phoneInput"
import SendMessageButton from "../../becomeATutor/formFields/sendMessageButton"
import SurnameInput from "../../becomeATutor/formFields/surname"

const SendMessage = () => {
  return (
    <>
      <div id='contact' class='contact-us section'>
        <div class='container'>
          <div class='row'>
            <div
              class='col-lg-6 align-self-center wow fadeInLeft'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <div class='section-heading'>
                <h2>Book your FREE Demo Session now!</h2>
                <p>
                  Send us your requirements, see if our service is right for you
                  – without any obligation on your part!
                </p>
                <div class='phone-info'>
                  <h4>
                    For any enquiry, Call Us:{" "}
                    <span>
                      <i class='fa fa-phone'></i> <a href='#'>093-765-6015</a>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              class='col-lg-6 wow fadeInRight'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='contact' action='' method='post'>
                <div class='row'>
                  <div class='col-lg-6'>
                    <NameInput />
                  </div>
                  <div class='col-lg-6'>
                    <SurnameInput />
                  </div>
                  <div class='col-lg-12'>
                    <EmailInput />
                  </div>
                  <div class='col-lg-6'>
                    <PhoneInput />
                  </div>
                  <div class='col-lg-6'>
                    <AreaInput />
                  </div>
                  <div class='col-lg-12'>
                    <Message />
                  </div>
                  <div class='col-lg-12'>
                    <SendMessageButton />
                  </div>
                </div>
                <div class='contact-dec'>
                  <img src={ContactDecoration} alt='' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SendMessage
