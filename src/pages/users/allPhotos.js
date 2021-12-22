const AllPhotos = () => {
  return (
    <>
      <div id='maincontent'>
        <p id='location'>
          <a href='/'>Tutor Hunt</a>
          <a href='/users/8040216326713/'>Profile (Mary)</a>
        </p>
        <h1>All Photos From Mary</h1>
        <p>
          Here are all photos uploaded by{" "}
          <a href='/users/8040216326713/'>Mary</a>. Please click on any
          thumbnail to get more information and an enlarged version.
        </p>
        <img src='arrow-right.gif' alt='* ' />
        &nbsp; <a href='/users/8040216326713/'>Back To Profile</a>
        <p></p>
        <div class='widerfullpanelheader'>Select a Photo</div>
        <div class='widerbluepanelcontent'>
          <a
            rel='nofollow'
            href='/view-photo.asp?imageid=66115'
            class='manageimage'
          >
            <img src='/profile-images/cropped-140-140/804021632671357265214.jpg' />
          </a>
          <a
            rel='nofollow'
            href='/view-photo.asp?imageid=134589'
            class='manageimage'
          >
            <img src='/profile-images/cropped-140-140/804021632671345142784.jpg' />
          </a>
          <p style={{ clear: "both" }}>&nbsp;</p>
        </div>
        <div class='widerbluepanelfootersmall'></div>
      </div>
    </>
  )
}
export default AllPhotos
