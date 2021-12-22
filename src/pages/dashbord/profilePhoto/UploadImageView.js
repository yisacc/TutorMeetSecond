import Form from './Form'

const UploadImageView = (props) => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    loading,
    apiError,
    errorMessage,
    state,
    onChange,
    RemoveFile,
  } = props
  return (
    <div class="card">
      <div class="cardheader">
        <h2 class="cardtitle">Upload Your Photo</h2>
      </div>
      <div class="cardcontent">
        <p>
          Here you can upload photos of yourself which will appear within your
          profile page. To upload an image click the Browse... button and point
          to the location of the image you would like, double click it, and
          finally press the Upload button. Repeat the process to upload multiple
          images.{' '}
        </p>
        <p></p>
        <p>
          <strong>
            Please only press upload once and wait, it may take a few minutes to
            complete.
          </strong>
        </p>
        <p class="highlight" style={{ width: '691px' }}>
          {' '}
          - Please <strong style={{ color: '#fff' }}>do not</strong> place any
          contact information such as phone numbers, email addresses, trading
          names etc in your image upload, This is against our TOS and will
          result in account removal.{' '}
        </p>

        <Form
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          state={state}
          onChange={onChange}
          RemoveFile={RemoveFile}
        />

        <br />
        <br />
        <br />
        <p>
          <i class="fas fa-times-circle" style={{ position: 'relative' }}></i>
          &nbsp;<a href="/members/manage-photos.asp">Cancel Photo Upload</a>-
          Return to my Photos Page
        </p>
      </div>{' '}
    </div>
  )
}
export default UploadImageView
