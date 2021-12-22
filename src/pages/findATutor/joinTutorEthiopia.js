import ContactDecoration from "../../assets/images/contact-decoration.png";

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
                <h2>Book your FREE Demo Session now!</h2>
                <p>
                  Send us your requirements, see if our service is right for you
                  – without any obligation on your part!
                </p>
              </div>
            </div>
            <div
              class='col-lg-6 wow fadeInRight'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='contact' action='' method='post'>
                <div class='row'>
                  <div class='col-lg-12'>
                    <fieldset>
                      <input
                        type='name'
                        name='name'
                        id='name'
                        placeholder='Full Name'
                        autocomplete='on'
                        required
                      />
                    </fieldset>
                  </div>
                  <div class='col-lg-6'>
                    <fieldset>
                      <input
                        type='phone'
                        name='phone'
                        id='phone'
                        placeholder='City'
                        autocomplete='on'
                        required
                      />
                    </fieldset>
                  </div>
                  <div class='col-lg-6'>
                    <fieldset>
                      <input
                        type='area'
                        name='area'
                        id='area'
                        placeholder='Area'
                        autocomplete='on'
                        required
                      />
                    </fieldset>
                  </div>
                  <div class='col-lg-6'>
                    <fieldset>
                      <input
                        type='phone'
                        name='phone'
                        id='phone'
                        placeholder='Phone'
                        autocomplete='on'
                        required
                      />
                    </fieldset>
                  </div>
                  <div class='col-lg-6'>
                    <fieldset>
                      <input
                        type='text'
                        name='email'
                        id='email'
                        pattern='[^ @]*@[^ @]*'
                        placeholder='Email'
                        required=''
                      />
                    </fieldset>
                  </div>

                  <div class='col-lg-12'>
                    <fieldset>
                      <input
                        name='message'
                        type='text'
                        class='form-control'
                        id='message'
                        placeholder='Subjects you need tution/coaching for'
                        required=''
                      />
                    </fieldset>
                  </div>
                  <div class='col-lg-12'>
                    <fieldset>
                      <button
                        type='submit'
                        id='form-submit'
                        class='main-button '
                      >
                        Get Started
                      </button>
                      <p style={{ color: "#999999", "font-size": "12px" }}>
                        YOUR INFORMATION IS SAFE. WE DO NOT SHARE THIS WITH
                        OTHERS OR SPAM YOU
                      </p>
                    </fieldset>
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
  );
};

export default JoinTutorEthiopia;
