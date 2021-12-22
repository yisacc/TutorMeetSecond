const Dashbord = () => {
  return (
    <>
      <form
        id='accountstatusform'
        name='accountstatusform'
        action='/members/switch-account-status.asp'
      ></form>

      <div class='card'>
        <div class='cardheader'>
          <div class='cardtitlewrap'>
            <h3 class='cardtitle'>
              <span>Student Account</span>
            </h3>
            <div class='cardsubtitle'>
              <small>Last Logged in: 27th May 2021 16:14</small>
            </div>
          </div>
          <div class='cardheaderside accountstatusinfo'>
            <div class='cardlink'>
              <div class='cardlinktitle'>
                <div>
                  <span class='infookay'>LIVE</span> Your Profile is Online
                </div>
              </div>
              <div class='cardsubtitle' style='margin-top: 9px;'>
                <a href='javascript:showconfirmwindow()'>Switch Offline</a>
              </div>
            </div>
          </div>

          <div class='cardheaderside'>
            <div class='cardlink'>
              <div class='cardlinktitle'>Your Profile Link:</div>
              <a href='/users/1088395273685/'>
                <small>www.TutorEthiopia.com/users/1088395273685/</small>
              </a>
            </div>
          </div>
        </div>
        <div class='cardviews carditem'>
          <div class='cardview'>
            <div class='cardviewnumber'>0</div>
            <div class='cardviewtitle'>All Time Views</div>
          </div>
          <div class='cardview'>
            <div class='cardviewnumber'>0</div>
            <div class='cardviewtitle'>Last 7 Days</div>
          </div>
          <div class='cardview'>
            <div class='cardviewnumber'>0</div>
            <div class='cardviewtitle'>This Month</div>
          </div>
          <div class='cardview'>
            <div class='cardviewnumber'>0</div>
            <div class='cardviewtitle'>Last Month</div>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='cardheader '>
          <h3 class='cardtitle'>Account Alerts</h3>
        </div>
        <div class='tabcontent active accountalerts'>
          <p>
            <svg class='svgred' width='20' height='20'>
              <use xlink:href='/images/sidemenu.svg#question'></use>
            </svg>
            Your postcode was not recognised, you will not be found in searches{" "}
            <a href='/members/edit-info-personal.asp'>
              <span class='infowarn'>Fix This</span>
            </a>
          </p>
        </div>{" "}
      </div>
    </>
  );
};
export default Dashbord;
