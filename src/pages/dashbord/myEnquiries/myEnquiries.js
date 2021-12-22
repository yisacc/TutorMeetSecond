const MyEnquiries = () => {
  return (
    <>
      <form
        action='/members/my-enquiries.asp'
        style={{ float: "right", width: "200px" }}
      >
        <select
          class='select selectview'
          id='enquirytype'
          name='enquirytype'
          onchange='this.form.submit()'
        >
          <option value='open'>Open Enquires</option>
          <option value='closed'>Closed Enquires</option>
        </select>
      </form>
      <div class='card' style={{ "margin-top": "30px", clear: "right" }}>
        <div class='cardheader'>
          <i
            class='fas fa-lg fa-plus-circle'
            style={{ position: "relative", left: "0px" }}
          ></i>
          &nbsp;&nbsp;
          <strong>
            To make a new enquiry please <a href='/tutor-search.asp'>search</a>{" "}
            and contact via their profile page.{" "}
          </strong>
        </div>
        <div class='cardtable tablewrap'>
          <p></p>
          <div class='cardcontent'>
            <div class='important'>You have no open enquiries </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyEnquiries;
