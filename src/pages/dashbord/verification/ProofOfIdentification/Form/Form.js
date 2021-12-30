import ExpiryDate from "./ExpiryDate"
import ExpiryMonth from "./ExpiryMonth"
import ExpiryYear from "./ExpiryYear"
import FileUpload from "../../../../../common/FormComponents/FileUpload"
import Firstname from "./Firstname"
import IdentificationType from "./IdentificationType"
import Lastname from "./Lastname"
import Othername from "./Othername"
import {Loader} from "../../../common/loader";

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
      <div className='row'>
      <div class='cardbtncontainer col-lg-3'>
        <input
            disabled={loading?true:false}
          type='submit'
          class='btn btnsuccess'
          style={{ "margin-top": "20px" }}
          value='Complete'
        />

      </div>
      <div className='col-lg-3'>
        {loading && (
        <Loader />
        )}
      </div></div>
    </form>
  )
}

export default Form
