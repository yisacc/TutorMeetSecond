const WhoViewedMyProfile = () => {
  return (
    <>
      <div class='cardheader'>
        <h2 class='cardtitle'>Who's Viewed My Profile</h2>
      </div>

      <div class='cardcontent'>
        <p>
          Below we show the previous 60 member visits to your profile page, you
          can contact the user by pressing the contact button next to their
          name. We only display each user once, by displaying their most recent
          visit date.
        </p>
      </div>

      <div class='cardtable tablewrap'>
        <table class='table tablestriped'>
          <tbody>
            <tr>
              <th>Name </th>
              <th>Date </th>
              <th width='70' class='mobno'></th>
              <th width='70' class='mobno'></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default WhoViewedMyProfile;
