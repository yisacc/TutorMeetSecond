import ExpiryDate from "./ExpiryDate"
import ExpiryMonth from "./ExpiryMonth"
import ExpiryYear from "./ExpiryYear"
import FileUpload from "../../../../../common/FormComponents/FileUpload"
import Firstname from "./Firstname"
import IdentificationType from "./IdentificationType"
import Lastname from "./Lastname"
import Othername from "./Othername"

const Form = (props) => {
  const { register, errors, handleSubmit, onSubmit, setValue, loading } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)} id='idform'>
      <div class='columnsplit'>
        <IdentificationType register={register} errors={errors} />
        <Firstname register={register} errors={errors} />
      </div>
      <div class='columnsplit'>
        <Lastname register={register} errors={errors} />
        <Othername register={register} errors={errors} />
      </div>
      <div class='columnsplit'>
        <div class='columnsplititem'>
          <div class='columnsplit'>
            <ExpiryYear register={register} errors={errors} />
            <ExpiryMonth register={register} errors={errors} />
            <ExpiryDate register={register} errors={errors} />
          </div>
        </div>
      </div>
      <div id='indefblock' name='indefblock' style={{ display: "none" }}>
        <label class='checkcontainer'>
          Doesn't Expire
          <input type='checkbox' name='indefinite' id='indefinite' />
          <span class='checkmark'></span>
        </label>
      </div>
      <FileUpload register={register} errors={errors} setValue={setValue} />
      <div class='cardbtncontainer col-lg-3'>
        <input
          type='submit'
          class='btn btnsuccess'
          style={{ "margin-top": "20px" }}
          value='Complete'
        />
      </div>
      {loading && (
        <span id='uploading'>
          <img
            src='/images/loading1.gif'
            style={{
              margin: 0,
              padding: 0,
              "margin-left": "30px",
              position: "relative",
              top: "28px",
            }}
            width='40px;'
          />
        </span>
      )}
    </form>
  )
}

export default Form
