const SuggestedStudents = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>
            Suggested students who are looking for tuition{" "}
          </h2>
        </div>

        <div class='cardcontent'>
          <p>
            Here we list potential students which we found matched your profile
            infomation.
          </p>
          <p class='alert'>
            Sorry - we have no suggested students for you currently. To help us
            build a list for you, please ensure your profile is complete.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default SuggestedStudents;
