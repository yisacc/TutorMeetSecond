import SideBar from "./sideBar";
import Routes from "./routes";
import { Link } from "react-router-dom";
const TheLayout = () => {
  return (
    <>
      <div
        class='dashbord main-banner-dashbord wow fadeIn'
        id='top'
        data-wow-duration='1s'
        data-wow-delay='0.5s'
      >
        <div id='maincontentouter'>
          <div id='maincontent'>
            <p id='location'>
              <Link href='/'> Tutor Ethiopia</Link>
            </p>
            <p class='alert'>
              You currently have not selected any Subjects!
              <br />
              Without subjects you won't be found in searches. Please{" "}
              <Link to='/members/add-subject'>Add a Subject</Link> to continue.{" "}
            </p>
            <h1>Dashboard</h1>
            <div class='contentrow row'>
              <SideBar />
              <div class='contentmain'>
                <Routes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TheLayout;
