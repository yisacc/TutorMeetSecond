import Form from "../../profilePhoto/Form";

const AddSubjectView = () => {
  return (
    <div class='card'>
      <div class='cardheader'>
        <h2 class='cardtitle'>Add a Subject</h2>
      </div>
      <div class='cardcontent'>
        <p>
          Here you can add a subject, these will be viewable in your profile. It
          is important that you add each subject you wish to teach otherwise
          students will not be able to find you while searching.
        </p>
        <p class='highlight' style={{ "font-size": "13px" }}>
          Please do not enter email addresses/urls/websites/home addresses (or
          any other <u>information that can allow contact</u>) within your
          profile. Users who do so will immediately be removed from Tutor
          Ethiopia.
        </p>
        <Form />
        <a
          onclick='validateaddsubject(signupform,0);'
          class='btn btnsuccess'
          style={{ "margin-top": "20px" }}
        >
          Add Subject{" "}
        </a>
        <p style={{ "margin-top": "20px" }}>
          <i class='fas fa-times-circle' style={{ position: "relative" }}></i>
          &nbsp;<a href='/members/my-subjects.asp'>Cancel Add Subject</a>-
          Return to My Subjects
        </p>
      </div>
    </div>
  );
};
export default AddSubjectView;
