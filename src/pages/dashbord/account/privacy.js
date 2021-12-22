import TabsPages from "./tabsPage";

const Privacy = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Privacy</h2>
        </div>
        <TabsPages />
        <div class='tabcontent active'>
          <p>
            Here you can set your privacy settings. This section lets you edit
            how your profile page can be seen by other Tutor Ethiopia users. The{" "}
            <em>Profile Contents</em> section allows you to set what kind of
            personal information is displayed on your profile.
          </p>
          <p>
            <i class='fas fa-times-circle' style={{ position: "relative" }}></i>
            &nbsp;
            <a href='/members/cancel-account.asp'>
              Remove Your Tutor Ethiopia Account{" "}
            </a>
            - Click to remove your account permanently.
          </p>
          <form
            method='post'
            action='/members/privacy-complete.asp'
            name='privacyform'
            id='privacyform'
          >
            <input type='hidden' id='key' name='key' value='' />
            <input type='hidden' id='username' name='username' value='' />
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='directorylist'>List profile in directory: </label>
                <select
                  name='directorylist'
                  id='directorylist'
                  class='forminputtext'
                >
                  <option value='yes' selected='selected'>
                    Yes
                  </option>
                  <option value='no'>No</option>
                </select>
              </div>
              <div class='columnsplititem'>
                <label for='activeprofile'>Profile Status: </label>
                <select
                  name='activeprofile'
                  id='activeprofile'
                  class='forminputtext'
                >
                  &gt;
                  <option value='yes' selected='selected'>
                    Active
                  </option>
                  <option value='no'>Inactive</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Profile Contents</h2>
        </div>
        <div class='tabcontent active'>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='postcode'>Display postcode: </label>
              <select name='postcode' id='postcode' class='forminputtext'>
                <option value='yes'>Yes</option>
                <option value='no' selected='selected'>
                  No
                </option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='photo'>Display your photo: </label>
              <select name='photo' id='photo' class='forminputtext'>
                <option value='yes' selected='selected'>
                  Yes
                </option>
                <option value='no'>No</option>
              </select>
            </div>
          </div>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='history'>Store history: </label>
              <select name='history' id='history' class='forminputtext'>
                <option value='yes' selected='selected'>
                  Yes
                </option>
                <option value='no'>No</option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='showgrades'>Display grades on qualifications: </label>
              <select name='showgrades' id='showgrades' class='forminputtext'>
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Email/SMS Communication</h2>
        </div>
        <div class='tabcontent active'>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='txtenquiry'>SMS alerts for new enquiries </label>

              <select name='txtenquiry' id='txtenquiry' class='forminputtext'>
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='emailonview'>Email when my profile is viewed: </label>

              <select name='emailonview' id='emailonview' class='forminputtext'>
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
          </div>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='jobalerts'>Job alerts by email: </label>

              <select name='jobalerts' id='jobalerts' class='forminputtext'>
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='feedback'>Feedback request emails </label>

              <select name='feedback' id='feedback' class='forminputtext'>
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
          </div>

          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='notification'>Account notification emails </label>

              <select
                name='notification'
                id='notification'
                class='forminputtext'
              >
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='cancelnonurgent'>Cancel all non urgent emails </label>

              <select
                name='cancelnonurgent'
                id='cancelnonurgent'
                class='forminputtext'
              >
                <option value='1'>Yes</option>
                <option value='0' selected='selected'>
                  No
                </option>
              </select>
            </div>
          </div>

          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='lessonreminders'>Lesson reminders by emails </label>

              <select
                name='lessonreminders'
                id='lessonreminders'
                class='forminputtext'
              >
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='txtlessonreminders'>Lesson reminders by SMS </label>

              <select
                name='txtlessonreminders'
                id='txtlessonreminders'
                class='forminputtext'
              >
                <option value='1' selected='selected'>
                  Yes
                </option>
                <option value='0'>No</option>
              </select>
            </div>
          </div>
        </div>{" "}
      </div>

      <a
        onclick="document.getElementById('privacyform').submit();"
        class='btn btnsuccess'
        style={{ "margin-top": "10px" }}
      >
        Update{" "}
      </a>
    </>
  );
};

export default Privacy;
