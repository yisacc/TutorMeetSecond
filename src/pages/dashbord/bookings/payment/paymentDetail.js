import TabsPages from "../tabsPage";

const PaymentDetail = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Payment Details</h2>
        </div>
        <TabsPages />
        <div class='tabcontent active'>
          <p>
            For all lessons that take place this week, tutors will be paid on
            the following week Friday as illustrated in the diagram below:
          </p>
          <div>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle1','content1', 'flip90')"
            >
              <span class='contenttitle'>View Diagram</span>
              <img
                id='icontoggle1'
                class='icontoggle flip90revstartpos flip90'
                width='10'
                height='10'
                src='/images/v/arrow-green-right.svg'
              />
            </a>
          </div>
          <div id='content1' class='' style={{ display: "block" }}>
            <p></p>
            <table class='monthcalendar'>
              <tbody>
                <tr>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
                <tr class='currentweek'>
                  <td class=' currentday'>
                    31
                    <div id='infodate20210500'></div>
                  </td>
                  <td class='activedate' id='date20210501'>
                    1<div id='infodate20210501'></div>
                  </td>
                  <td class='activedate' id='date20210502'>
                    2<div id='infodate20210502'></div>
                  </td>
                  <td class='activedate' id='date20210503'>
                    3<div id='infodate20210503'></div>
                  </td>
                  <td class='activedate' id='date20210504'>
                    4<div id='infodate20210504'></div>
                  </td>
                  <td class='activedate' id='date20210505'>
                    5<div id='infodate20210505'></div>
                  </td>
                  <td class='activedate' id='date20210506'>
                    6<div id='infodate20210506'></div>
                  </td>
                </tr>
                <tr class='nextweek'>
                  <td class='activedate' id='date20210507'>
                    7<div id='infodate20210507'></div>
                  </td>
                  <td class='activedate' id='date20210508'>
                    8<div id='infodate20210508'></div>
                  </td>
                  <td class='activedate' id='date20210509'>
                    9<div id='infodate20210509'></div>
                  </td>
                  <td class='activedate' id='date20210510'>
                    10
                    <div id='infodate20210510'></div>
                  </td>
                  <td class='activedate' id='date20210511'>
                    11
                    <div id='infodate20210511'></div>
                  </td>
                  <td class='activedate' id='date20210512'>
                    12
                    <div id='infodate20210512'></div>
                  </td>
                  <td class='activedate' id='date20210513'>
                    13
                    <div id='infodate20210513'></div>
                  </td>
                </tr>
                <tr class=''>
                  <td class='activedate' id='date20210514'>
                    14
                    <div id='infodate20210514'></div>
                  </td>
                  <td class='activedate' id='date20210515'>
                    15
                    <div id='infodate20210515'></div>
                  </td>
                  <td class='activedate' id='date20210516'>
                    16
                    <div id='infodate20210516'></div>
                  </td>
                  <td class='activedate' id='date20210517'>
                    17
                    <div id='infodate20210517'></div>
                  </td>
                  <td class='activedate' id='date20210518'>
                    18
                    <div id='infodate20210518'></div>
                  </td>
                  <td class='activedate' id='date20210519'>
                    19
                    <div id='infodate20210519'></div>
                  </td>
                  <td class='activedate' id='date20210520'>
                    20
                    <div id='infodate20210520'></div>
                  </td>
                </tr>
                <tr class=''>
                  <td class='activedate' id='date20210521'>
                    21
                    <div id='infodate20210521'></div>
                  </td>
                  <td class='activedate' id='date20210522'>
                    22
                    <div id='infodate20210522'></div>
                  </td>
                  <td class='activedate' id='date20210523'>
                    23
                    <div id='infodate20210523'></div>
                  </td>
                  <td class='activedate' id='date20210524'>
                    24
                    <div id='infodate20210524'></div>
                  </td>
                  <td class='activedate' id='date20210525'>
                    25
                    <div id='infodate20210525'></div>
                  </td>
                  <td class='activedate' id='date20210526'>
                    26
                    <div id='infodate20210526'></div>
                  </td>
                  <td class='activedate' id='date20210527'>
                    27
                    <div id='infodate20210527'></div>
                  </td>
                </tr>
                <tr class=''>
                  <td class='activedate' id='date20210528'>
                    28
                    <div id='infodate20210528'></div>
                  </td>
                  <td class='activedate' id='date20210529'>
                    29
                    <div id='infodate20210529'></div>
                  </td>
                  <td class='activedate' id='date20210530'>
                    30
                    <div id='infodate20210530'></div>
                  </td>
                  <td class=''>
                    1<div id='infodate20210531'></div>
                  </td>
                  <td class=''>
                    2<div id='infodate20210532'></div>
                  </td>
                  <td class=''>
                    3<div id='infodate20210533'></div>
                  </td>
                  <td class=''>
                    4<div id='infodate20210534'></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p></p>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
