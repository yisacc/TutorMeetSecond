import { Link } from "react-router-dom"
import Form from "./Form/Form"
import ApiErrorMessage from "../../../register/accountInformation/apiErrorMessage";

const ProofOfIdentificationView = (props) => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    loading,
    apiError,
    errorMessage,
    setValue,
  } = props
  return (
    <div class='card'>
      <div id='idblock'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Proof of Identification</h2>
        </div>
        <div class='cardcontent'>
          <p class='highlight'>
            To become a verfied Tutor Ethiopia tutor you must upload proof of
            identification. This could be either a passport or picture Driver
            Licence. Your documents will be encrypted and held securely, they
            will only be viewed by our admin team. We are registered with the
            Information Commissioner`s Office.
          </p>
          {apiError ? <ApiErrorMessage errorMessage={errorMessage} /> : null}
          <Form
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            setValue={setValue}
            loading={loading}
          />
        </div>
      </div>
      <div class='cardcontent'>
        <p>
          <i class='fas fa-times-circle' style={{ position: "relative" }}></i>
          &nbsp;<Link to='/members/my-references'>Cancel Upload ID</Link>-
          Return to my Tutor Verification
        </p>
      </div>
    </div>
  )
}
export default ProofOfIdentificationView
