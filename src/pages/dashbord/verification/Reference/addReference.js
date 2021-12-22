import { Link } from "react-router-dom";

const AddReference = () => {
  return (
    <>
      <div class='card'>
        <div id='refblock'>
          <div class='cardheader'>
            <h2 class='cardtitle'>Please provide at least two references</h2>
          </div>
          <div class='cardcontent'>
            <p>
              Please provide us contact information for{" "}
              <strong>at least two referees</strong>. We will email them to
              collect a reference. This is a requirement to start tutoring at
              Tutor Ethiopia.
            </p>
            <div class='alert'>
              We do not accept references from family members and references
              must be based in the Ethiopia.
            </div>
            <p></p>
            <form
              method='post'
              action='/members/create-reference.asp'
              id='signupform'
            >
              <table>
                <tbody>
                  <tr>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Relationship</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='firstname1'
                        name='firstname1'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='surname1'
                        name='surname1'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='email1'
                        name='email1'
                        maxlength='90'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='phone1'
                        name='phone1'
                        maxlength='20'
                        type='text'
                      />
                    </td>
                    <td>
                      <select
                        name='relationship1'
                        id='relationship1'
                        class='forminputtextpad'
                      >
                        <option value='Colleague'>Colleague</option>
                        <option value='Doctor'>Doctor</option>
                        <option value='Friend'>Friend</option>
                        <option value='Solicitor'>Solicitor</option>
                        <option value='Client'>Student / Student Parent</option>
                        <option value='Teacher' selected='selected'>
                          Teacher
                        </option>
                        <option value='Other'>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='firstname2'
                        name='firstname2'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='surname2'
                        name='surname2'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='email2'
                        name='email2'
                        maxlength='90'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='phone2'
                        name='phone2'
                        maxlength='20'
                        type='text'
                      />
                    </td>
                    <td>
                      <select
                        name='relationship2'
                        id='relationship2'
                        class='forminputtextpad'
                      >
                        <option value='Colleague'>Colleague</option>
                        <option value='Doctor'>Doctor</option>
                        <option value='Friend'>Friend</option>
                        <option value='Solicitor'>Solicitor</option>
                        <option value='Client'>Student / Student Parent</option>
                        <option value='Teacher' selected='selected'>
                          Teacher
                        </option>
                        <option value='Other'>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='firstname3'
                        name='firstname3'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='surname3'
                        name='surname3'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='email3'
                        name='email3'
                        maxlength='90'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='phone3'
                        name='phone3'
                        maxlength='20'
                        type='text'
                      />
                    </td>
                    <td>
                      <select
                        name='relationship3'
                        id='relationship3'
                        class='forminputtextpad'
                      >
                        <option value='Colleague'>Colleague</option>
                        <option value='Doctor'>Doctor</option>
                        <option value='Friend'>Friend</option>
                        <option value='Solicitor'>Solicitor</option>
                        <option value='Client'>Student / Student Parent</option>
                        <option value='Teacher' selected='selected'>
                          Teacher
                        </option>
                        <option value='Other'>Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='firstname4'
                        name='firstname4'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='surname4'
                        name='surname4'
                        maxlength='50'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='email4'
                        name='email4'
                        maxlength='90'
                        type='text'
                      />
                    </td>
                    <td>
                      <input
                        class='forminputtextpad'
                        id='phone4'
                        name='phone4'
                        maxlength='20'
                        type='text'
                      />
                    </td>
                    <td>
                      <select
                        name='relationship4'
                        id='relationship4'
                        class='forminputtextpad'
                      >
                        <option value='Colleague'>Colleague</option>
                        <option value='Doctor'>Doctor</option>
                        <option value='Friend'>Friend</option>
                        <option value='Solicitor'>Solicitor</option>
                        <option value='Client'>Student / Student Parent</option>
                        <option value='Teacher' selected='selected'>
                          Teacher
                        </option>
                        <option value='Other'>Other</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <a
              onclick='validatereference(signupform,0)'
              class='btn green small'
              style={{ "margin-top": "20px" }}
            >
              Add References{" "}
            </a>
          </div>
        </div>
        <div class='cardcontent'>
          <p>
            <i class='fas fa-times-circle' style={{ position: "relative" }}></i>
            &nbsp;&nbsp;
            <Link to='/members/my-references.asp'>Cancel Add References </Link>-
            Return to Tutor Verification
          </p>
        </div>
      </div>
    </>
  );
};
export default AddReference;
