import portfolioImage from "../../../assets/images/portfolio-image.png"

const Matching = () => {
  return (
    <>
      <div class='col-lg-3 col-sm-6'>
        <a href='#'>
          <div
            class='item wow bounceInUp'
            data-wow-duration='1s'
            data-wow-delay='0.4s'
          >
            <div class='hidden-content'>
              <h4>2 Matching</h4>
              <p>
                Our innovative matching system pairs student with a tutor who
                complements their skill and style for best results
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
export default Matching
