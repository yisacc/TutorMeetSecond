import AccountInfo from "./AccountInfo"
import EnhancedDBS from "./EnhancedDBS.js"
import Views from "./Views"

const Overview = () => {
  return (
    <>
      <div class='card'>
        <AccountInfo />
        <Views />

        {/* <EnhancedDBS /> */}
      </div>
    </>
  )
}

export default Overview
