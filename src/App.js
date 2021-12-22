import { useState, useEffect } from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import "./App.css"
import Header from "./common/header"
import "./assets/css/animated.css"
import "./assets/css/fontawesome.css"
// import './assets/css/owl.css';
import "./assets/css/style.css"
import TutorEthiopiaRoute from "./common/tutorEthiopiaRoute"
import Footer from "./common/footer"
import SystemToken from "./utils/systemToken"

function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  window.addEventListener("load", handleLoad)
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > 100)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])
  return (
    <>
      <SystemToken />
      <Header />
      <div
        id='js-preloader'
        class={loaded ? "js-preloader loaded" : "js-preloader"}
      >
        <div class='preloader-inner'>
          <span class='dot'></span>
          <div class='dots'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <TutorEthiopiaRoute />
      <Footer />
      <a
        onClick={() => scrollToTop()}
        class={
          scrolling
            ? "back-to-top d-flex align-items-center justify-content-center active"
            : "back-to-top d-flex align-items-center justify-content-center"
        }
      >
        <i class='fas fa-arrow-up'></i>
      </a>
    </>
  )
}

export default App
