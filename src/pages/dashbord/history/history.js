import { Link } from "react-router-dom";

const History = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>My History</h2>
        </div>

        <div class='cardcontent'>
          <p>
            Here you can view your history in terms of whose profile pages you
            have recently viewed, the most recent viewed is at the top of the
            list. You can clear your history here, or if you would prefer not to
            have your history stored you can change this setting in the{" "}
            <Link to='/members/privacy'>Privacy</Link> section.
          </p>

          <form
            method='post'
            action='/members/privacy-complete.asp'
            name='privacyform'
          >
            <p>
              {" "}
              <i
                class='fas fa-times-circle'
                style={{ position: "relative" }}
              ></i>
              <a href='/members/clear-history.asp'>Clear History </a>
            </p>
          </form>
        </div>
        <div class='cardtable tablewrap'>
          <table
            class='table tablestriped'
            width='60%'
            style={{ "margin-top": "10px" }}
          >
            {" "}
            <tbody>
              <tr>
                {" "}
                <th width='200'>User Profile </th> <th>Date Viewed </th>{" "}
                <th colspan='1'></th>{" "}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default History;
