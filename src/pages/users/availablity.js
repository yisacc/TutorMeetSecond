import availNo from "../../assets/images/users/avail-no.png"
import availYes from "../../assets/images/users/avail-yes.png"
import availYesMob from "../../assets/images/users/avail-yes-mob.png"
const Availability = () => {
  return (
    <>
      <div class='card'>
        <h3 class='cardheader'>Availability</h3>
        <div class='cardcontent'>
          <table id='profileavailability' cellspacing='0'>
            <tbody>
              <tr class='availheader'>
                <th class='availcol'>&nbsp;</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
                <th>Su</th>
              </tr>
              <tr class='availrow'>
                <th>Morning</th>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
              </tr>
              <tr class='availrow'>
                <th>Afternoon</th>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
              </tr>
              <tr class='availrow'>
                <th>After School</th>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
              </tr>
              <tr class='availrow availrowlast'>
                <th>Evening</th>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='selected'>
                  <span class='mobno'>
                    <img src={availYes} />
                  </span>
                  <span class='mobyes'>
                    <img src={availYesMob} />
                  </span>
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
                <td class='notselected'>
                  <img src={availNo} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default Availability
