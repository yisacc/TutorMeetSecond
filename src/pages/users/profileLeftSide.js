import userImage1 from "../../assets/images/users/photo_2021-08-10_14-42-062.jpg"
import locationIcon from "../../assets/images/users/location-pin-pr.png"
import qualificationIcon from "../../assets/images/users/profile-icon-qualification.png"
import teacherIcon from "../../assets/images/users/profile-icon-teacher.png"
import idverifyIcon from "../../assets/images/users/id-verify.png"

const ProfileLeftSide = () => {
  return (
    <>
      <div class='profileleftside mr-4'>
        <div class='card'>
          <div
            class='cardcontent'
            style={{ marginTop: "14px", paddingTop: "5px" }}
          >
            <div
              class='profileoptions mobyes tabyes tabbottommargin'
              style={{ border: 0, padding: 0, width: "100%" }}
            >
              <a
                class='btn btnsuccess tabbottommargin mobmaxwidth'
                rel='nofollow'
                style={{ display: "inline-block !important", margin: "0 auto" }}
                href='/enquiry.asp?to=3176236120408'
              >
                Contact this Tutor
              </a>
            </div>
            <div id='profileimagecontainer'>
              <a
                style={{ float: "left" }}
                href="javascript:openprofilepic('/profile-images/size-640/804021632671357265214.jpg');"
              >
                <img
                  alt='Mary'
                  style={{ width: "210px", margin: 0 }}
                  class='profileimage'
                  src={userImage1}
                />
              </a>
            </div>
            <div id='profilenameblock'>
              <div id='profilenameinfo'>
                <div id='idverify'>
                  <img
                    src={idverifyIcon}
                    title='&nbsp;We have collected and approved photo ID from this user '
                  />
                </div>
                <span
                  id='profilenametxt'
                  style={{ position: "relative", top: "-4px" }}
                >
                  Mary
                </span>
                <br />
                <span style={{ position: "relative", top: "-4px" }}>Tutor</span>
                <div
                  id='profileloc'
                  style={{ position: "relative", top: "-4px" }}
                >
                  <div style={{ float: "left", width: "16px", height: "40px" }}>
                    <img
                      src={locationIcon}
                      style={{ position: "relative", top: "1px" }}
                    />
                  </div>
                  London
                </div>
              </div>
              <div id='profileicons'>
                <img src={qualificationIcon} title='This tutor has a degree ' />{" "}
                <img
                  src={teacherIcon}
                  title='This tutor has teaching qualifications '
                />{" "}
              </div>
            </div>
            <div id='profileinfoblockcontainer'>
              <div id='profileinfoblock'>
                <strong>Home Town</strong>:{" "}
              </div>
              <div id='profileinfoblock'>
                <strong>Member Since</strong>: 18/02/2013
              </div>
              <div id='profileinfoblock'>
                <strong>Last Login</strong>: 8 months ago
              </div>
              <div id='profileinfoblock'>
                <strong>Response Rate</strong>: 75%
              </div>
              <div id='profileinfoblock' style={{ border: 0 }}>
                <strong>Expected Response</strong>: &lt; 18 hours{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileLeftSide
