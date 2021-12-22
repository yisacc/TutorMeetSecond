import TabsPages from "./tabsPage";
import Calender from "./calender";
import Modal from "./modal";

const MyBookings = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Schedule Lessons</h2>
        </div>
        <TabsPages />
        <div class='tabcontent active'>
          <Modal />
          <p style={{ clear: "both", marign: 0, padding: 0 }}>&nbsp;</p>
          <div id='bookingsscore'></div>
          <script></script>
          <p></p>
          <form
            action='/members/bookings.asp'
            style={{ float: "right", width: "auto" }}
          >
            <select
              class='select selectview'
              id='view'
              name='view'
              onchange='this.form.submit()'
            >
              <option value=''>Upcoming Bookings</option>
              <option value='past'>Past Bookings </option>
              <option value='cancelled'>Cancelled Bookings</option>
            </select>
          </form>
          <p style={{ "margin-top": "30px", clear: "right" }}></p>
        </div>
        <div id='bookingsblock'>
          <div style={{ display: "flex", "flex-direction": "column-reverse" }}>
            <div>
              <table
                class='table'
                width='100%'
                style={{ "margin-top": "10px" }}
              >
                <tbody>
                  <tr>
                    <th>Student</th>
                    <th colspan='5'>Next Lesson</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <Calender />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBookings;
