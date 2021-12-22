import react from 'react';
import { Link } from 'react-router-dom';
// import Logo from'../assets/img/et-logo.png';

const Footer=()=>{
    return(
        <>
        <footer id="footer" class="footer">

<div class="footer-newsletter">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12 text-center">
        <h4>Our Newsletter</h4>
        <p>Subscribe to our email newsletter to receive updates</p>
      </div>
      <div class="col-lg-6">
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</div>

<div class="footer-top">
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-5 col-md-12 footer-info">
        <a href="index.html" class="logo d-flex align-items-center">
          {/* <img src={Logo} alt="" /> */}
          <span style={{color:"#03a4ed"}}>Tutor<span style={{color:"#fe3f40"}}>Ethiopia</span></span>
        </a>
        <p style={{textAlign:'left'}}>TutorEthiopia is Ethiopia’s fastest growing Home Tuition & Coaching platform and employs the best Tutors combined with professional and innovative approach to coaching.</p>
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="fas fa-chevron-right"></i> <Link to="/">Home</Link></li>
          <li><i class="fas fa-chevron-right"></i> <Link to="/find-a-tutor">Find a Tutor</Link></li>
          <li><i class="fas fa-chevron-right"></i> <Link to="/subject">Subjects</Link></li>
          <li><i class="fas fa-chevron-right"></i> <Link to="/become-a-tutor">Become A Tutor</Link></li>
          <li><i class="fas fa-chevron-right"></i> <a href="#blog">Resources</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Support</h4>
        <ul>
          <li><i class="fas fa-chevron-right"></i> <a href="#">FAQ</a></li>
          <li><i class="fas fa-chevron-right"></i> <a href="#">Study Materials</a></li>
          <li><i class="fas fa-chevron-right"></i> <a href="#">How It Works</a></li>
          <li><i class="fas fa-chevron-right"></i> <a href="#">Subjects</a></li>
          <li><i class="fas fa-chevron-right"></i> <a href="#">Terms and Conditions</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
        Woreda 02, Sinan Building 2nd Floor <br />
        Bole Subcity, Addis Ababa<br />
        Ethiopia <br /><br />
          <strong>Phone:</strong> +251 937 656 015<br />
          <strong>Email:</strong> isaccab2019@gmail.com<br />
        </p>

      </div>

    </div>
  </div>
</div>

<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span>TutorEthiopia</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
    Designed by <a href="https://www.ethiopianairlines.com/">TutorEthiopia</a>
  </div>
</div>
</footer>
       </>
    )
}
export default Footer;