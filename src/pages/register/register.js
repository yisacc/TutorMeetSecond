import HeaderContent from "./headerContent"
import AccountInformation from "./accountInformation/accountInfo"
import PersonalInformation from "./personalInformation/personalInformation"
import { useState } from "react"
import ProfileInformation from "./profileInformation/profileInformation"

const Register = () => {
  const [activeTab, setActiveTab] = useState("accountInfo")

  return (
    <>
      <HeaderContent />
      <div id='maincontentouter' class='TutorEthiopia-register'>
        <div id='maincontent'>
          <div id='tabbox'>
            <div
              class={
                activeTab === "accountInfo"
                  ? "tabitem tableftselected"
                  : "tabitem"
              }
            >
              <i class='fas fa-lock'></i>
              01. ACCOUNT INFO<span class='tabno mobno'>RMATION</span>
            </div>
            <div
              class={
                activeTab === "PERSONALInfo"
                  ? "tabitem tableftselected mobno"
                  : "tabitem mobno"
              }
            >
              <i class='far fa-user'></i>
              02. PERSONAL INFO<span class='tabno mobno'>RMATION</span>
            </div>
            <div
              class={
                activeTab === "PROFILEInfo"
                  ? "tabitem tablast tableftselected mobno"
                  : "tabitem tablast mobno"
              }
            >
              <i class='fas fa-briefcase'></i>
              03. PROFILE INFO<span class='tabno mobno'>RMATION</span>
            </div>
          </div>
          <div class='card' style={{ position: "relative", top: "-70px" }}>
            <div class='cardcontent' style={{ "margin-top": "20px" }}>
              {activeTab === "accountInfo" ? (
                <AccountInformation setActiveTab={setActiveTab} />
              ) : activeTab === "PERSONALInfo" ? (
                <PersonalInformation setActiveTab={setActiveTab} />
              ) : activeTab === "PROFILEInfo" ? (
                <ProfileInformation setActiveTab={setActiveTab} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register
