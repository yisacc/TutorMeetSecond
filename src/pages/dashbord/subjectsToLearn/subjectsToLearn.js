const SubjectsToLearn = () => {
  return (
    <>
      <div
        class='dashbord main-banner wow fadeIn'
        id='top'
        data-wow-duration='1s'
        data-wow-delay='0.5s'
      >
        <div id='maincontentouter'>
          <div id='maincontent'>
            <div id='pageblock' class='pt-5'>
              <h1>
                Please provide us with information about which subjects you wish
                to learn
              </h1>
              <div class='contentmain'>
                <div
                  id='memberpanelcontent'
                  style={{
                    border: 0,
                    width: "100%",
                    float: "left",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <div class='card'>
                    <div class='cardheader'>
                      <h2 class='cardtitle'>
                        Which subjects are you looking to learn
                      </h2>
                    </div>
                    <div class='cardcontent'>
                      <p>
                        Please provide us a little more information about which
                        subjects your are looking to learn, this will help our
                        tutors understand your requirements
                      </p>
                      <p style={{ "font-style": "italic" }}>
                        *&nbsp;&nbsp;hourly rates at what you would be willing
                        to pay. This information is completely optional.{" "}
                      </p>
                      <form
                        method='post'
                        action='/members/create-subject.asp'
                        name='signupform'
                        id='signupform'
                      >
                        <div class='columnsplit'>
                          <div class='columnsplititem'>
                            <label for='category'>Subject</label>
                            <select
                              name='category'
                              id='category'
                              class='forminputtext'
                              onchange='showlevel(this.value); get_list(this.form.subject_list , this.value);'
                            >
                              <option value='none' selected='selected'>
                                select:
                              </option>
                              <option value='1'>Academic</option>
                              <option value='4'>Arts</option>
                              <option value='5'>Health/Fitness</option>
                              <option value='146'>IT</option>
                              <option value='2'>Languages</option>
                              <option value='286'>Lifestyle</option>
                              <option value='3'>Music</option>
                              <option value='250'>Professional</option>
                            </select>
                          </div>
                          <div class='columnsplititem'>
                            <label for='subject_list'>&nbsp;</label>
                            <select
                              name='subject_list'
                              class='forminputtext'
                              id='subject_list'
                              onchange='buildspecialist(this.value);'
                            >
                              <option value='none'>select:</option>
                            </select>
                            <input
                              type='hidden'
                              name='formtype'
                              id='formtype'
                              value='nonacademicform'
                            />
                          </div>
                        </div>
                        <div
                          style={{ visibility: "visible", display: "block" }}
                          name='nonacademicform2'
                          id='nonacademicform2'
                        >
                          <label for='level'>Level </label>
                          <select name='level' id='level' class='forminputtext'>
                            <option value='none' selected='selected'>
                              select:
                            </option>
                            <option value='a-level'>A-Level</option>
                            <option value='adult-learner'>Adult Learner</option>
                            <option value='adviser'>Adviser</option>
                            <option value='consultant'>Consultant</option>
                            <option value='degree'>Degree</option>
                            <option value='enthusiast'>Enthusiast</option>
                            <option value='expert'>Expert</option>
                            <option value='gcse'>GCSE</option>
                            <option value='guide'>Guide</option>
                            <option value='helper'>Helper</option>
                            <option value='instructor'>Instructor</option>
                            <option value='ks3'>KS3</option>
                            <option value='lecturer'>Lecturer</option>
                            <option value='mentor'>Mentor</option>
                            <option value='primary'>Primary</option>
                            <option value='researcher'>Researcher</option>
                            <option value='teacher'>Teacher</option>
                            <option value='trainer'>Trainer</option>
                          </select>
                        </div>
                        <input
                          type='hidden'
                          name='specialistlist'
                          id='specialistlist'
                        />
                        <div
                          id='specialistsblock'
                          class='thesubtag'
                          name='specialistsblock'
                          style={{ display: "none" }}
                        >
                          <label for='specialists'>
                            Subject Areas Covered{" "}
                            <span
                              style={{
                                "font-size": "80%",
                                "font-style": "italic",
                              }}
                            >
                              (optional){" "}
                            </span>
                          </label>
                          <input
                            type='text'
                            name='specialists'
                            id='specialists'
                            class='forminputtext'
                          />
                        </div>
                        <div
                          style={{ visibility: "hidden", display: "none" }}
                          name='academicform'
                          id='academicform'
                        >
                          <div class='cardtable tablewrap'>
                            <table
                              class='table'
                              style={{ "margin-top": "20px" }}
                            >
                              <tbody>
                                <tr>
                                  <th>Level</th>
                                  <th></th>
                                </tr>
                                <tr>
                                  <td>
                                    <label
                                      class='checkcontainer'
                                      style={{
                                        position: "relative",
                                        top: "-10px",
                                      }}
                                    >
                                      <input
                                        type='checkbox'
                                        id='primary'
                                        name='primary'
                                        value='primary'
                                      />
                                      Primary<span class='checkmark'></span>
                                    </label>
                                  </td>
                                  <td>
                                    <input
                                      type='hidden'
                                      name='primary_lessonprice'
                                      id='primary_lessonprice'
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label
                                      class='checkcontainer'
                                      style={{
                                        position: "relative",
                                        top: "-10px",
                                      }}
                                    >
                                      <input
                                        type='checkbox'
                                        id='ks3'
                                        name='ks3'
                                        value='ks3'
                                      />
                                      KS3<span class='checkmark'></span>
                                    </label>
                                  </td>
                                  <td>
                                    <input
                                      type='hidden'
                                      name='ks3_lessonprice'
                                      id='ks3_lessonprice'
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label
                                      class='checkcontainer'
                                      style={{
                                        position: "relative",
                                        top: "-10px",
                                      }}
                                    >
                                      <input
                                        type='checkbox'
                                        id='gcse'
                                        name='gcse'
                                        value='gcse'
                                      />
                                      GCSE<span class='checkmark'></span>
                                    </label>
                                  </td>
                                  <td>
                                    <input
                                      type='hidden'
                                      name='gcse_lessonprice'
                                      id='gcse_lessonprice'
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label
                                      class='checkcontainer'
                                      style={{
                                        position: "relative",
                                        top: "-10px",
                                      }}
                                    >
                                      <input
                                        type='checkbox'
                                        id='a_level'
                                        name='a_level'
                                        value='a-level'
                                      />
                                      A-Level<span class='checkmark'></span>
                                    </label>
                                  </td>
                                  <td>
                                    <input
                                      type='hidden'
                                      name='a_level_lessonprice'
                                      id='a_level_lessonprice'
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label
                                      class='checkcontainer'
                                      style={{
                                        position: "relative",
                                        top: "-10px",
                                      }}
                                    >
                                      <input
                                        type='checkbox'
                                        id='degree'
                                        name='degree'
                                        value='degree'
                                      />
                                      Degree<span class='checkmark'></span>
                                    </label>
                                  </td>
                                  <td>
                                    <input
                                      type='hidden'
                                      name='degree_lessonprice'
                                      id='degree_lessonprice'
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <label
                                      class='checkcontainer'
                                      style={{
                                        position: "relative",
                                        top: "-10px",
                                      }}
                                    >
                                      <input
                                        type='checkbox'
                                        id='adult_learner'
                                        name='adult_learner'
                                        value='adult-learner'
                                      />
                                      Adult Learner
                                      <span class='checkmark'></span>
                                    </label>
                                  </td>
                                  <td>
                                    <input
                                      type='hidden'
                                      name='adult_learner_lessonprice'
                                      id='adult_learner_lessonprice'
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          style={{ visibility: "visible", display: "block" }}
                          name='nonacademicform'
                          id='nonacademicform'
                        >
                          <p style={{ "margin-top": "20px" }}></p>
                        </div>
                      </form>
                      <a
                        onclick='validateaddsubject(signupform,0);'
                        class='btn btnsuccess'
                        style={{ "margin-top": "20px" }}
                      >
                        Add Subject{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ clear: "both" }}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SubjectsToLearn;
