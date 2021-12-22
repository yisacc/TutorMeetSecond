import { Link } from "react-router-dom";
import MyOnlineSubject from "./myOnlineSubject";

const MySubject = () => {
  return (
    <>
      <div class='card'>
        <div id='subjectsblock'>
          <div class='cardheader'>
            <h2 class='cardtitle'>My Subjects</h2>
            &nbsp;&nbsp;
            <span style={{ "font-size": "12px" }}>
              &nbsp;&nbsp;
              <i
                class='fas fa-lg fa-plus-circle'
                style={{ position: "relative", left: "0px" }}
              ></i>
              &nbsp;<Link to='/members/add-subject'>Add a Subject </Link>
            </span>
          </div>
          <div class='cardcontent'>
            <div class='alert'>
              You currently have not selected any Subjects!
              <br />
              Without subjects you won't be found in searches. Please{" "}
              <a href='/add-subject.asp'>Add a Subject</a> to continue.{" "}
            </div>
          </div>
        </div>
      </div>
      <MyOnlineSubject />
    </>
  );
};
export default MySubject;
