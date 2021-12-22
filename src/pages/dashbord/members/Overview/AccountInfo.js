const AccountInfo = () => {
  return (
    <div class='cardheader'>
      <div class='cardtitlewrap'>
        <h3 class='cardtitle'>
          <span>Tutor Account</span>
        </h3>
        <div class='cardsubtitle'>
          <small>Last Logged in: 18th May 2021 8:38</small>
        </div>
      </div>
      <div class='cardheaderside accountstatusinfo'>
        <div class='cardlink'>
          <div class='cardlinktitle'>
            <div>
              <span class='infookay'>LIVE</span> Your Profile is Online
            </div>
          </div>
          <div class='cardsubtitle'>
            <a href='javascript:showconfirmwindow()'>Switch Offline</a>
          </div>
        </div>
      </div>

      <div class='cardheaderside'>
        <div class='cardlink'>
          <div class='cardlinktitle'>Your Profile Link:</div>
          <a href='/users/1022783851623/'>
            <small>www.TutorEthiopia.com/users/1022783851623/</small>
          </a>
        </div>
      </div>
    </div>
  )
}
export default AccountInfo
