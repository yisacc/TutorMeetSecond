import { Link, useLocation } from "react-router-dom"

const SideBar = () => {
  const location = useLocation()
  return (
    <>
      <div className='contentside col-sm-12'>
        <div className='sidemenu'>
          <div className='menusection'>
            <Link
              className={location.pathname === "/members" ? "active" : ""}
              to='/members'
            >
              <i className='fas fa-home'></i>
              Dashboard
            </Link>
            <Link
              className={location.pathname === "/members/todo"||location.pathname=="/members/upload-id" ? "active" : ""}
              to='/members/todo'
            >
              <i className='fas fa-check'></i>
              Verification
            </Link>
            <Link
              className={
                location.pathname === "/members/my-enquiries" ? "active" : ""
              }
              to='/members/my-enquiries'
            >
              <i className='fas fa-comments'></i>
              My Enquiries
            </Link>
            <Link
              className={
                location.pathname === "/members/bookings" ||
                location.pathname === "/members/schedule" ||
                location.pathname === "/members/bookings-help" ||
                location.pathname === "/members/bookings-bank"
                  ? "active"
                  : ""
              }
              to='/members/bookings'
            >
              <i className='fas fa-address-book'></i>
              Bookings
            </Link>

            <Link
              className={
                location.pathname === "/members/edit-info-profile"
                  ? "active"
                  : ""
              }
              to='/members/edit-info-profile'
            >
              <i class='fas fa-user-edit'></i>
              My Profile
            </Link>

            {/* <Link class="" to="/members/bookings">
         <i class="fas fa-clipboard-list"></i>
         Bookings
         </Link> */}
            <Link
              className={
                location.pathname === "/members/my-subjects" ||
                location.pathname === "/members/add-subject"
                  ? "active"
                  : ""
              }
              to='/members/my-subjects'
            >
              <i className='fas fa-graduation-cap'></i>
              My Subjects
            </Link>
            <Link
              className={
                location.pathname === "/members/edit-info-personal" ||
                location.pathname === "/members/edit-info-account" ||
                location.pathname === "/members/purchases" ||
                location.pathname === "/members/privacy"
                  ? "active"
                  : ""
              }
              to='/members/edit-info-personal'
            >
              <i className='fas fa-user'></i>
              Account
            </Link>
          </div>
          <div className='menusection'>
            <div id='togglecontent' class='hidemenu hidemenu2'>
              <Link
                className={
                  location.pathname === "/members/feedback" ? "active" : ""
                }
                to='/members/feedback'
              >
                <i className='fas fa-comment-dots'></i>
                Feedback
              </Link>
              <Link
                className={
                  location.pathname === "/members/suggested-users"
                    ? "active"
                    : ""
                }
                to='/members/suggested-users'
              >
                <i className='fas fa-book-reader'></i>
                <span className='mobno'>My&nbsp;</span>Suggested Students
              </Link>
              <Link
                className={
                  location.pathname === "/members/manage-photos" ? "active" : ""
                }
                to='/members/manage-photos'
              >
                <i className='fas fa-camera'></i>
                Profile Photo
              </Link>
              <Link
                className={
                  location.pathname === "/members/resources" ||
                  location.pathname === "/members/create-resource"
                    ? "active"
                    : ""
                }
                to='/members/resources'
              >
                <i className='fas fa-newspaper'></i>
                Articles
              </Link>
              <Link
                className={
                  location.pathname === "/members/my-tags" ? "active" : ""
                }
                to='/members/my-tags'
              >
                <i className='fas fa-tags'></i>
                Tags
              </Link>
              <Link
                className={
                  location.pathname === "/members/my-history" ? "active" : ""
                }
                to='/members/my-history'
              >
                <i className='fas fa-history'></i>
                History
              </Link>
              <Link className='' to='/logout'>
                <i className='fas fa-sign-out-alt'></i>
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SideBar
