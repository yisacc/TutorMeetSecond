import Banner from "./banner"
import PopularCategories from "./popularCategories/popularCategories"
import HowItWorks from "./howItWorks/howItWorks"
import SendMessage from "./sendMessage/sendeMessage"
import WhatWeOffer from "./whatWeOffer/whatWeOffer"
import WhyTutorEthiopia from "./whyTutorEthiopia/whyTutorEthiopia"
// import Testimonals from './testimonals';

const LandingPage = () => {
  return (
    <>
      <Banner />
      <PopularCategories />
      <WhatWeOffer />
      <HowItWorks />
      <WhyTutorEthiopia />
      {/* <Testimonals /> */}
      <SendMessage />
    </>
  )
}

export default LandingPage
