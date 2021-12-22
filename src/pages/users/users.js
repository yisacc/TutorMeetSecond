import Availability from "./availablity"
import InformationAboutUser from "./informationAboutUser"
import MorePhotos from "./morePhotos"
import ProfileLeftSide from "./profileLeftSide"
import ProfileRightSide from "./profileRightSide"
const Users = () => {
  return (
    <>
      <div
        id='maincontentouter'
        className='dashbord main-banner-dashbord profile-items'
      >
        <div id='maincontent'>
          <p id='location'>
            <a href='/'>Tutor Ethiopia</a>
            <a href='/all-subjects.asp'>Subjects</a>
            <a href='/english.asp'>English Tutors</a>
          </p>
          <h1 style={{ marginBottom: "30px" }}>Mary</h1>
          <div className='row'>
            <ProfileLeftSide />
            <ProfileRightSide />
            <InformationAboutUser />
            <Availability />
            <MorePhotos />
          </div>
        </div>
      </div>
    </>
  )
}
export default Users
