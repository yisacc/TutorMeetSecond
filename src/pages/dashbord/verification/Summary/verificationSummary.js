import { Link } from "react-router-dom"
import ProofOfAddress from "./ProofOfAddress"
import References from "./References"
import PhotoID from "./PhotoID"
import ProfileImage from "./ProfileImage"
import RecommendedItems from "./RecommendedItems/RecommendedItems"

const VerificationSummary = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Verification Summary </h2>
        </div>
        <div class='cardtable tablewrap'>
          <table class='table tablestriped'>
            <tbody>
              <tr>
                <th style={{ width: "29%" }}>Mandatory Items</th>
                <th style={{ width: "29%" }}>Progress</th>
                <th></th>
                </tr>
              <PhotoID />
             {/* <ProofOfAddress /> */}
              {/* <References /> */}
             <ProfileImage />
            </tbody>
          </table>
          <br />
          <br />
          {/* <RecommendedItems /> */}
        </div>
        {/* <div class='cardcontent'>
          <p>
            *Tutors who have an enhanced DBS verified through Tutor Ethiopia
            will be ranked higher within our search results.
          </p>
        </div> */}
      </div>
    </>
  )
}

export default VerificationSummary
