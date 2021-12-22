import OverAllStatics from "./overAllstatics";
import WhoViewedMyProfile from "./whoViewedMyProfile";
import DailyStatics from "./dailyStatics";

const FoundMe = () => {
  return (
    <>
      <p style={{ clear: "both", margin: 0, padding: 0 }}></p>
      <div class='tabcontent active'>
        <p>
          Here you can view <a href='/users/1022783851623/'>your profile</a>{" "}
          statistics such as the amount of times you profile has been viewed.{" "}
        </p>
      </div>

      <OverAllStatics />
      <WhoViewedMyProfile />
      <DailyStatics />
    </>
  );
};

export default FoundMe;
