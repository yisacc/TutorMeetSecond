import serviceIcon1 from "../../../assets/images/service-icon-01.png"

const Academics = () => {
  return (
    <>
      <div class='col-lg-6'>
        <div
          class='item wow fadeIn animated'
          data-wow-duration='1s'
          data-wow-delay='0.5s'
        >
          <div class='icon'>
            <img src={serviceIcon1} alt='reporting' />
          </div>
          <div class='right-text'>
            <h4>K-12 (Academics)</h4>
            <p>Math, Science, Biology, Economics, Computers etc</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Academics
