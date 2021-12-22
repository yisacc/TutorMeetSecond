const HeadlineView = () => {
  return (
    <>
      <div class='tabcontent active'>
        <form
          method='post'
          action='/members/edit-headline-complete.asp'
          name='headlineform'
          id='headlineform'
        >
          <input type='hidden' name='section' value='profile' />

          <p>
            A headline is shown to students in the search results before they
            click onto your profile. By default, we display the first 140
            characters of your "<em>comments about me</em>" text. By completing
            a headline below it allows customisable and longer text (up to{" "}
            <strong>200 characters long</strong>) to entice our students to
            click your profile.
          </p>
          <div class='headlineblock1' id='headlineblock1'>
            <input type='hidden' name='headlineid1' id='headlineid1' value='' />
            <input
              type='hidden'
              name='headlinedel1'
              id='headlinedel1'
              value='0'
            />
            <h4>Headline 1</h4>
            <div
              class='deleteheadline delete1'
              id='delete1'
              onclick='javascript:delheadline(1)'
            >
              Delete
            </div>
            <textarea
              class='forminputtextpad'
              rows='30'
              cols='11'
              id='headline1'
              maxlength='200'
              name='headline1'
              style={{
                "font-size": "11px",
                width: "97%",
                height: "80px",
                "font-size": "14px",
              }}
              onkeyup='updatecount()'
            ></textarea>

            <div style={{ "padding-top": "20px" }} id='showmore2'>
              &nbsp;&nbsp;
              <i
                class='fas fa-plus-circle'
                style={{ position: "relative", left: "0px", top: "2px" }}
              ></i>
              &nbsp;
              <a href='javascript:showheadline(2)'>Add Another Headline </a>
            </div>
          </div>
          <div
            class='headlineblock2'
            id='headlineblock2'
            style={{ display: "none" }}
          >
            <input type='hidden' name='headlineid2' id='headlineid2' value='' />
            <input
              type='hidden'
              name='headlinedel2'
              id='headlinedel2'
              value='0'
            />
            <h4>Headline 2</h4>
            <div
              class='deleteheadline delete2'
              id='delete2'
              onclick='javascript:delheadline(2)'
            >
              Delete
            </div>
            <textarea
              class='forminputtextpad'
              rows='30'
              cols='11'
              id='headline2'
              maxlength='200'
              name='headline2'
              style={{
                "font-size": "11px",
                width: "97%",
                height: "80px",
                "font-size": "14px",
              }}
              onkeyup='updatecount()'
            ></textarea>

            <div style={{ "padding-top": "20px" }} id='showmore3'>
              &nbsp;&nbsp;
              <i
                class='fas fa-plus-circle'
                style={{ position: "relative", left: "0px", top: "2px" }}
              ></i>
              &nbsp;
              <a href='javascript:showheadline(3)'>Add Another Headline </a>
            </div>
          </div>
          <div
            class='headlineblock3'
            id='headlineblock3'
            style={{ display: "none" }}
          >
            <input type='hidden' name='headlineid3' id='headlineid3' value='' />
            <input
              type='hidden'
              name='headlinedel3'
              id='headlinedel3'
              value='0'
            />
            <h4>Headline 3</h4>
            <div
              class='deleteheadline delete3'
              id='delete3'
              onclick='javascript:delheadline(3)'
            >
              Delete
            </div>
            <textarea
              class='forminputtextpad'
              rows='30'
              cols='11'
              id='headline3'
              maxlength='200'
              name='headline3'
              style={{
                "font-size": "11px",
                width: "97%",
                height: "80px",
                "font-size": "14px",
              }}
              onkeyup='updatecount()'
            ></textarea>

            <div style={{ "padding-top": "20px" }} id='showmore4'>
              &nbsp;&nbsp;
              <i
                class='fas fa-plus-circle'
                style={{ position: "relative", left: "0px", top: "2px" }}
              ></i>
              &nbsp;
              <a href='javascript:showheadline(4)'>Add Another Headline </a>
            </div>
          </div>
          <div
            class='headlineblock4'
            id='headlineblock4'
            style={{ display: "none" }}
          >
            <input type='hidden' name='headlineid4' id='headlineid4' value='' />
            <input
              type='hidden'
              name='headlinedel4'
              id='headlinedel4'
              value='0'
            />
            <h4>Headline 4</h4>
            <div
              class='deleteheadline delete4'
              id='delete4'
              onclick='javascript:delheadline(4)'
            >
              Delete
            </div>
            <textarea
              class='forminputtextpad'
              rows='30'
              cols='11'
              id='headline4'
              maxlength='200'
              name='headline4'
              style={{
                "font-size": "11px",
                width: "97%",
                height: "80px",
                "font-size": "14px",
              }}
              onkeyup='updatecount()'
            ></textarea>

            <div style={{ "padding-top": "20px" }} id='showmore5'>
              &nbsp;&nbsp;
              <i
                class='fas fa-plus-circle'
                style={{ position: "relative", left: "0px", top: "2px" }}
              ></i>
              &nbsp;
              <a href='javascript:showheadline(5)'>Add Another Headline </a>
            </div>
          </div>
          <div
            class='headlineblock5'
            id='headlineblock5'
            style={{ display: "none" }}
          >
            <input type='hidden' name='headlineid5' id='headlineid5' value='' />
            <input
              type='hidden'
              name='headlinedel5'
              id='headlinedel5'
              value='0'
            />
            <h4>Headline 5</h4>
            <div
              class='deleteheadline delete5'
              id='delete5'
              onclick='javascript:delheadline(5)'
            >
              Delete
            </div>
            <textarea
              class='forminputtextpad'
              rows='30'
              cols='11'
              id='headline5'
              maxlength='200'
              name='headline5'
              style={{
                "font-size": "11px",
                width: "97%",
                height: "80px",
                "font-size": "14px",
              }}
              onkeyup='updatecount()'
            ></textarea>
          </div>

          <br />
          <a onclick='validate(headlineform);' class='btn btnsuccess'>
            Save{" "}
          </a>
          <p>
            <em>
              Creating more headlines will improve your visibility as we will
              automatically choose the headline which gets the most clicks.
            </em>
          </p>

          <span id='characters'>
            <span>
              <p>
                <b>
                  <br />
                  <br />
                </b>
              </p>
            </span>
          </span>
        </form>
      </div>
      <b></b>
    </>
  );
};
export default HeadlineView;
