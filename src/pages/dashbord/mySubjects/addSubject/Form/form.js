const Form = () => {
  return (
    <form
      method='post'
      action='/members/create-subject.asp'
      name='signupform'
      id='signupform'
    >
      <input type='hidden' name='status' value='' />
      <input type='hidden' name='section' value='' />
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
      <input type='hidden' name='specialistlist' id='specialistlist' />
      <div id='specialistsblock' class='thesubtag' name='specialistsblock'>
        <label for='specialists'>
          Subject Areas Covered{" "}
          <span style={{ "font-size": "80%", "font-style": "italic" }}>
            (optional){" "}
          </span>
        </label>
        <div class='mf_container'>
          <ol
            class='mf_list'
            aria-atomic='false'
            aria-live='polite'
            aria-multiselectable='true'
            id='mf_specialists_list'
            role='listbox'
          ></ol>
          <input
            type='text'
            name='specialists'
            id='specialists'
            class='forminputtext mf_input mp_input'
            aria-autocomplete='list'
            aria-owns='mp_specialists_list mf_specialists_list'
            autocomplete='off'
            role='combobox'
            aria-required='true'
            style={{ width: "24.9844px" }}
          />
          <span class='mf_measure'>---</span>
        </div>
        <ol
          class='mp_list'
          aria-atomic='true'
          aria-busy='false'
          aria-live='polite'
          id='mp_specialists_list'
          role='listbox'
          style={{ display: "none" }}
        ></ol>
      </div>
      {/* <label class='checkcontainer' for='teachonline'>
              Also Teach Online&nbsp;&nbsp;
              <span style={{ "font-size": "80%", "font-style": "italic" }}>
                (using online whiteboard){" "}
              </span>
              <input
                type='checkbox'
                name='teachonline'
                checked=''
                id='teachonline'
                value='1'
              />
              <span class='checkmark'></span>
            </label> */}
      <div
        style={{ visibility: "hidden", display: "none" }}
        name='academicform'
        id='academicform'
      >
        <div class='cardtable tablewrap'>
          <table class='table' style={{ "margin-top": "20px" }}>
            <tbody>
              <tr>
                <th>Level</th>
                <th>Your Hourly Rate</th>
                <th>Student Rate</th>
              </tr>
              <tr>
                <td>
                  <label
                    class='checkcontainer'
                    style={{ position: "relative", top: "-10px" }}
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
                  <span>£</span>&nbsp;
                  <input
                    style={{ width: "80%", display: "inline-block" }}
                    onfocus='ticklevel(this.form,primary);'
                    class='forminputtext'
                    type='text'
                    id='primary_rate'
                    name='primary_rate'
                    maxlength='8'
                    onchange="javascript:updatelessonprice(this.value,'primary_lessonprice')"
                  />
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    class='fadedrate'
                    style={{ width: "80%", display: "inline-block" }}
                    title='This is the hourly rate which will appear in your profile'
                    type='text'
                    name='primary_lessonprice'
                    id='primary_lessonprice'
                    maxlength='200'
                    readonly=''
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    class='checkcontainer'
                    style={{ position: "relative", top: "-10px" }}
                  >
                    <input type='checkbox' id='ks3' name='ks3' value='ks3' />
                    KS3<span class='checkmark'></span>
                  </label>
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    style={{ width: "80%", display: "inline-block" }}
                    onfocus='ticklevel(this.form,primary);'
                    class='forminputtext'
                    type='text'
                    id='ks3_rate'
                    name='ks3_rate'
                    maxlength='8'
                    onchange="javascript:updatelessonprice(this.value,'ks3_lessonprice')"
                  />
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    class='fadedrate'
                    style={{ width: "80%", display: "inline-block" }}
                    title='This is the hourly rate which will appear in your profile'
                    type='text'
                    name='ks3_lessonprice'
                    id='ks3_lessonprice'
                    maxlength='200'
                    readonly=''
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    class='checkcontainer'
                    style={{ position: "relative", top: "-10px" }}
                  >
                    <input type='checkbox' id='gcse' name='gcse' value='gcse' />
                    GCSE<span class='checkmark'></span>
                  </label>
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    style={{ width: "80%", display: "inline-block" }}
                    onfocus='ticklevel(this.form,primary);'
                    class='forminputtext'
                    type='text'
                    id='gcse_rate'
                    name='gcse_rate'
                    maxlength='8'
                    onchange="javascript:updatelessonprice(this.value,'gcse_lessonprice')"
                  />
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    class='fadedrate'
                    style={{ width: "80%", display: "inline-block" }}
                    title='This is the hourly rate which will appear in your profile'
                    type='text'
                    name='gcse_lessonprice'
                    id='gcse_lessonprice'
                    maxlength='200'
                    readonly=''
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    class='checkcontainer'
                    style={{ position: "relative", top: "-10px" }}
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
                  <span>£</span>&nbsp;
                  <input
                    style={{ width: "80%", display: "inline-block" }}
                    onfocus='ticklevel(this.form,primary);'
                    class='forminputtext'
                    type='text'
                    id='a_level_rate'
                    name='a_level_rate'
                    maxlength='8'
                    onchange="javascript:updatelessonprice(this.value,'a_level_lessonprice')"
                  />
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    class='fadedrate'
                    style={{ width: "80%", display: "inline-block" }}
                    title='This is the hourly rate which will appear in your profile'
                    type='text'
                    name='a_level_lessonprice'
                    id='a_level_lessonprice'
                    maxlength='200'
                    readonly=''
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    class='checkcontainer'
                    style={{ position: "relative", top: "-10px" }}
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
                  <span>£</span>&nbsp;
                  <input
                    style={{ width: "80%", display: "inline-block" }}
                    onfocus='ticklevel(this.form,primary);'
                    class='forminputtext'
                    type='text'
                    id='degree_rate'
                    name='degree_rate'
                    maxlength='8'
                    onchange="javascript:updatelessonprice(this.value,'degree_lessonprice')"
                  />
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    class='fadedrate'
                    style={{ width: "80%", display: "inline-block" }}
                    title='This is the hourly rate which will appear in your profile'
                    type='text'
                    name='degree_lessonprice'
                    id='degree_lessonprice'
                    maxlength='200'
                    readonly=''
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    class='checkcontainer'
                    style={{ position: "relative", top: "-10px" }}
                  >
                    <input
                      type='checkbox'
                      id='adult_learner'
                      name='adult_learner'
                      value='adult-learner'
                    />
                    Adult Learner<span class='checkmark'></span>
                  </label>
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    style={{ width: "80%", display: "inline-block" }}
                    onfocus='ticklevel(this.form,primary);'
                    class='forminputtext'
                    type='text'
                    id='adult_learner_rate'
                    name='adult_learner_rate'
                    maxlength='8'
                    onchange="javascript:updatelessonprice(this.value,'adult_learner_lessonprice')"
                  />
                </td>
                <td>
                  <span>£</span>&nbsp;
                  <input
                    class='fadedrate'
                    style={{ width: "80%", display: "inline-block" }}
                    title='This is the hourly rate which will appear in your profile'
                    type='text'
                    name='adult_learner_lessonprice'
                    id='adult_learner_lessonprice'
                    maxlength='200'
                    readonly=''
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <em>Your current commission rate is set at 25%</em>
          <input type='hidden' name='lastval2' value='lastval2' />
        </div>
      </div>
      <div
        style={{ visibility: "visible", display: "block" }}
        name='nonacademicform'
        id='nonacademicform'
      >
        <label for='rate'>Hourly Rate (£):</label>
        <input
          class='forminputtext'
          type='text'
          name='rate'
          id='rate'
          maxlength='20'
          onchange="javascript:updatelessonprice(this.value,'lessonprice')"
        />
        <p style={{ "margin-top": "20px" }}>
          Profile Rate: (£)
          <input
            type='text'
            id='lessonprice'
            name='lessonprice'
            value=''
            class='currencyfield'
            readonly=''
          />
          <em>Your current commission rate is set at 25%</em>
          <input type='hidden' name='lastval' value='lastval' />
        </p>
      </div>
    </form>
  );
};
export default Form;
