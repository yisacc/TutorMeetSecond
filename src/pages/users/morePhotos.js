import userPhoto from "../../assets/images/users/804021632671345142784.jpg"
import arrowRight from "../../assets/images/users/arrow-green-right.png"

const MorePhotos = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>
            More Photos (<a href='/all-photos.asp?user=8040216326713'>1</a>)
          </h2>
        </div>
        <div class='cardcontent'>
          <a
            title=''
            rel='nofollow'
            href='/view-photo.asp?imageid=134589'
            class='manageimageprofile'
          >
            <img src={userPhoto} />
          </a>
          <p
            style={{
              clear: "both",
              height: "20px",
              position: "relative",
              top: "8px",
            }}
          >
            <img
              src={arrowRight}
              style={{ position: "relative", top: "2px" }}
            />
            &nbsp;&nbsp;This user has a total of <strong>1</strong> images, view
            them all in their{" "}
            <a href='/all-photos.asp?user=8040216326713'>Photo Gallery </a>.
          </p>
        </div>
      </div>
    </>
  )
}
export default MorePhotos
