import { useHistory } from "react-router"

const Banner = () => {
  let history = useHistory()
  const handleClick = () => {
    history.push("/search-results")
  }
  return (
    <>
      <div id='searchpanelhome' style={{ height: "auto" }}>
        <div id='searchpanelcontent'>
          <h1>Find a Tutor</h1>
          <p>
            {" "}
            Please enter the relevant information into the sections below. This
            will enable us to locate tutors who both specialise in the subject
            you require, and are in close proximity to you.{" "}
          </p>
          <div class='thesearch'>
            <div class='thesearchtabs'>
              <a
                id='theonetoonetab'
                class='active'
                href="javascript:setlessontype('onetoone');"
              >
                In-person
              </a>
              <a
                id='theonlinetab'
                class=''
                href="javascript:setlessontype('online');"
              >
                Online
              </a>
            </div>
            <form
              class='searchcontent active'
              id='thesearchform'
              method='get'
              action='/search-results.asp'
            >
              <div class='searchrow'>
                <div class='searchcol '>
                  <input
                    id='subject'
                    name='subject'
                    class='input ui-autocomplete-input'
                    placeholder='Enter a subject'
                    value=''
                    autocomplete='off'
                  />
                </div>
                <div class='searchcol'>
                  <select id='type' name='type' class='select'>
                    <option value='tutor'>Tutor</option>
                    <option value='student'>Tutoring Job</option>
                  </select>
                </div>
                <div class='searchcol'>
                  <select id='level' name='level' class='select'>
                    <option value='all' selected='selected'>
                      All Levels
                    </option>
                    <option value='primary'>Primary</option>
                    <option value='ks3'>KS3</option>
                    <option value='gcse'>GCSE</option>
                    <option value='a-level'>A-Level</option>
                    <option value='degree'>Degree</option>
                    <option value='adult-learner'>Adult Learner</option>
                  </select>
                </div>
                <div class='searchcol'>
                  <input
                    class='input'
                    type='text'
                    name='postcode'
                    id='postcode'
                    maxlength='14'
                    value=''
                    placeholder='postcode'
                    style={{ display: "none" }}
                  />
                </div>
                <div class='searchcol'>
                  <div class='btn btnsuccess' onclick={() => handleClick()}>
                    <i class='fas fa-search'></i>
                    &nbsp;&nbsp;Search
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id='mainsearchpanelfooter'>
            <a href='/advanced-search.asp'>Advanced Search</a>
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/locations/'>Browse By Location</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/all-subjects.asp'>Browse By Subject</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner
