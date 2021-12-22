import ApiErrorMessage from "./apiErrorMessage"
import Form from "./Form/Form"

const AccountInfoView = props => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    loading,
    apiError,
    errorMessage,
  } = props
  return (
    <>
      {loading ? (
        <div id='js-preloader' class='js-preloader'>
          <div class='preloader-inner'>
            <span class='dot'></span>
            <div class='dots'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          {apiError ? <ApiErrorMessage errorMessage={errorMessage} /> : null}
          <Form
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </>
      )}
    </>
  )
}
export default AccountInfoView
