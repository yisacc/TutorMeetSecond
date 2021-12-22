const CommisionRate = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Commission Rate</h2>
        </div>
        <div class='cardcontent'>
          <p>
            Your current commission rate is 25%. When you reach 250 hours you
            have chosen to keep your profile and students rate the same. So at
            this point we will increase your rate.
          </p>
          <p>
            If you would like to offer this discount to your students please
            update below to "Discount Student Rate"
          </p>
          <form
            method='post'
            action='/members/bookings-commbandchange.asp'
            id='commbandchangeform'
          >
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='commbandchange'>
                  What would you like us to do when you reach 250 hours?
                </label>
                <select name='commbandchange' id='commbandchange'>
                  <option value='discountstudent'>Discount Student Rate</option>
                  <option selected='' value='increasetutor'>
                    Increase my Rate
                  </option>
                </select>
              </div>
              <div class='columnsplititem'>
                <label>&nbsp;</label>
              </div>
            </div>
            <a onclick='commbandchangeform.submit();' class='btn btnsuccess'>
              Update
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommisionRate;
