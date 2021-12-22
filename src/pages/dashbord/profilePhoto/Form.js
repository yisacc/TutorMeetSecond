import FileUpload from '../../../common/FormComponents/FileUpload'

const Form = (props) => {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    state,
    onChange,
    RemoveFile,
  } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="photoform" name="photoform">
      <FileUpload
        register={register}
        errors={errors}
        state={state}
        onChange={onChange}
        RemoveFile={RemoveFile}
      />
      <a
        onclick="validatephotoupload(0)"
        class="btn btnsuccess"
        style={{ 'margin-top': '20px' }}
      >
        Complete
      </a>{' '}
      <span id="uploading" style={{ display: 'none' }}>
        <img
          src="/images/loading1.gif"
          style={{
            margin: 0,
            padding: 0,
            'margin-left': '30px',
            position: 'relative',
            top: '28px',
          }}
          width="40px;"
        />
      </span>
    </form>
  )
}
export default Form
