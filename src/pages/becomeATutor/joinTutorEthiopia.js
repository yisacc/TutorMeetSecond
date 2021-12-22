import JoinTutorEthiopiaForm from "./joinTutorEthiopiaForm"
const JoinTutorEthiopia = () => {
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
                <h2>Join TutorEthiopia now!</h2>
                <p>
                  Fill up this simple form, create a profile and skyrocket your
                  earnings. See if our service is right for you – without any
                  obligation on your part!
                </p>
              </div>
            </div>
            <div
              class='col-lg-6 wow fadeInRight'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <JoinTutorEthiopiaForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinTutorEthiopia
