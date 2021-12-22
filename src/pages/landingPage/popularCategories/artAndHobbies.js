import serviceIcon3 from "../../../assets/images/service-icon-03.png"

const ArtAndHobbies = () => {
  return (
    <>
      <div class='col-lg-6'>
        <div
          class='item wow fadeIn animated'
          data-wow-duration='1s'
          data-wow-delay='0.9s'
        >
          <div class='icon'>
            <img src={serviceIcon3} alt='' />
          </div>
          <div class='right-text'>
            <h4>Arts & Hobbies</h4>
            <p>Music, Dance, Singing, Drawing,etc</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtAndHobbies
