import { Link,useLocation } from "react-router-dom"

const SideBar=()=>{
    const location = useLocation();
    return(
        <>
        <div class="contentside col-sm-12">
   <div class="sidemenu">
      <div class="menusection">
         <Link class={location.pathname==="/students"?"active":""} to="/students">
         <i class="fas fa-home"></i>
            Dashboard
         </Link>
         
         <Link class={location.pathname==="/students/edit-info-profile"?"active":""} to="/students/edit-info-profile">
         <i class="fas fa-user-edit"></i>
            My Profile
         </Link>
         <Link class={location.pathname==="/students/my-enquiries"?"active":""} to="/students/my-enquiries">
         <i class="fas fa-check"></i>
         My Enquiries
         </Link>
         <Link class={location.pathname==="/students/my-subjects"||location.pathname==="/students/add-subject"?"active":""} to="/students/my-subjects">
         <i class="fas fa-graduation-cap"></i>
            My Subjects
         </Link>
         <Link class={location.pathname==="/students/edit-info-personal"||
         location.pathname==="/students/edit-info-account"||
         location.pathname==="/students/purchases"||
         location.pathname==="/students/privacy"
         ?"active":""} to="/students/edit-info-personal">
         <i class="fas fa-user"></i>
            Account
         </Link>
         </div>
      <div class="menusection">
         <div id="togglecontent" class="hidemenu hidemenu2">
            
            <Link class={location.pathname==="/students/feedback"?"active":""} to="/students/feedback">
            <i class="fas fa-comment-dots"></i>
               Feedback
            </Link>
            <Link class={location.pathname==="/students/suggested-users"?"active":""} to="/students/suggested-users">
            <i class="fas fa-book-reader"></i>
               <span class="mobno">My&nbsp;</span>Suggested Tutors
            </Link>
            <Link class={location.pathname==="/students/manage-photos"?"active":""} to="/students/manage-photos">
            <i class="fas fa-camera"></i>
               Profile Photo
            </Link>
            <Link class={location.pathname==="/students/my-tags"?"active":""} to="/students/my-tags">
            <i class="fas fa-tags"></i>
               Tags
            </Link>
            <Link class={location.pathname==="/students/my-history"?"active":""} to="/students/my-history">
            <i class="fas fa-history"></i>
               History
            </Link>
            <Link class="" to="/logout">
            <i class="fas fa-sign-out-alt"></i>
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