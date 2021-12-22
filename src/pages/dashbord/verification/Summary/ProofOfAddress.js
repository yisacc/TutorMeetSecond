import { Link } from "react-router-dom"

const ProofOfAddress=()=>{
    return(

        <tr>
        <td height='30'>
          <div class='infopanel-wrapper'>
            <span style={{ position: "relative", top: "-2px" }}>
              Proof of Address{" "}
            </span>{" "}
            &nbsp;
            <a class='mobno' id='item-11' data-panel='panel-11'>
              <i class='far fa-question-circle'></i>
            </a>
            <div class='infopanelcontaner'>
              <div id='panel-11' class='infopanel'>
                <p>
                  We require your proof of address before we can start
                  paying you.
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
          <Link to='/members/upload-poa'>Upload Proof of Address</Link>
        </td>
      </tr>
    )
}
export default ProofOfAddress