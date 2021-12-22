import TabsPages from "./tabsPage";

const NewBooking = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Schedule Lessons</h2>
        </div>
        <TabsPages />
        <div class='tabcontent active'>
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
                  You must request references before you can start tuition with
                  this student.
                </div>
                <div class='buttonid uploadfull'>
                  <a href='/members/add-reference.asp'>Request References</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewBooking;
