import { Link } from "react-router-dom";

const MyPhoto = () => {
  return (
    <>
      <div class='card'>
        <div id='photosblock'>
          <div class='cardheader'>
            <h2 class='cardtitle'>My Photos</h2> &nbsp;&nbsp;
            <span style={{ "font-size": "12px" }}>
              &nbsp;&nbsp;
              <i
                class='fas fa-lg fa-plus-circle'
                style={{ position: "relative", left: "0px" }}
              ></i>
              &nbsp;
              <Link to='/members/upload-images'>Upload Photos </Link>
            </span>
          </div>
          <div class='cardcontent'>
            <p>
              Here are your current uploaded photos, click on a photo to make
              changes to it or set it as your profile image. Your current
              profile image is marked by a wide blue border.
            </p>
            <p class='alert'>
              You have not uploaded any photos to your profile yet.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPhoto;
