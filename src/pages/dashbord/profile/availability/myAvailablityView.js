const MyAvailablityView = () => {
  return (
    <>
      <div class='tabcontent active'>
        <p class='alert'>
          <strong>Your availability has never been updated</strong>, this will
          cause a lowering ranking on our search results, it is important that
          your availability is updated on a weekly basis as we allow students to
          search tutors by availability. Please click the boxes below and press{" "}
          <em>update</em> to save your availability.
        </p>
        <div>
          <i class='fas fa-times-circle' style={{ position: "relative" }}></i>{" "}
          Availability Last Updated <span class='infobad'>Never</span>
        </div>

        <form
          id='calendarform'
          name='calendarform'
          action='/members/availability-complete.asp'
        >
          <input type='hidden' name='result' id='result' value='' />

          <table
            id='profileavailability'
            cellspacing='0'
            style={{ "margin-top": "20px" }}
          >
            <tbody>
              <tr class='availheader'>
                <th class='availcol'>&nbsp;</th>
                <th>Mo </th>
                <th>Tu </th>
                <th>We </th>
                <th>Th </th>
                <th>Fr </th>
                <th>Sa </th>
                <th>Su </th>
              </tr>

              <tr class='availheader availrow'>
                <th class='sessionhd'>Morning </th>
                <td class='selected' id='mon1'>
                  <a class='avaicell' href="javascript:change('mon1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='tue1'>
                  <a class='avaicell' href="javascript:change('tue1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='wed1'>
                  <a class='avaicell' href="javascript:change('wed1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='thu1'>
                  <a class='avaicell' href="javascript:change('thu1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='fri1'>
                  <a class='avaicell' href="javascript:change('fri1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sat1'>
                  <a class='avaicell' href="javascript:change('sat1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sun1'>
                  <a class='avaicell' href="javascript:change('sun1')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr class='availheader availrow'>
                <th class='sessionhd'>Afternoon </th>
                <td class='selected' id='mon2'>
                  <a class='avaicell' href="javascript:change('mon2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='tue2'>
                  <a class='avaicell' href="javascript:change('tue2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='wed2'>
                  <a class='avaicell' href="javascript:change('wed2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='thu2'>
                  <a class='avaicell' href="javascript:change('thu2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='fri2'>
                  <a class='avaicell' href="javascript:change('fri2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sat2'>
                  <a class='avaicell' href="javascript:change('sat2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sun2'>
                  <a class='avaicell' href="javascript:change('sun2')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr class='availheader availrow'>
                <th class='sessionhd'>After School </th>
                <td class='selected' id='mon3'>
                  <a class='avaicell' href="javascript:change('mon3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='tue3'>
                  <a class='avaicell' href="javascript:change('tue3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='wed3'>
                  <a class='avaicell' href="javascript:change('wed3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='thu3'>
                  <a class='avaicell' href="javascript:change('thu3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='fri3'>
                  <a class='avaicell' href="javascript:change('fri3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sat3'>
                  <a class='avaicell' href="javascript:change('sat3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sun3'>
                  <a class='avaicell' href="javascript:change('sun3')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr class='availheader availrow'>
                <th class='sessionhd'>Evening </th>
                <td class='selected' id='mon4'>
                  <a class='avaicell' href="javascript:change('mon4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='tue4'>
                  <a class='avaicell' href="javascript:change('tue4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='wed4'>
                  <a class='avaicell' href="javascript:change('wed4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='thu4'>
                  <a class='avaicell' href="javascript:change('thu4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='fri4'>
                  <a class='avaicell' href="javascript:change('fri4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sat4'>
                  <a class='avaicell' href="javascript:change('sat4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
                <td class='selected' id='sun4'>
                  <a class='avaicell' href="javascript:change('sun4')">
                    <span class='mobno'>
                      <i class='fas fa-check-circle'></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class='cardbtncontainer'>
            <div id='submitbutton'>
              <a
                onclick='completecalendar(calendarform);'
                class='btn btnsuccess'
              >
                Update<span class='nochanges'>&nbsp;with no changes</span>{" "}
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default MyAvailablityView;
