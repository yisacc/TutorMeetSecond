const EditProfile = () => {
  return (
    <>
      <div class='tabcontent active'>
        <p>
          Please complete the following information to help us build your
          profile so students can learn more about you.
        </p>
        <form
          method='post'
          action='/members/edit-info-complete.asp'
          name='signupform'
          id='signupform'
          class='mobtable'
        >
          <input type='hidden' name='section' value='profile' />
          <input
            type='hidden'
            name='openaccount'
            id='openaccount'
            value='yes'
          />
          <label for='comments'>Your Bio </label>
          <textarea
            class='forminputtextpad'
            rows='30'
            cols='11'
            id='comments'
            maxlength='6500'
            name='comments'
            style={{ height: "210px" }}
          >
            I am a talented software engineer with 2+ years of experiance
          </textarea>
          <label for='availability'>Your Availability </label>
          <textarea
            class='forminputtextpad'
            rows='30'
            cols='11'
            id='availability'
            maxlength='6500'
            name='availability'
            style={{ height: "210px" }}
          ></textarea>
          <label for='experience'>Your Experience </label>
          <textarea
            class='forminputtextpad'
            rows='30'
            cols='11'
            id='experience'
            name='experience'
            maxlength='6500'
            style={{ height: "210px" }}
          >
            1 year
          </textarea>
          <label for='onlineexperience'>
            To help us promote your profile to online students, tell us about
            your online teaching experience{" "}
          </label>
          <textarea
            class='forminputtextpad'
            maxlength='4500'
            rows='30'
            cols='11'
            id='onlineexperience'
            name='onlineexperience'
            style={{ height: "210px" }}
          ></textarea>
          <div class='columnsplit'>
            <div class='columnsplititem'>
              <label for='nativelanguage'>Native Language </label>
              <select
                name='nativelanguage'
                id='nativelanguage'
                class='forminputtextpad'
              >
                <option value='none' selected='selected'>
                  Select:
                </option>
                <option value='1'>English</option>
                <option value='none'>---------------------------</option>
                <option value='69'>Afrikaans</option>
                <option value='2'>Albanian</option>
                <option value='3'>Arabic</option>
                <option value='5'>Bangla</option>
                <option value='6'>Basque</option>
                <option value='7'>Bengali</option>
                <option value='8'>Bosnian</option>
                <option value='9'>Braille</option>
                <option value='10'>Bulgarian</option>
                <option value='11'>Cantonese</option>
                <option value='12'>Catalan</option>
                <option value='13'>Chinese</option>
                <option value='14'>Creole</option>
                <option value='15'>Croatian</option>
                <option value='16'>Czech</option>
                <option value='17'>Danish</option>
                <option value='18'>Dutch</option>
                <option value='1' selected='selected'>
                  English
                </option>
                <option value='21'>Estonian</option>
                <option value='22'>Farsi</option>
                <option value='23'>Finnish</option>
                <option value='24'>French</option>
                <option value='25'>Gaelic</option>
                <option value='26'>German</option>
                <option value='27'>Greek</option>
                <option value='28'>Gujarati</option>
                <option value='29'>Hebrew</option>
                <option value='30'>Hindi</option>
                <option value='31'>Hungarian</option>
                <option value='32'>Icelandic</option>
                <option value='33'>Indonesian</option>
                <option value='34'>Irish</option>
                <option value='35'>Italian</option>
                <option value='36'>Japanese</option>
                <option value='37'>Kashmiri</option>
                <option value='38'>Khmer</option>
                <option value='39'>Korean</option>
                <option value='70'>Latvian</option>
                <option value='41'>Lithuanian</option>
                <option value='42'>Malay</option>
                <option value='43'>Maltese</option>
                <option value='44'>Mandarin</option>
                <option value='45'>Mongolian</option>
                <option value='47'>Norwegian</option>
                <option value='48'>Persian</option>
                <option value='49'>Polish</option>
                <option value='50'>Portuguese</option>
                <option value='51'>Punjabi</option>
                <option value='52'>Romanian</option>
                <option value='53'>Russian</option>
                <option value='54'>Serbian</option>
                <option value='55'>Sign Language</option>
                <option value='56'>Slovak</option>
                <option value='57'>Slovenian</option>
                <option value='58'>Spanish</option>
                <option value='59'>Swahili</option>
                <option value='60'>Swedish</option>
                <option value='61'>Tamil</option>
                <option value='62'>Telugu</option>
                <option value='63'>Thai</option>
                <option value='64'>Turkish</option>
                <option value='65'>Ukrainian</option>
                <option value='66'>Urdu</option>
                <option value='67'>Vietnamese</option>
                <option value='68'>Welsh</option>
              </select>
            </div>
            <div class='columnsplititem'>
              <label for='distance'>Distance Willing to Travel </label>
              <select name='distance' id='distance' class='forminputtextpad'>
                <option value='0' selected='selected'>
                  Home Only
                </option>
                <option value='1'>1 mile</option>
                <option value='2'>2 miles</option>
                <option value='3'>3 miles</option>
                <option value='4'>4 miles</option>
                <option value='5'>5 miles</option>
                <option value='8'>8 miles</option>
                <option value='10'>10 miles</option>
                <option value='12'>12 miles</option>
                <option value='15'>15 miles</option>
                <option value='20'>20 miles</option>
                <option value='30'>30 miles</option>
                <option value='50'>50 miles</option>
              </select>
            </div>
          </div>
          <label>Enable Instant Tutoring?</label>
          <span class='faded'>
            No &nbsp;[<a href='/members/instant-tutoring.asp'>find out more </a>
            ]
          </span>
          <p>
            <b>*Field not required. </b>
            <br />
            <br />
            <a onclick='validate(signupform);' class='btn btnsuccess'>
              Save{" "}
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
export default EditProfile;
