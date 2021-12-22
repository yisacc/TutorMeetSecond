const Modal = () => {
  return (
    <>
      <div id='bookingsform1' class='popupbox'>
        <div
          class='modal fade'
          id='showModal2'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <h4 class='modal-title' id='myModalLabel'>
                  <span id='bookingwith'></span> <span id='confirmed'></span>
                </h4>
              </div>
              <div
                class='modal-body'
                id='confirmationMessage'
                name='confirmationMessage'
              >
                <form
                  method='post'
                  action='/members/online-lesson-schedule-complete.asp'
                  id='scheduleform'
                >
                  <div id='editprofileimg'></div>
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <strong>Date:</strong>
                        </th>
                        <td>
                          <div id='starttime'></div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <strong>Duration:</strong>
                        </th>
                        <td>
                          <div id='duration'></div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <strong>Total Rate:</strong>
                        </th>
                        <td>
                          <div id='rate'></div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <strong>Subject:</strong>
                        </th>
                        <td>
                          <div id='subject'></div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <strong>Location:</strong>
                        </th>
                        <td>
                          <div id='locationdesc'></div>
                        </td>
                      </tr>
                      <tr>
                        <th></th>
                        <td>
                          <a
                            id='freelessonbut'
                            style={{ display: "none" }}
                            onclick='openfreelesson();'
                            class='btn btninactive'
                          >
                            Set Trial Lesson{" "}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div class='modal-footer' style={{ "text-align": "left" }}>
                <a
                  href='/members/my-enquiries.asp'
                  class='btn btnsuccess'
                  id='messagebtn'
                >
                  Message Student{" "}
                </a>
                <a id='editbut' onclick='openedit();' class='btn btnsuccess'>
                  Edit<span class='mobno'> Lesson</span>{" "}
                </a>
                <a id='cancelbut' onclick='opencancel()' class='btn btndanger'>
                  Cancel Lesson{" "}
                </a>
                <a
                  id='editbutinactive'
                  style={{ display: "none" }}
                  class='btn btninactive'
                >
                  Edit Lesson{" "}
                </a>
                <a
                  id='cancelbutinactive'
                  style={{ display: "none" }}
                  class='btn btninactive'
                >
                  Cancel Lesson{" "}
                </a>
                <a
                  id='invoicebut'
                  onclick='showinvoice()'
                  style={{ display: "none" }}
                  class='btn btninactive'
                >
                  View Receipt{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='bookingsform3' class='popupbox'>
        <div
          class='modal fade'
          id='showModal3'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <h4 class='modal-title' id='myModalLabel'>
                  Cancel Lesson
                </h4>
              </div>
              <div
                class='modal-body'
                id='confirmationMessage'
                name='confirmationMessage'
              >
                <p style={{ "font-size": "14px" }}>
                  Please confirm you would like to cancel lessions with{" "}
                  <span id='bookingwithcancel'></span>.
                </p>
                <form name='cancelform' id='cancelform'>
                  <select
                    name='cancelall'
                    id='cancelall'
                    class='forminputtext'
                    style={{ width: "240px" }}
                  >
                    <option value='0' selected='selected'>
                      Cancel just this lesson
                    </option>
                    <option value='1' id='cancelalloption'>
                      Cancel all lessions{" "}
                    </option>
                  </select>
                </form>
              </div>
              <div class='modal-footer'>
                <a onclick='cancelcomplete()' class='btn btndanger'>
                  Cancel Lessons{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='bookingsform5' class='popupbox'>
        <div
          class='modal fade'
          id='showModal5'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <h4 class='modal-title' id='myModalLabel'>
                  Confirm Edit Lesson
                </h4>
              </div>
              <div
                class='modal-body'
                id='confirmationMessage'
                name='confirmationMessage'
              >
                <p style={{ "font-size": "14px" }}>
                  Your have altered the lesson with{" "}
                  <span id='bookingwithcancel'></span>.
                </p>
                <form name='bookingeditform2' id='bookingeditform2'>
                  <label class='radiocontainer'>
                    <input
                      type='radio'
                      name='editsettings'
                      id='editsettings'
                      value='1'
                      checked=''
                    />
                    Change just this lesson<span class='checkmarkradio'></span>
                  </label>
                  <br />
                  <br />
                  <label class='radiocontainer'>
                    <input
                      type='radio'
                      name='editsettings'
                      id='editsettings'
                      value='2'
                    />
                    Change this lesson and all lessons after this date
                    <span class='checkmarkradio'></span>
                  </label>
                  <br />
                  <br />
                  <label class='radiocontainer'>
                    <input
                      type='radio'
                      name='editsettings'
                      id='editsettings'
                      value='3'
                    />
                    Change every lesson in the schedule to match this, including
                    ones before this date.<span class='checkmarkradio'></span>
                  </label>
                </form>
              </div>
              <div class='modal-footer'>
                <a onclick='editcomplete2()' class='btn btnsuccess'>
                  Edit Lessons{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='bookingsform4' class='popupbox'>
        <div
          class='modal fade'
          id='showModal4'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <h4 class='modal-title' id='myModalLabel'>
                  Edit Lesson
                </h4>
              </div>
              <div
                class='modal-body'
                id='confirmationMessage'
                name='confirmationMessage'
              >
                <form name='bookingeditform' id='bookingeditform'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Date:</strong>
                        </td>
                        <td>
                          <input
                            type='text'
                            name='startdate'
                            id='startdate'
                            class='forminputtext'
                            onchange='setdayofweek(this.value)'
                            style={{ width: "230px" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Start Time:</strong>
                        </td>
                        <td>
                          <select
                            name='starttimehour'
                            id='starttimehour'
                            style={{
                              width: "120px",
                              float: "left",
                              "margin-right": "10px",
                            }}
                            class='forminputtext '
                          >
                            <option value='00'>00 am</option>
                            <option value='01'>01 am</option>
                            <option value='02'>02 am</option>
                            <option value='03'>03 am</option>
                            <option value='04'>04 am</option>
                            <option value='05'>05 am</option>
                            <option value='06'>06 am</option>
                            <option value='07'>07 am</option>
                            <option value='08'>08 am</option>
                            <option value='09'>09 am</option>
                            <option value='10'>10 am</option>
                            <option value='11'>11 am</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                          </select>
                          &nbsp;&nbsp;&nbsp;
                          <select
                            name='starttimemin'
                            id='starttimemin'
                            style={{ width: "100px", float: "left" }}
                            class='forminputtext'
                          >
                            <option value='0'>00</option>
                            <option value='15'>15</option>
                            <option value='30'>30</option>
                            <option value='45'>45</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Duration:</strong>
                        </td>
                        <td>
                          <select
                            name='duration'
                            id='duration'
                            class='forminputtext'
                            style={{ width: "230px" }}
                          >
                            <option value='1' selected='selected'>
                              1 hour
                            </option>
                            <option value='1.25'>1 hour 15 mins</option>
                            <option value='1.5'>1 hour 30 mins</option>
                            <option value='1.75'>1 hour 45 mins</option>
                            <option value='2'>2 hours</option>
                            <option value='2.25'>2 hours 15 mins</option>
                            <option value='2.5'>2 hours 30 mins</option>
                            <option value='2.75'>2 hours 45 mins</option>
                            <option value='3'>3 hours</option>
                            <option value='3.25'>3 hours 15 mins</option>
                            <option value='3.5'>3 hours 30 mins</option>
                            <option value='3.75'>3 hours 45 mins</option>
                            <option value='4'>4 hours</option>
                            <option value='4.25'>4 hours 15 mins</option>
                            <option value='4.5'>4 hours 30 mins</option>
                            <option value='4.75'>4 hours 45 mins</option>
                            <option value='5'>5 hours</option>
                            <option value='5.25'>5 hours 15 mins</option>
                            <option value='5.5'>5 hours 30 mins</option>
                            <option value='5.75'>5 hours 45 mins</option>
                            <option value='6'>6 hours</option>
                            <option value='6.25'>6 hours 15 mins</option>
                            <option value='6.5'>6 hours 30 mins</option>
                            <option value='6.75'>6 hours 45 mins</option>
                            <option value='7'>7 hours</option>
                            <option value='7.25'>7 hours 15 mins</option>
                            <option value='7.5'>7 hours 30 mins</option>
                            <option value='7.75'>7 hours 45 mins</option>
                            <option value='8'>8 hours</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Hourly Rate:</strong>
                        </td>
                        <td>
                          <input
                            type='text'
                            id='hourlyrate'
                            name='hourlyrate'
                            value=''
                            class='forminputtext'
                            style={{ width: "230px" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Location:</strong>
                        </td>
                        <td>
                          <select
                            name='locationwhere'
                            id='locationwhere'
                            class='forminputtext'
                          >
                            <option value='none' selected='selected'>
                              Where would you like your lessons?
                            </option>
                            <option value='studenthome'>Students's Home</option>
                            <option value='tutorhome'>Tutor's Home</option>
                            <option value='online'>Online</option>
                            <option value='public'>Public place</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div class='modal-footer'>
                <a onclick='editcomplete()' class='btn btnsuccess'>
                  Update Lesson{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='bookingsform6' class='popupbox'>
        <div
          class='modal fade'
          id='showModal6'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <h4 class='modal-title' id='myModalLabel'>
                  Confirm Delete Lesson
                </h4>
              </div>
              <div
                class='modal-body'
                id='confirmationMessage'
                name='confirmationMessage'
              >
                <p style={{ "font-size": "14px" }}>
                  <img src='/images/alert-strong-info-icon.png' /> This student
                  has already confirmed their payment details for this lesson,{" "}
                  <strong>
                    please be aware that cancelling confirmed lessons will
                    negatively affect your visibility on Tutor Ethiopia
                  </strong>
                  . Too many cancellations will cause your profile to be
                  inactive. To restore it you must rebookcancelled lessons.
                </p>
              </div>
              <div class='modal-footer' style={{ "text-align": "left" }}>
                <a
                  id='cancelbut'
                  onclick=" $('#showModal6').modal('hide');"
                  class='btn btnsuccess'
                >
                  Don`t cancel Lesson{" "}
                </a>
                <a
                  onclick='cancelcompletewithwarning()'
                  class='btn btndanger'
                  style={{ float: "right" }}
                >
                  I understand - Cancel Lesson
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='bookingsinvoice' class='popupbox'>
        <div
          class='modal fade'
          id='showModal7'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <div>
                  <div style={{ float: "left" }}>
                    <img
                      width='50%'
                      src='/images/logo.png'
                      alt=' Tutor Ethiopia'
                    />
                  </div>
                  <div style={{ float: "right", "margin-right": "50px" }}>
                    <h4 class='modal-title' id='myModalLabel'>
                      Receipt
                    </h4>
                  </div>
                </div>
              </div>
              <div
                class='modal-body'
                id='invoicedetails'
                name='invoicedetails'
              ></div>
              <div class='modal-footer' style={{ "text-align": "left" }}>
                <a
                  id='cancelbut'
                  onclick=" $('#showModal7').modal('hide');"
                  class='btn btnsuccess'
                >
                  Close{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='bookingsfreelesson' class='popupbox'>
        <div
          class='modal fade'
          id='showModal8'
          tabindex='-1'
          role='dialog'
          aria-labelledby='myModalLabel'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <button
                  type='button'
                  class='closemodal'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
                <div>
                  <h4 class='modal-title' id='myModalLabel'>
                    Set as Trial Lesson
                  </h4>
                </div>
              </div>
              <div
                class='modal-body'
                id='freelessondetails'
                name='freelessondetails'
              >
                <div class='forminputrow'>
                  <div class='forminputitem'>
                    <label class='forminputtitle'>Trial Lesson Price</label>
                    <select
                      name='trialprice'
                      id='trialprice'
                      class='forminputtext'
                      onchange='setTrialPrice(this.value)'
                    >
                      <option selected='selected' value='free'>
                        Free
                      </option>
                      <option value='quarter'>Quarter price</option>
                      <option value='half'>Half price</option>
                      <option value='threequarter'>Three-quarter price</option>
                      <option value='full'>Full price</option>
                    </select>
                  </div>
                </div>
                <div class='forminputitem' id='priceblock2'>
                  <div class='lessonrate'>
                    £<span id='triallessonrate'></span>
                    <span class='ph'>/hr</span>
                  </div>
                  <div class='yourrate'>
                    You receive £<span id='tutorrate'>0</span>
                    <span class='ph'>/hr</span>
                  </div>
                </div>
                <div class='modal-footer' style={{ "text-align": "left" }}>
                  <a
                    id='freelessonbut'
                    onclick='setfreelesson()'
                    class='btn btnsuccess'
                  >
                    Set Trial Lesson{" "}
                  </a>
                  <a
                    id='cancelbut2'
                    onclick=" $('#showModal8').modal('hide');"
                    class='btn btndanger'
                  >
                    Close{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='bookingsidalert'>
        <div class='alertitem'>
          <form
            method='post'
            action='/members/upload-id.asp'
            id='uploadidform'
            name='uploadidform'
          ></form>
        </div>
        <div class='alertitem alertitem2'>
          <div class='idalertcontainer'>
            <div id='idmsg' class='idalert'>
              You must request references before you can start tuition with this
              student.
            </div>
            <div class='buttonid uploadfull'>
              <a href='/members/add-reference.asp'>Request References</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
