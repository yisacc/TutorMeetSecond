const AccountAlert = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader '>
          <h3 class='cardtitle'>Account Alerts</h3>
        </div>
        <div class='tabcontent active accountalerts'>
          <p>
            <i class='fas fa-graduation-cap svgred'></i>
            You have not provided information about subjects - you can not be
            found without subjects{" "}
            <a href='/members/add-subject.asp'>
              <span class='infowarn'>Add Subjects</span>
            </a>
          </p>
          <p>
            <i class='fas fa-user-edit svgred'></i>
            You have not uploaded any verification documents or references{" "}
            <a href='/members/my-references.asp'>
              <span class='infowarn'>Submit Verification</span>
            </a>
          </p>
          <p>
            <i class='fas fa-check svgred'></i>
            You do not have an Enhanced DBS, improve your profile visibility by
            either uploading a current certificate or starting a new DBS
            application{" "}
            <a href='/members/dbs-application.asp'>
              <span class='infowarn'>Apply for DBS</span>
            </a>{" "}
            <a href='/members/upload-crb.asp'>
              <span class='infowarn'>Upload DBS</span>
            </a>
          </p>
          <p>
            <i class='fas fa-user-edit svgred'></i>
            You have not uploaded any proof of address documents{" "}
            <a href='/members/upload-poa.asp'>
              <span class='infowarn'>Submit Proof of Address</span>
            </a>
          </p>
          <p>
            <i class='fas fa-user-edit svgred'></i>
            You have not submitted any qualifications{" "}
            <a href='/members/my-qualifications.asp'>
              <span class='infowarn'>Submit Qualifications</span>
            </a>
          </p>
          <p>
            <i class='fas fa-user-edit svgred'></i>
            Your availability has not been updated within the last 7 days, it is
            important that your availability is updated on a weekly basis{" "}
            <a href='/members/availability.asp'>
              <span class='infowarn'>Update your availability</span>
            </a>
          </p>
          <p>
            <i class='fas fa-camera svgred'></i>
            You haven't uploaded a profile photo, profiles with photos receive
            more interest from students{" "}
            <a href='/members/upload-images.asp'>
              <span class='infowarn'>Fix This</span>
            </a>
          </p>
          <p>
            <i class='fas fa-question-circle svgred'></i>
            Your postcode was not recognised, you will not be found in searches{" "}
            <a href='/members/edit-info-personal.asp'>
              <span class='infowarn'>Fix This</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default AccountAlert;
