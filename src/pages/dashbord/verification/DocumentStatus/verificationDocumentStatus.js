import DBSVerification from './DBSVerification'
import ProofOfAddress from './ProofOfAddress'
import ProofOfIdentification from './ProofOfIdentification'
import Reference from './Reference'
const VerificationDocumentStatus = () => {
  return (
    <>
      <div class="card">
        <div class="cardheader">
          <h2 class="cardtitle">My Verification Document Status</h2>
        </div>
        <Reference />
        <ProofOfIdentification />
        {/* <ProofOfAddress /> */}

        {/* <DBSVerification /> */}
      </div>
    </>
  )
}
export default VerificationDocumentStatus
