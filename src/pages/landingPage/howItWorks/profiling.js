import portfolioImage from "../../../assets/images/portfolio-image.png"

const Profiling = () => {
  return (
    <>
      <div class='col-lg-3 col-sm-6'>
        <a href='#'>
          <div
            class='item wow bounceInUp'
            data-wow-duration='1s'
            data-wow-delay='0.3s'
          >
            <div class='hidden-content'>
              <h4>1 Profiling</h4>
              <p>
                Our free consultation process ascertains Student’s current skill
                level, learning style and requirement
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
export default Profiling
