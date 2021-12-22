const ImproveVisiblity = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>
            Further steps on how to improve your visibility
          </h2>
        </div>
        <div class='cardcontent'>
          By improving your profile you will be ranked higher in our searches
          improving your chances of being found by students.
        </div>
        <div class='cardtable tablewrap'>
          <table class='table tablestriped'>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
              <tr>
                <td height='30'>
                  <div class='infopanel-wrapper'>
                    <span style={{ position: "relative", top: "-2px" }}>
                      Articles{" "}
                    </span>{" "}
                    &nbsp;
                    <a class='mobno' id='item-9' data-panel='panel-9'>
                      <i class='far fa-question-circle'></i>
                    </a>
                    <div class='infopanelcontaner'>
                      <div
                        style={{ display: "none" }}
                        id='panel-9'
                        class='infopanel'
                      >
                        <p>
                          You can upload a resource to boost your profile rank.
                          The resource can be about any subject but it must be
                          your own work.
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <i
                    class='far fa-times-circle'
                    style={{ position: "relative", top: "2px" }}
                  ></i>{" "}
                  <span class='profilescorealert'>
                    <span class='infobad'>No Articles Uploaded</span>{" "}
                  </span>
                </td>
                <td>
                  <a href='/members/create-resource.asp'>Add an Article </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ImproveVisiblity;
