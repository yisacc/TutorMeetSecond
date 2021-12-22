import Filter from "./filters";
import tutorImage from "../../../assets/images/tutors/280X280/754992997646380942305.jpg";

const Results = () => {
  return (
    <>
      <div id='maincontentouter'>
        <div id='maincontent' style={{ "margin-top": 0, "padding-top": 0 }}>
          <div id='filterinfo'>
            <div id='filterheader' style={{ display: "flex" }}>
              <div id='filtertitle'>
                <div id='filtertitle1'>
                  <strong>
                    <a href='javascript:hidefilters()'>Filters</a>
                  </strong>
                  <span>
                    <a href='javascript:hidefilters()'>
                      <i class='fas fa-chevron-down'></i>
                    </a>
                  </span>
                </div>
                <div id='filtertitle2'>
                  <a href='javascript:resetall()'>RESET ALL</a>
                </div>
              </div>
              <div id='searchinfo'>
                <span id='resultscount'>&nbsp;</span> &nbsp;
              </div>
            </div>
            <div id='sortbycon'>
              <div style={{ "margin-right": "20px", color: "#000" }}>
                Sort By
              </div>
              <div>
                <select
                  style={{ width: "185px" }}
                  name='sortby'
                  onchange='getresults();'
                  class='forminputtext'
                  id='sortby'
                >
                  <option value='rank' selected='selected'>
                    TutorEthiopia Rank
                  </option>
                  <option value='distance'>Distance</option>
                  <option value='lastlogin'>Last Login Date</option>
                  <option value='registereddate'>Registered Date</option>
                </select>
              </div>
            </div>
          </div>
          <div id='searchresultscontainer'>
            <Filter />
            <div id='resultblockcontainer'>
              <p style={{ margin: 0, padding: 0, "font-size": "4px" }}></p>
              <div
                class='usercard2'
                onclick="location.href='/users/ruthteach/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/ruthteach/'>
                    <img alt='Ruth' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a style={{ color: "#444" }} href='/users/ruthteach/'>
                            Ruth
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>4.5</strong>{" "}
                        <span style={{ color: "#777" }}>(20 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'></div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>125 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Mathematics GCSE - help with getting your grades up!
                      English GCSE - I`ve read all the books for GCSE from
                      Dickens to Conan Doyle! Online lessons given.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Burton On Trent, Staffordshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          31
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          252
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>12 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 1 hour</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>10 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/5818994402885/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/5818994402885/'>
                    <img alt='Adam' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/5818994402885/'
                          >
                            Adam
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(12 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>
                        (Adult Learner, Primary, KS3, GCSE, A-Level and Degree)
                      </small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>140 - 150</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Recently graduated with a Masters in Mathematics. Adam has
                      a wide experience of teaching and tutoring all ages and
                      abilities.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>, Sussex
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>6
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          57
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 14 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>6 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/mattih/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/mattih/'>
                    <img alt='Matti' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a style={{ color: "#444" }} href='/users/mattih/'>
                            Matti
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>(Adult Learner, Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£27.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      KS3, GCSE, and Adult Learner Computer Science &amp; Python
                      tutor. Experienced, fully qualified, and available online
                      at a time that suits you. I also provide free support...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Morecambe, Lancashire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          12
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          114
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>20 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 36 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>13 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/7549929976463/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/7549929976463/'>
                    <img alt='Virender' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/7549929976463/'
                          >
                            Virender
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(37 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(A-Level and Degree)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 - £50</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I have taught Mathematics and Statistics at Advanced,
                      Foundation and University levels to students in the FE and
                      HE sector. At the Advanced level, I have tutored stu...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          61
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          692
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>3 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 5 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/2649001836776/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/2649001836776/'>
                    <img alt='Jenni' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/2649001836776/'
                          >
                            Jenni
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(18 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£32 - £40</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am a highly qualified and experienced maths teacher
                      building students confidence and making maths enjoyable. I
                      am passionate about making a significant impact in all...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Milton Keynes, Buckinghamshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          20
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          380
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 3 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>24 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1198414921760/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1198414921760/'>
                    <img alt='Dalia' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1198414921760/'
                          >
                            Dalia
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(18 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£32.40 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Fully qualified and experienced teacher offering tuition
                      in English, German and 11+ entrance exams. Educated at
                      Universities of Oxford and St Andrews, with very stron...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Leeds, Yorkshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          26
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          704
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>3 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 4 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>6 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/2766152977943/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/2766152977943/'>
                    <img alt='Samia' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/2766152977943/'
                          >
                            Samia
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(25 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 - £43.75</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Professional High Calibre Teaching ~11+ Specialist for
                      elite grammar schools ~ GCSE &amp; A Level English, Maths,
                      Business Studies, Psychology ~ Specialist tutorials for
                      U...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Bury, Lancashire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          12
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          321
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>30 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 17 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>3 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/2921305060386/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/2921305060386/'>
                    <img alt='Lauren' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/2921305060386/'
                          >
                            Lauren
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(8 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary and KS3)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£33 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am an experienced, friendly and passionate tutor. I have
                      experience teaching all primary and secondary age groups
                      for Maths and English, including SATS preparation.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Great Denham, Bedford, Bedfordshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          18
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          392
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 10 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/9557942509651/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/9557942509651/'>
                    <img alt='Paul' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/9557942509651/'
                          >
                            Paul
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(15 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£42 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Update May 2021 Currently considering new students for the
                      coming academic year, especially students currently in
                      years 10 or 12. Also willing to help year 11 student...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Bristol, Avon
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          17
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          319
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 8 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>6 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4167025446891/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4167025446891/'>
                    <img alt='Rex' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4167025446891/'
                          >
                            Rex
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(29 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>
                        (Adult Learner, Primary, KS3, GCSE and A-Level)
                      </small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£72 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      No. 1 Maths, Physics, and Chemistry Tutor (Primary to
                      A-Level). Researched under 2019 Chemistry Nobel Prize
                      winner. Guaranteed success.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Malmesbury, Wiltshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          34
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          550
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>50 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 31 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>10 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1053608095645/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1053608095645/'>
                    <img alt='Ali' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1053608095645/'
                          >
                            Ali
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(13 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>(Adult Learner, Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£19 - £25</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Qualified, experienced, enthusiastic, patient, caring and
                      friendly tutor in both Maths and English. Currently
                      following government and tutoring agency guidelines by
                      tu...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Southsea, Hampshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          26
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          408
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 4 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>17 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/7421914696693/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/7421914696693/'>
                    <img alt='Safa' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/7421914696693/'
                          >
                            Safa
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(12 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£30 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      My name is Safa and I am a fully qualified teacher (QTS
                      status). Qualifications &amp; Experiences: - QTS
                      (Qualified Teacher Status) - PGCE Primary with Mathematics
                      S...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Edgware, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          21
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          268
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 56 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>21 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1410206913948/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1410206913948/'>
                    <img alt='Ruth' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1410206913948/'
                          >
                            Ruth
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(15 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£32.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am available for private tuition in English and
                      Mathematics for pupils of any primary school age. I can
                      teach English and Mathematics from EYFS (Reception Year)
                      thr...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Helston, Cornwall
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          10
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          147
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 8 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>5 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/5977822899818/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/5977822899818/'>
                    <img alt='Alan' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/5977822899818/'
                          >
                            Alan
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(15 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£27.50 - £37.50</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Experienced Maths and Science Tutor eager to help. Able to
                      teach all three sciences and maths at GCSE and A level
                      Physics.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Stoke On Trent, Staffordshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>9
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          205
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 1 hour</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>4 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4732183575630/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4732183575630/'>
                    <img alt='Andrew' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4732183575630/'
                          >
                            Andrew
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(14 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Qualified secondary teacher of maths and science up to
                      KS5. Currently working at a secondary school teaching
                      science KS4 and physics at KS5.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Birmingham, West Midlands
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          23
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          438
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 1 hour</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>18 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/6201771855354/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/6201771855354/'>
                    <img alt='Janette' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/6201771855354/'
                          >
                            Janette
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(12 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'></div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£31.25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Outstanding Maths teacher offering GCSE, KS3 and KS2 Maths
                      tuition. 30 plus years of teaching with excellent track
                      record.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Poynton, Cheshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          20
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          360
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>8 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 44 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>4 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/3197671532630/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/3197671532630/'>
                    <img alt='Amy' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/3197671532630/'
                          >
                            Amy
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(7 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I want to make a difference in the formative years of a
                      child`s development. I hope tutoring will inspire children
                      to become confident individuals in their learning an...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Bishop`s Stortford, Essex
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          12
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          328
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 7 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>15 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/7569461226463/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/7569461226463/'>
                    <img alt='Lucilla' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/7569461226463/'
                          >
                            Lucilla
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(12 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£43.75 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Qualified ONLINE tutor specialising in Early Years and
                      Primary. I’m a passionate, enthusiastic and energetic
                      primary school teacher and have taught in London for...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          14
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          155
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 53 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>23 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4411929011344/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4411929011344/'>
                    <img alt='Sean' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4411929011344/'
                          >
                            Sean
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(13 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'></div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I have a first class degree and PhD in mathematics and am
                      tremendously enthusiastic about the subject. I love
                      helping others to understand more and make mathematics
                      ac...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>, Yorkshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          23
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          258
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>5 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 4 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>3 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1087811863422/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1087811863422/'>
                    <img alt='kathyn' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1087811863422/'
                          >
                            kathyn
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(8 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I recently retired from teaching maths at an outer London
                      Grammar School but have since returned to teaching on a
                      part-time supply baisis. Over the course of my teachi...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Sevenoaks, Kent
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          26
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          233
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 2 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>15 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4491274714469/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4491274714469/'>
                    <img alt='Joanne' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4491274714469/'
                          >
                            Joanne
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(10 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Adult Learner, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£30 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I live in Bedford with my husband and two teenage sons. I
                      can offer KS2 English and Maths, KS3 and GCSE/iGCSE Maths
                      and Functional Skills level 1 and 2. I can also he...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Bedford, Bedfordshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          28
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          571
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>5 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 10 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/7048342585563/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/7048342585563/'>
                    <img alt='Liz' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/7048342585563/'
                          >
                            Liz
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(14 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£48 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I can offer the following subjects and levels: - English
                      tuition at KS2, KS3, GCSE, A-Level, and degree level. -
                      11+ tuition (including English and Maths). - Academ...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Manchester, Lancashire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          28
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          579
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>5 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 10 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>22 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1032978212833/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1032978212833/'>
                    <img alt='Ruth' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1032978212833/'
                          >
                            Ruth
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(14 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£48 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      *Now taking bookings for June 2021 onwards* Cambridge
                      Natural Sciences graduate and qualified teacher with 10
                      years` experience, available to tutor A level physics
                      and...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Enfield, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          23
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          418
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>3 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 2 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>23 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4184115290641/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4184115290641/'>
                    <img alt='David' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4184115290641/'
                          >
                            David
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>4.5</strong>{" "}
                        <span style={{ color: "#777" }}>(13 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>(Adult Learner, Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£35 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Gain Success, confidence and understanding. Find out what
                      you can really achieve. Learning that lasts!
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Bury St Edmunds, Suffolk
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          16
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          198
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>30 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 20 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/9105716109275/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/9105716109275/'>
                    <img alt='Paul' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/9105716109275/'
                          >
                            Paul
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(4 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£31.25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Experienced ex-Primary School Deputy Headteacher currently
                      teaching part-time. Happy to Tutor ages 6-12 and help
                      children catch up and prepare for SATS and 11+ in bot...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Eastleigh, Hampshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>8
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          203
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 29 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>13 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/8319108247756/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/8319108247756/'>
                    <img alt='Kas' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/8319108247756/'
                          >
                            Kas
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(8 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£40 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Secondary school and A-level maths teacher recently turned
                      full time tutor due to Covid. Aware of students` needs
                      through experience and great knowledge of the curricu...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          14
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          151
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 36 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>5 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/6977572798728/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/6977572798728/'>
                    <img alt='Ellie' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/6977572798728/'
                          >
                            Ellie
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(4 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'></div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£30 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I have more than twenty years` experience as a class
                      teacher and tutor. I particularly enjoy working with
                      children who are anxious or need some extra help to
                      fulfil...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Bideford, Devon
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>3
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          98
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 10 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/9864019513130/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/9864019513130/'>
                    <img alt='Lisa' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/9864019513130/'
                          >
                            Lisa
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(6 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'></div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I have a very patient and encouraging nature, and am known
                      for building learners confidence levels in addition to
                      engaging people with the subject. I cover all ar...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Preston, Lancashire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          10
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          97
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 2 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4873544335365/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4873544335365/'>
                    <img alt='Vicki' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4873544335365/'
                          >
                            Vicki
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(6 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£31.25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                </div>
              </div>

              <div
                class='usercard2'
                onclick="location.href='/users/2583170294761/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/2583170294761/'>
                    <img alt='James' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/2583170294761/'
                          >
                            James
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(14 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(KS3, GCSE, A-Level and Degree)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£29.50 - £32</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      *****ONLINE TUTORIALS - Corona virus update: I also offer
                      online tutorials using skype and online collaborative
                      whiteboard software. With this we can simultaneously wr...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          32
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          1074
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>5 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>4 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/4208689093589/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/4208689093589/'>
                    <img alt='Anucia' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/4208689093589/'
                          >
                            Anucia
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(10 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>(Adult Learner, Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£20 - £30</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Hi, My name is Anu, and I am a qualified full-time Maths
                      teacher with six years of teaching experience for various
                      levels from KS2 to GCSE (9-1) covering relevant...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Ilford, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          12
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          192
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>5 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/8700842022895/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/8700842022895/'>
                    <img alt='Sylvia' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/8700842022895/'
                          >
                            Sylvia
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(5 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£45 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      "I help students improve their grades and pass GCSE
                      science, through personalised 1:1 face to face and online
                      science tutoring." A Qualified Science Teach...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Walthamstow, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>4
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          52
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 12 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>22 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/5735208153724/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/5735208153724/'>
                    <img alt='Edie' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/5735208153724/'
                          >
                            Edie
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£19 - £25</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Secondary Maths teacher with up to date tutoring
                      experience ranging from primary to GCSE level. During
                      lockdown, all lessons will be delivered via zoom but when
                      restri...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Pontyclun, Wales
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>6
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          84
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 21 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>16 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/3381475567817/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/3381475567817/'>
                    <img alt='Andrew' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/3381475567817/'
                          >
                            Andrew
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Adult Learner, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£40 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Secondary school maths teacher covering Salisbury, the New
                      Forest, and East Dorset - building skills and confidence.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Fordingbridge, Hampshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>3
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          114
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 4 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>16 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/5701601862907/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/5701601862907/'>
                    <img alt='Rachel' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/5701601862907/'
                          >
                            Rachel
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am a qualified Primary school teacher, with in-school
                      experience teaching in Key Stages 1 and 2, including Year
                      6 children preparing for SATs. I am passionate abo...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Newcastle Upon Tyne, Northumberland
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>3
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          105
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>8 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 15 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>10 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/6295962691307/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/6295962691307/'>
                    <img alt='Annette' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/6295962691307/'
                          >
                            Annette
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'></div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£31.25 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Very experienced Primary teacher of many years standing
                      providing tuition in English and Maths upto and including
                      KS3.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      St Helens, Merseyside
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>4
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          130
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>5 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 2 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/6239358544349/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/6239358544349/'>
                    <img
                      alt='Charikleia'
                      class='previewimage'
                      src={tutorImage}
                    />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/6239358544349/'
                          >
                            Charikleia
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£43.75 - £50</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Think + Be curious + Work = Knowledge I believe that any
                      thought could be expressed by an equation. If you believe
                      the same, I would be happy to show you how.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>2
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          41
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>1 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 2 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>20 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/sadrehashemi/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/sadrehashemi/'>
                    <img alt='Farid' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/sadrehashemi/'
                          >
                            Farid
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(79 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>(Adult Learner, KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 - £43.75</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      A tutor (MSc.&amp; Ph.D.) 3 subjects, maths, chemistry
                      &amp; physics, GCSE, A Level. 30+ years, all syllabus. In
                      person &amp; 1-2-1 online using Skype. BONUS video
                      transcri pt you...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Hampton, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          57
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          856
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>3 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 1 hour</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>11 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1268923640251/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1268923640251/'>
                    <img alt='Matthew' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1268923640251/'
                          >
                            Matthew
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£93.75 - £112.50</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am an exceptionally qualified mathematics teacher with
                      10 years experience in the classroom and currently teach
                      at a prestigious and highly academically successful p...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>4
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          120
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>3 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 48 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>21 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/5382178783416/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/5382178783416/'>
                    <img alt='Sarbari' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/5382178783416/'
                          >
                            Sarbari
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(27 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£42 - £55</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am now AVAILABLE for the academic session 2021-22
                      starting from August. If you are interested, please
                      contact me immediately to avoid disappointment. I am a
                      Ph.D. in...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Leicester, Leicestershire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          17
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          322
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 1 hour</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>4 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/8728474736213/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/8728474736213/'>
                    <img alt='Shahrukh' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/8728474736213/'
                          >
                            Shahrukh
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(8 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary, KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£25 - £35</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am a Geophysicist with a great passion for teaching
                      Maths and Science, with six years experience in tutoring
                      primary, KS3, GCSE and A Level students.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Chertsey, Surrey
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          11
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          92
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>20 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 1 hour</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>6 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/1447155237197/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/1447155237197/'>
                    <img alt='Tim' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/1447155237197/'
                          >
                            Tim
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(17 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths{" "}
                      <small>(Adult Learner, KS3, GCSE and A-Level)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£33.75 - £45</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I am a friendly and well-qualified tutor with a 1st class
                      Masters in Physics from the University of Bristol, and a
                      distinction from Imperial College London. I am curre...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>4
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          56
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>10 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 3 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>8 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/8409704327583/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/8409704327583/'>
                    <img alt='John' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/8409704327583/'
                          >
                            John
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>4.5</strong>{" "}
                        <span style={{ color: "#777" }}>(3 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      With a focus on ONLINE lessons, John is a highly
                      experienced teacher of Computer Science with over 25 years
                      as Head of Computing at an outstanding school in Surrey.
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Orpington, Kent
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>6
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          71
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>20 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 3 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>8 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/7554971337318/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/7554971337318/'>
                    <img alt='April' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/7554971337318/'
                          >
                            April
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(11 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£30 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I teach English and maths to children age 4-11 years. In
                      line with the National Curriculum, sessions are fun and
                      engaging whilst promoting a growth mindset and love fo...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Croydon, London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>7
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          228
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>Home only</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 13 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/8833810448646/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/8833810448646/'>
                    <img alt='Ria' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/8833810448646/'
                          >
                            Ria
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(13 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Primary)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£35 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Creative Humanities Tutor and Personal Statement Advisor I
                      enjoy tutoring for the reward of seeing a student improve
                      their analytical and essay-writing skills. I have...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>, West Midlands
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          19
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          286
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>1 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 2 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>2 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/yasirsaeed2002/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/yasirsaeed2002/'>
                    <img alt='Yasir' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/yasirsaeed2002/'
                          >
                            Yasir
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(26 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(GCSE, A-Level and Degree)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£36 - £42</div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      I teach GCSE Maths, A Level Maths, A Level Further Maths,
                      Linear Algebra, Linear Programming, AAT, ACCA, ACA,
                      Financial &amp; Management Accounting, Taxation,
                      Statistics,...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      Luton, Bedfordshire
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          42
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          740
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>30 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 21 minutes</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>10 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class='usercard2'
                onclick="location.href='/users/5330952763557/'"
                style={{ cursor: "pointer" }}
              >
                <div class='usercard2img'>
                  <a href='/users/5330952763557/'>
                    <img alt='Katja' class='previewimage' src={tutorImage} />
                  </a>
                </div>
                <div class='usercardmaincontentcontainer'>
                  <div class='usercardmaincontent'>
                    <div class='usercard2container'>
                      <div class='usercard2name'>
                        <div class='usercardname'>
                          <a
                            style={{ color: "#444" }}
                            href='/users/5330952763557/'
                          >
                            Katja
                          </a>
                        </div>
                      </div>
                      <div class='usercard2rating'>
                        <i class='fas fa-lg fa-star'></i>
                        <strong>5</strong>{" "}
                        <span style={{ color: "#777" }}>(28 students)</span>
                      </div>
                    </div>
                    <div class='usercard2title'>
                      Maths <small>(Adult Learner, KS3 and GCSE)</small>
                    </div>
                    <div class='usercard2rate'>
                      <div class='usercard2ratevalue'>£37.50 </div>
                      <div class='usercard2ratelabel'>/ hr</div>
                    </div>
                    <div class='usercard2break'></div>
                  </div>
                  <div class='usercardmaincontent2'>
                    <div class='usercard2desc'>
                      Hello, my name is Katja. I am a native German free lancer
                      working in London, who has made private tuition one of her
                      main sources of income and work, as I find wo...
                    </div>
                    <div class='usercard2location'>
                      <i class='far fa-check-circle'></i>
                      London
                    </div>
                    <div class='usercard2meta'>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-clipboard-list'></i>
                          24
                        </div>
                        <div class='usercard2metavalue'>Repeat Students</div>
                      </div>
                      <div class='usercard2metaitem metaitemhighlight'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          452
                        </div>
                        <div class='usercard2metavalue'>Hours Taught</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-briefcase'></i>
                          Travels
                        </div>
                        <div class='usercard2metavalue'>2 miles</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-history'></i>
                          Response
                        </div>
                        <div class='usercard2metavalue'>&lt; 3 hours</div>
                      </div>
                      <div class='usercard2metaitem'>
                        <div class='usercard2metalabel'>
                          <i class='fas fa-user'></i>
                          Member for
                        </div>
                        <div class='usercard2metavalue'>7 years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Results;
