import serviceIcon2 from "../../../assets/images/service-icon-02.png"

const Programming = () => {
  return (
    <>
      <div class='col-lg-6'>
        <div
          class='item wow fadeIn animated'
          data-wow-duration='1s'
          data-wow-delay='0.7s'
        >
          <div class='icon'>
            <img src={serviceIcon2} alt='' />
          </div>
          <div class='right-text'>
            <h4>Programming (Code)</h4>
            <p>HTML, C, C++, Java, Python, Ruby, A.I, Machine Learning, etc</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Programming
