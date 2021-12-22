import portfolioImage from "../../../assets/images/portfolio-image.png"

const Teaching = () => {
  return (
    <>
      <div class='col-lg-3 col-sm-6'>
        <a href='#'>
          <div
            class='item wow bounceInUp'
            data-wow-duration='1s'
            data-wow-delay='0.5s'
          >
            <div class='hidden-content'>
              <h4>3 Teaching</h4>
              <p>
                Tutor will provide a free demo. If you're not 100% satisfied
                then we'll pay for your first lesson with another tutor!
              </p>
            </div>
            <div class='showed-content'>
              <img src={portfolioImage} alt='' />
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
export default Teaching
