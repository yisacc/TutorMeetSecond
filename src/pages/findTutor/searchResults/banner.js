const Banner = () => {
  return (
    <>
      <div id='searchpanelhome2'>
        <div id='searchpanelcontent'>
          <p id='location'>
            <a href='/'>HI-Trust Tutor</a>
            <a href='/tutor-search.asp'>Search</a>
          </p>
          <h1>Your Search Results</h1>

          <p style={{ "margin-bottom": "5px" }}>
            <i
              class='fas fa-angle-right'
              style={{ position: "relative", top: "1px", margin: 0 }}
            ></i>
            &nbsp;Your search results for a <strong>Maths&nbsp;Tutor</strong>{" "}
            located near <strong></strong>.
          </p>

          <div class='thesearch'>
            <div class='thesearchtabs'>
              <a
                id='theonetoonetab'
                class=''
                href="javascript:setlessontype('onetoone');getresults();"
              >
                In-person
              </a>
              <a
                id='theonlinetab'
                class='active'
                href="javascript:setlessontype('online');getresults();"
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
                    value=' Maths'
                    onchange='getresults();'
                    autocomplete='off'
                  />
                </div>
                <div class='searchcol'>
                  <select
                    id='type'
                    name='type'
                    class='select'
                    onchange='getresults();'
                  >
                    <option value='tutor' selected='selected'>
                      Tutor
                    </option>
                    <option value='student'>Tutoring Job</option>
                  </select>
                </div>
                <div class='searchcol'>
                  <select
                    onchange='getresults();'
                    id='level'
                    name='level'
                    class='select'
                  >
                    <option value='all'>All Levels</option>
                    <option value='primary'>Primary</option>
                    <option value='ks3'>KS3</option>
                    <option value='gcse'>GCSE</option>
                    <option value='a-level'>A-Level</option>
                    <option value='degree'>Degree</option>
                    <option value='adult-learner'>Adult Learner</option>
                  </select>
                </div>
                <div class='searchcol'></div>

                <div class='searchcol'>
                  <div class='btn btnsuccess' onclick='getresults();'>
                    <i class='fas fa-search'></i>&nbsp;&nbsp;Search
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </>
  )
}
export default Banner
