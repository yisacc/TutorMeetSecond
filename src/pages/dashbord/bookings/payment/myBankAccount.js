const MyBankAccount = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>My Bank Account</h2>
        </div>
        <div class='cardcontent'>
          <p class='highlight'>
            We require your proof address before we can start paying you.{" "}
            <a href='/members/upload-poa.asp'>Upload proof of address</a>
          </p>
        </div>
        <div class='cardcontent'>
          <p>
            Please provide us your bank details so we are able to transfer your
            earnings to you.
          </p>
          <form
            method='post'
            action='/members/bookings-bank-complete.asp'
            id='signupform'
          >
            <div id='paybybank' style={{ display: "block" }}>
              <div class='columnsplit'>
                <div class='columnsplititem'>
                  <label for='fullname'>Account Holder Name </label>
                  <input
                    class='forminputtextpad'
                    name='fullname'
                    id='fullname'
                    maxlength='100'
                    type='text'
                    value=''
                  />
                  <label for='accountnumber'>Bank Account Number </label>
                  <input
                    class='forminputtextpad'
                    name='accountnumber'
                    id='accountnumber'
                    type='text'
                    value=''
                    pattern='[0-9]*'
                    maxlength='8'
                  />
                </div>
                <div class='columnsplititem'>
                  <label for='bankname'>Bank Name </label>
                  <input
                    class='forminputtextpad'
                    name='bankname'
                    id='bankname'
                    maxlength='100'
                    type='text'
                    value=''
                  />
                </div>
              </div>
            </div>

            <a onclick='validate(signupform);' class='btn btnsuccess'>
              Update
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyBankAccount;
