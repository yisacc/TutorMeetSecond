import { Link } from "react-router-dom";

const ProofOfAddress = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Proof of Address</h2>
        </div>
        <div class='cardcontent'>
          <p>
            Your Billing address must match the address on the document you are
            uploading.
          </p>
          <p class='alert'>
            To ensure your tuition payments are not interrupted you must
            complete our KYC (Know Your Customer) check. This involves verifying
            your billing address. We are unable to process further payments
            until this is completed, so it is important this is completed as
            soon as possible.
          </p>
          <form
            method='post'
            action='/members/my-references.asp'
            id='idsubmitform'
            name='idsubmitform'
          >
            <input type='hidden' id='status' name='status' value='' />
          </form>
          <form
            method='post'
            action='/upload-poa-process.aspx'
            class='mobtable'
            id='idform'
            name='idform'
            target='_self'
            enctype='multipart/form-data'
          >
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='doctype'>Document Type </label>
                <select name='doctype' id='doctype' class='forminputtext'>
                  <option value='none'>Select</option>
                  <option value='ultilitybill'>
                    Utility bill &nbsp;(mobile phone bills not accepted)
                  </option>
                  <option value='bankstatement'>Bank statement</option>
                  <option value='drivinglicense'>Driving license</option>
                  <option value='counciltax'>Council tax</option>
                  <option value='solicitorsletter'>Solicitors letter</option>
                  <option value='gpletter'>GP letter</option>
                  <option value='governmentletter'>
                    Government issued letter
                  </option>
                  <option value='hmrc'>
                    HM Revenue and Customs tax document
                  </option>
                  <option value='benefits'>
                    Benefits agency letter (confirming benefits or state
                    pension)
                  </option>
                </select>
              </div>
              <div class='columnsplititem'></div>
            </div>
          </form>
        </div>
        <div class='cardcontent'>
          <h2 class='cardtitle'>Billing Address</h2>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='address'>Address line 1 </label>
              <input
                type='text'
                name='address1'
                id='address1'
                value='03 Bole'
                maxlength='90'
              />
            </div>
            <div class='columnsplititem'>
              <label for='town'>Town </label>
              <input
                type='text'
                name='town'
                id='town'
                value='Addis Ababa'
                maxlength='45'
              />
            </div>
          </div>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='postcode'>Postcode </label>
              <input
                type='text'
                name='postcode'
                id='postcode'
                value='1755'
                maxlength='20'
              />
            </div>
            <div class='columnsplititem'></div>
          </div>
          <div class='uploadcontainer'>
            <input type='file' name='file' id='file' />
            <div class='upload-area' id='uploadfile'>
              <h2 id='draganddropheader'>
                Drag and Drop or Click to upload file
              </h2>
            </div>
            <div class='fileblock'>
              <span class='filedesc'>
                <span id='filename1' class='filename'></span>&nbsp;&nbsp;
                <span id='filesize1' class='filesize'></span>
              </span>
              <button type='button' class='closefile'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          </div>
          <a
            onclick='validatepoaupload(0)'
            class='btn btnsuccess'
            style={{ "margin-top": "20px" }}
          >
            Complete
          </a>{" "}
          <span id='uploading' style={{ display: "none" }}>
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
          <p>
            <br />
            Upload a document which shows your billing address, please ensure
            the document is clearly visible and it is dated within the last 6
            months (except for driving licenses).
          </p>
        </div>
        <div class='cardcontent'>
          <p>
            <i class='fas fa-times-circle' style={{ position: "relative" }}></i>
            &nbsp;<Link to='/members/todo'>Cancel Upload Proof of Address</Link>
            - Return to my Tutor Verification
          </p>
        </div>
      </div>
    </>
  );
};
export default ProofOfAddress;
