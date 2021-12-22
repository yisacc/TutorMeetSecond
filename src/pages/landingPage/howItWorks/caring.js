import portfolioImage from "../../../assets/images/portfolio-image.png"

const Caring = () => {
  return (
    <>
      <div class='col-lg-3 col-sm-6'>
        <a href='#'>
          <div
            class='item wow bounceInUp'
            data-wow-duration='1s'
            data-wow-delay='0.6s'
          >
            <div class='hidden-content'>
              <h4>4 Caring</h4>
              <p>
                We will be with you all the way, tracking progress, raising your
                skill, performance and confidence
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
export default Caring
