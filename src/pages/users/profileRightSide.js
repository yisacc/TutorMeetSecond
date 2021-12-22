import profileIcon from "../../assets/images/users/icon-profile-id.png"
import starRate5 from "../../assets/images/users/star-rate-green-5.png"
import starRate45 from "../../assets/images/users/star-rate-green-45.png"

const ProfileRightSide = () => {
  return (
    <>
      <div class='profilerightside'>
        <div class='card'>
          <div class='cardcontent'>
            <div>
              <div style={{ width: "100%", margin: "auto 0" }}>
                <a
                  style={{ width: "260px", fontSize: "16px" }}
                  class='btn btnsuccess mobno tabno'
                  rel='nofollow'
                  href="javascript:showenquiryform('Mary','3176236120408','','')"
                >
                  Contact this Tutor
                </a>
              </div>
            </div>
            <div id='myqual'>
              <p style={{ paddingBottom: 0, marginTop: "20px" }}>
                <strong
                  style={{
                    color: "#03a4ed",
                    paddingLeft: "0px",
                    fontSize: "120%",
                  }}
                >
                  My Qualifications
                </strong>
              </p>
              <div class='qualificationitem'>
                <strong
                  style={{
                    color: "#03a4ed",
                    display: "inline-block",
                    paddingBottom: "4px",
                  }}
                  title='BEd'
                >
                  BEd
                </strong>
                <br />
                <strong>
                  <span title='University college cork'>
                    University college cork
                  </span>
                </strong>
                <br />
                <span title='Primary teaching degree and MSC Science'>
                  Primary teaching degree and MSC Science
                </span>
                <br />
                1st &nbsp;(2013)
              </div>
            </div>
          </div>
        </div>
        <div class='card'>
          <div class='cardheader'>
            <h4>Verification Status</h4>
          </div>
          <div class='cardcontent'>
            <div class='verificationitem'>
              <img src={profileIcon} />
              Tutors ID Verified
            </div>
            <div id='profilereference'>
              <div id='referenceheader'>How references rated Mary</div>
              <div class='referenceitem'>
                <img src={starRate45} />
                Professionalism
              </div>
              <div class='referenceitem'>
                <img src={starRate5} />
                Reliability
              </div>
              <div class='referenceitem' style={{ marginRight: 0 }}>
                <img src={starRate5} />
                Trustworthy
              </div>
            </div>
          </div>
        </div>

        <p></p>
      </div>
    </>
  )
}

export default ProfileRightSide
