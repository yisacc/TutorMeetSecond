import Overview from './overview'
import VerificationSummary from './Summary/verificationSummary'
import VerificationDocumentStatus from './DocumentStatus/verificationDocumentStatus'
import ImproveVisiblity from './improveVisiblity'

const Verification = () => {
  return (
    <>
      <Overview />
      <VerificationSummary />
      <VerificationDocumentStatus />
      {/* <ImproveVisiblity /> */}
    </>
  )
}
export default Verification
