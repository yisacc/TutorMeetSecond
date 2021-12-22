const InformationAboutUser = () => {
  return (
    <>
      <div class='profileleftside mr-2' style={{ clear: "left" }}>
        <div id='profilesubjectheader'>
          <div
            id='subjecttabonetoone'
            class='subjecttabitem subjecttabitemselected'
          >
            <a href="javascript:searchboxshow('subjecttab' ,'onetoone')">
              In-person
            </a>
          </div>
        </div>
        <div class='card'>
          <div>
            <div id='subjectdefault' style={{ display: "block" }}>
              <div>
                <input
                  type='hidden'
                  value='0'
                  id='subjecttag1'
                  name='subjecttag1'
                />
                <input
                  type='hidden'
                  value='0'
                  id='subjecttag2'
                  name='subjecttag2'
                />
                <div class='cardtable tablewrap'>
                  <table class='table profilesubjectstattable'>
                    <tbody>
                      <tr>
                        <td
                          class='marksub'
                          style={{ width: "193px", background: "#fff" }}
                        ></td>
                        <td class='mobno'>
                          <strong>Primary</strong>
                        </td>
                        <td class='mobno'>
                          <strong>KS3</strong>
                        </td>
                        <td class='mobno'>
                          <strong>GCSE</strong>
                        </td>
                        <td class='mobno'>
                          <strong>A-Level</strong>
                        </td>
                        <td style={{ display: "none" }}></td>
                        <td class='mobno'>
                          <strong>Adult Learner</strong>
                        </td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                      </tr>
                      <tr>
                        <td class='marksub' width='193px'>
                          <a class='subjecttag' onclick="showcontent('',2)">
                            English
                          </a>
                        </td>
                        <td>£25</td>
                        <td class='mobno fadedrate'>-</td>
                        <td class='mobno fadedrate'>-</td>
                        <td class='mobno fadedrate'>-</td>
                        <td style={{ display: "none" }}></td>
                        <td>£25</td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                        <td style={{ display: "none" }}></td>
                      </tr>
                      <tr
                        class='mobno subjectdata'
                        id='targetrow2'
                        style={{ display: "none" }}
                      >
                        <td colspan='6' height='0'>
                          <div id='target2'>
                            <p>yes</p>
                            <p>
                              See more:{" "}
                              <a href='/english.asp'>English Tutors</a>,{" "}
                              <a href='/subjects/english/levels/adult-learner/'>
                                Adult Learner English Tutors
                              </a>
                              ,{" "}
                              <a href='/subjects/english/levels/primary/'>
                                Primary English Tutors
                              </a>
                            </p>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class='mobyes'>
                <p style={{ marginTop: "30px" }}>
                  Related Links: <a href='/english.asp'>English Tutors</a>,{" "}
                  <a href='/subjects/english/levels/adult-learner/'>
                    Adult Learner English Tutors
                  </a>
                  ,{" "}
                  <a href='/subjects/english/levels/primary/'>
                    Primary English Tutors
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id='subjectonline' style={{ display: "none" }}></div>
        </div>
        <div id='subjectlessons' style={{ display: "none" }}>
          <div class='fullbluepanelcontent panelcontentwide'>
            <p class='subjectblock'>
              <strong style={{ color: "#4f76af" }}>
                <a
                  style={{ cursor: "pointer" }}
                  id='lessonbutton1'
                  onclick="toggletextdisplay('lessonsubject1', 'lessonbutton1');"
                >
                  <img
                    src='/images/plus.gif'
                    alt='+ '
                    style={{ position: "relative", top: "2px" }}
                  />
                </a>
                &nbsp;
                <a
                  title='Click to Expand / Collapse '
                  style={{ cursor: "pointer" }}
                  onclick="toggletextdisplay('lessonsubject1', 'lessonbutton1');"
                >
                  Maths
                </a>
              </strong>{" "}
              (
              <span class='fadedrate' style={{ fontStyle: "normal" }}>
                primary
              </span>
              )
            </p>
            <div id='lessonsubject1' style={{ display: "none" }}>
              <p style={{ marginLeft: "20px" }}>
                <img src='/arrow-right2.gif' alt='* ' />
                &nbsp;<strong>Lesson Details </strong>: 60min (1 time(s) per
                week)
                <br />
                &nbsp;&nbsp;<strong>Dates </strong>: - <br />
                &nbsp;&nbsp;<strong>Location </strong>: Westham
                <br />
                &nbsp;&nbsp;<strong>Lesson Cost </strong>: £25
                <br />
                <br />
                <strong>Lesson Information </strong>: Tuition provided for
                primary subjects including English,Maths etc. All areas of the
                curriculum are covered by an experienced primary school teacher.
                Topics include Comprehensions, Punctuation, short and long hand
                writing and all topics in Maths. Dont hesitate, contact me today
                for guaranteed results!
              </p>
            </div>
          </div>
        </div>
        <div class='card'>
          <div class='cardheader'>
            <h2 class='cardtitle'>Information about Mary </h2>
          </div>
          <div class='cardcontent'>
            <p>
              I am a primary teacher who has been teaching in a primary school
              in the U.K. for the last 7 years. I have a 120 hour TEFL
              qualification also which allows me to teach English as a foreign
              language to people whose first language is not English.
              <br />
              <br /> I am living in the Stratford area of East London. I am
              willing to provide tuition in English and also in all primary
              subjects in KS1/KS2 levels and for adult English learners. <br />
              <br />I offer a competitive rate: £24 per hour or 2 hours for £43
              including notes and homework. <br />
              Please contact me to ask for references/if you have any questions.
              I am only doing online lesssons for Summer 2020.
            </p>
            <p>
              <strong style={{ color: "#03a4ed" }}>Availability: </strong>daily
              after 12 noon
            </p>
            <p>
              <strong style={{ color: "#03a4ed" }}>Willing to travel: </strong>{" "}
              Home Only
            </p>
            <p>
              <strong style={{ color: "#03a4ed" }}>Experience: </strong>I have
              experience doing 1 to 1 grinds at pupils homes and online.
            </p>
            <a
              class='btn btnsuccess  mobmaxwidth '
              rel='nofollow'
              href="javascript:showenquiryform('Mary','3176236120408','','')"
            >
              Contact this Tutor
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default InformationAboutUser
