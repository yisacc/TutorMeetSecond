import { Link } from "react-router-dom"

const ProfileImage=()=>{
    return(
        
        <tr>
        <td height='30'>
          <div class='infopanel-wrapper'>
            <span style={{ position: "relative", top: "-2px" }}>
              Profile image{" "}
            </span>{" "}
            &nbsp;
            <a class='mobno' id='item-8' data-panel='panel-8'>
              <i class='far fa-question-circle'></i>
            </a>
            <div class='infopanelcontaner'>
              <div
                style={{ display: "none" }}
                id='panel-8'
                class='infopanel'
              >
                <p>Add a profile image to boost your profile.</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <i
            class='far fa-times-circle'
            style={{ position: "relative", top: "2px" }}
          ></i>{" "}
          <span class='profilescorealert'>
            <span class='infobad'>No Profile Photo</span>{" "}
          </span>
        </td>
        <td>
          <Link to='/members/manage-photos'>Add Profile Photo </Link>
        </td>
      </tr>
        
    )
}
export default ProfileImage