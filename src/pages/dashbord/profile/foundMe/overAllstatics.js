const OverAllStatics = () => {
  return (
    <>
      <div class='cardheader'>
        <h2 class='cardtitle'>Overall Statistics </h2>
      </div>

      <div class='cardcontent'>
        <p>
          Overall statistics show your weekly, monthly and all time profile
          views.{" "}
        </p>
      </div>
      <div class='cardtable tablewrap'>
        <table
          width='650'
          class='table tablestriped'
          style={{ "margin-left": 0 }}
        >
          <tbody>
            <tr>
              <th width='31%'>Total Profile Views </th>
              <th>Views </th>
            </tr>
            <tr>
              <td>All Time </td>
              <td>
                0(<em>0 guests, 0 members</em>){" "}
              </td>
            </tr>
            <tr>
              <td>Last 7 Days </td>
              <td>0</td>
            </tr>
            <tr>
              <td>This Month </td>
              <td>0</td>
            </tr>
            <tr>
              <td>Last Month </td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class='cardcontent'>
        <p>
          Your Profile has been tagged <strong>0 times</strong>.{" "}
        </p>
      </div>
    </>
  );
};
export default OverAllStatics;
