import { Link } from "react-router-dom"

const DBS=()=>{
    return(
        
<tr>
            <td height='30'>
              <div class='infopanel-wrapper'>
                <span>Enhanced DBS* </span> &nbsp;
                <a class='mobno' id='item-2' data-panel='panel-2'>
                  <i class='far fa-question-circle'></i>
                </a>
                <div class='infopanelcontaner'>
                  <div id='panel-2' class='infopanel'>
                    <p>
                      This involves applying for an enhanced DBS through
                      Tutor Ethiopia, or uploading it if you have one
                      already.
                    </p>
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
                <span class='infobad'>Not Provided</span>{" "}
              </span>
            </td>
            <td>
              <a href='/members/dbs-application.asp'>Apply for DBS</a> |{" "}
              <a href='/members/upload-crb.asp'>Upload Current DBS</a>
            </td>
          </tr>
        
    )
}
export default DBS