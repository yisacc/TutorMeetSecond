const MyOnlineSubject = () => {
  return (
    <>
      <div class='card'>
        <div id='onlinesubjectsblock'>
          <div class='cardheader'>
            <h2 class='cardtitle'>
              {" "}
              My Online Subjects&nbsp;&nbsp;
              <span style={{ "font-size": "12px" }}>
                &nbsp;&nbsp;
                <i
                  class='fas fa-lg fa-plus-circle'
                  style={{ position: "relative", left: "0px" }}
                ></i>
                &nbsp;<a href='/members/add-subject.asp'>Add a Subject</a>
              </span>
            </h2>
          </div>
          <div class='cardcontent'>
            <p class='alert'>
              To help us to promote your profile to online students please tell
              us about your&nbsp;
              <a href='/members/bookings-online-lessons.asp'>
                Online teaching experience here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyOnlineSubject;
