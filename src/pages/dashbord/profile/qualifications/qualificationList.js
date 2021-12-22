const QualificationList = () => {
  return (
    <>
      <div class='tabcontent active'>
        <p>
          Here you can add your qualifications you hold. They will show within
          your profile (but not the certificate), you also have the option to
          verify any qualification with us by uploading the certificate. Once
          approved we will mark it as verified.
        </p>

        <h2 style={{ clear: "both" }}>
          Qualifications &nbsp;&nbsp;&nbsp;
          <span style={{ "font-size": "12px" }}>
            <i
              class='fas fa-lg fa-plus-circle'
              style={{ position: "relative", left: "0px" }}
            ></i>
            &nbsp;
            <a href='/members/upload-qualifications.asp'>Add a Qualification</a>
          </span>
        </h2>
      </div>
      <div class='cardtable tablewrap'>
        <table
          class='table tablestriped'
          width='100%'
          style={{ "margin-top": "10px" }}
        >
          <tbody>
            <tr>
              {" "}
              <th width='260'>Qualification </th>{" "}
              <th width='200' class='mobno'>
                Institute
              </th>{" "}
              <th width='50' class='mobno'>
                Grade{" "}
              </th>{" "}
              <th width='50' class='mobno'>
                Date{" "}
              </th>{" "}
              <th width='150'>Status </th> <th width='130'></th>{" "}
            </tr>
            <tr>
              <td>
                <i
                  class='fas fa-graduation-cap'
                  style={{ position: "relative", left: "0px", top: "2px" }}
                ></i>
                <a href='/members/view-qualification.asp?qualification=318171 '>
                  BSC Information Tec...
                </a>
              </td>
              <td class='mobno'>Jimma Universit...</td>
              <td class='mobno'>3.80</td>
              <td class='mobno'>2018</td>
              <td>
                <span class='infookay'>Accepted</span>{" "}
              </td>
              <td>
                <a
                  class='pr-1'
                  href='/members/view-qualification.asp?qualification=318171 '
                >
                  {" "}
                  <i class='fas fa-eye'></i>
                </a>
                <a
                  class='pr-1'
                  href='/members/edit-qualification.asp?qualification=318171'
                >
                  {" "}
                  <i class='fas fa-edit'></i>
                </a>
                <a
                  class='pr-1'
                  href='/members/delete-qualification.asp?qualification=318171 '
                >
                  <i class='fas fa-trash-alt'></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default QualificationList;
