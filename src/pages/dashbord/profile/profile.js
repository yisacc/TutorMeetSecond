import { useState } from "react";
import EditProfile from "./editProfile/editProfile";
import Qualifications from "./qualifications/qualifications";
import MyAvailablity from "./availability/myAvailablity";
import Headlines from "./headlines/headlines";
import FoundMe from "./foundMe/foundMe";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("EditProfile");
  const handleClick = tabName => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Profile Information </h2>
        </div>
        <div class='tabspages'>
          <a
            class={activeTab === "EditProfile" ? "active" : ""}
            onClick={() => handleClick("EditProfile")}
          >
            <span class='mobno'>Edit</span>&nbsp;Profile
          </a>
          <a
            class={activeTab === "Qualifications" ? "active" : ""}
            onClick={() => handleClick("Qualifications")}
          >
            Qualifications <strong style={{ color: "#f00" }}></strong>
          </a>
          <a
            class={activeTab === "Availability" ? "active" : ""}
            onClick={() => handleClick("Availability")}
          >
            Availability
          </a>
          <a
            class={activeTab === "Headlines" ? "active" : ""}
            onClick={() => handleClick("Headlines")}
          >
            Headlines
          </a>
          <span class='mobno'>
            <a
              class={activeTab === "FoundMe" ? "active" : ""}
              onClick={() => handleClick("FoundMe")}
            >
              Who's Found Me?
            </a>
          </span>
        </div>
        <p style={{ clear: "both", margin: 0, padding: 0 }}></p>
        {activeTab === "EditProfile" ? (
          <EditProfile />
        ) : activeTab === "Qualifications" ? (
          <Qualifications />
        ) : activeTab === "Availability" ? (
          <MyAvailablity />
        ) : activeTab === "FoundMe" ? (
          <FoundMe />
        ) : activeTab === "Headlines" ? (
          <Headlines />
        ) : null}
      </div>
    </>
  );
};
export default Profile;
