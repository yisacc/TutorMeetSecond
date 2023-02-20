import react, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { isLogin } from "../utils/common"
import { removeUserSession } from "../utils/common"
import { useHistory } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [menuTrigger, setMenuTrigger] = useState(false)
  let history = useHistory()
  // Menu Dropdown Toggle
  const handleMenuTrigger = () => {
    setMenuTrigger(!menuTrigger)
  }
  // if($('.menu-trigger').length){
  //   $(".menu-trigger").on('click', function() {
  //     $(this).toggleClass('active');
  //     $('.header-area .nav').slideToggle(200);
  //   });
  // }
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession()
    history.push("/login")
  }
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > 100)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])
  return (
    <>
      <header
        class={
          scrolling
            ? "header-area header-sticky wow slideInDown background-header"
            : "header-area header-sticky wow slideInDown"
        }
        data-wow-duration='0.75s'
        data-wow-delay='0s'
      >
        <div class='container'>
          <nav class='main-nav row'>
            <div class='col-4 col-sm-2'>
              <Link to='/' class='logo'>
                <h4>
                HI-Trust <span>Tutor</span>
                </h4>
              </Link>
            </div>
            <div class='col-8 col-sm-10'>
              <ul class={menuTrigger ? "nav d-block" : "nav"}>
                <li class='scroll-to-section'>
                  <Link
                    to='/'
                    class={location.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li class='scroll-to-section'>
                  <Link
                    class={
                      location.pathname === "/find-a-tutor" ? "active" : ""
                    }
                    to='/find-a-tutor'
                  >
                    Find a Tutor
                  </Link>
                </li>
                <li class='scroll-to-section'>
                  <Link
                    class={location.pathname === "/subject" ? "active" : ""}
                    to='/subject'
                  >
                    Subjects
                  </Link>
                </li>

                {/* <li class="dropdown"><a href="#"><span>Resources</span> <i class="fas fa-angle-down"></i></a>
            <ul>
              <li><a href="#">How It Works?</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Study Materials</a></li>
            </ul>
          </li> */}
                {/* <li class="scroll-to-section"><a href="#contact">Book Free Demo</a></li>  */}
                {isLogin() ? (
                  <>
                    <li class='scroll-to-section'>
                      <Link
                        class={
                          location.pathname === "/become-a-tutor"
                            ? "active normal"
                            : "normal"
                        }
                        to='/become-a-tutor'
                      >
                        Become A Tutor
                      </Link>
                    </li>
                    <li class='scroll-to-section'>
                      <div class='main-red-button header-login'>
                        <Link onClick={handleLogout}>
                          <i class='fas fa-sign-in-alt'></i>Log Out
                        </Link>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li class='scroll-to-section'>
                      <Link
                        class={
                          location.pathname === "/become-a-tutor"
                            ? "active "
                            : ""
                        }
                        to='/become-a-tutor'
                      >
                        Become A Tutor
                      </Link>
                    </li>
                    <li class='scroll-to-section'>
                      <div class='main-red-button header-login'>
                        <Link to='/login'>
                          <i class='fas fa-sign-in-alt'></i>Login
                        </Link>
                      </div>
                    </li>
                    <li class='scroll-to-section'>
                      <div class='main-red-button headerreg'>
                        <Link to='/signup'>
                          <i class='fas fa-user-plus'></i> Register
                        </Link>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <a
              class={menuTrigger ? "menu-trigger active" : "menu-trigger"}
              onClick={handleMenuTrigger}
            >
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
