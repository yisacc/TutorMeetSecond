import { Link } from "react-router-dom"

const References=()=>{
    return(
        <tr>
                <td height='30'>
                  <div class='infopanel-wrapper'>
                    <span style={{ position: "relative", top: "-2px" }}>
                      References{" "}
                    </span>{" "}
                    &nbsp;
                    <a class='mobno' id='item-3' data-panel='panel-3'>
                      <i class='far fa-question-circle'></i>
                    </a>
                    <div class='infopanelcontaner'>
                      <div id='panel-3' class='infopanel'>
                        <p>
                          This requires providing at least 2 referees who we
                          will contact by email to complete a short statement
                          form.
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
                    <span class='infobad'>Not Requested</span>
                  </span>
                </td>
                <td>
                  <Link to='/members/add-reference'>Add New Reference </Link>
                </td>
              </tr>
    )
}

export default References