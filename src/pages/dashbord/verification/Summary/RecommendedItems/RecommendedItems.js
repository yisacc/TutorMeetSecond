import { Link } from "react-router-dom"
import DBS from "./DBS"

const RecommendedItems=()=>{
    return(
        
        <table class='table tablestriped'>
        <tbody>
          <tr>
            <th style={{ width: "29%" }}>Recommended Items</th>
            <th style={{ width: "29%" }}>Progress</th>
            <th>Action</th>
          </tr>
          <DBS />
        </tbody>
      </table>
        
    )
}
export default RecommendedItems