import TabsPages from "./tabsPage";

const Password = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Password </h2>
        </div>

        <TabsPages />

        <div class='tabcontent active'>
          <form
            method='post'
            action='/members/edit-info-complete.asp'
            name='signupform'
            id='signupform'
            class='mobtable'
          >
            <input type='hidden' name='section' value='account' />
            <label>Username </label>
            <span class='faded'>yisacc1</span>

            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='password'>Current Password </label>
                <input
                  class='forminputtextpad'
                  type='password'
                  id='currentpassword'
                  name='currentpassword'
                  style={{ width: "390px" }}
                  size='23'
                  maxlength='100'
                />
              </div>
              <div></div>
            </div>

            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='password'>New Password </label>
                <input
                  class='forminputtextpad'
                  type='password'
                  id='password'
                  name='password'
                  style={{ width: "390px" }}
                  size='23'
                  maxlength='100'
                />
              </div>

              <div class='columnsplititem'>
                <label for='password2'>Confirm New Password </label>
                <input
                  class='forminputtextpad'
                  type='password'
                  id='password2'
                  name='password2'
                  style={{ width: "390px" }}
                  maxlength='100'
                />
              </div>
            </div>

            <a onclick='validate(signupform);' class='btn btnsuccess'>
              Save{" "}
            </a>
          </form>
        </div>
      </div>
    </>
  );
};
export default Password;
