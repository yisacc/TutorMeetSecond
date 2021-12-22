import Academics from "../../assets/images/subjects/Academics-f.png";
import Counseling from "../../assets/images/subjects/career-counselling-f3.png";
import Robotics from "../../assets/images/subjects/Robotics-f2.png";
import CompetitiveExams from "../../assets/images/subjects/61f-1.png";
import Yoga from "../../assets/images/subjects/yoga-f2.png";
import Sports from "../../assets/images/subjects/sportsf.png";
import Fitness from "../../assets/images/subjects/fit-f3.png";
import MartialArts from "../../assets/images/subjects/Martial-arts-f2-.png";
import Music from "../../assets/images/subjects/Music-f3.png";
import Dance from "../../assets/images/subjects/d-f3.png";
import ArtCraft from "../../assets/images/subjects/Art-craf-ft.png";
import Photography from "../../assets/images/subjects/photography-f3.png";
import { Link } from "react-router-dom";
const SubjectCategories = () => {
  return (
    <>
      <section id='pricing' class='pricing'>
        <div class='container' data-aos='fade-up'>
          <div class='row'>
            <div class='col-lg-12' style={{ textAlign: "center" }}>
              <div
                class='section-heading  wow bounceIn'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
              >
                <h2 class='mb-5'>Subjects</h2>
              </div>
            </div>
          </div>

          <div class='row gy-4 mb-4' data-aos='fade-left'>
            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='100'
            >
              <Link to='/academic-home-tuition'>
                <div class='box'>
                  <img src={Academics} class='img-fluid' alt='' />
                  <h3 class='__title'>Academics</h3>
                </div>
              </Link>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <div class='box'>
                <img src={Counseling} class='img-fluid' alt='' />
                <h3 class='__title'>Career Counseling</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <div class='box'>
                <img src={CompetitiveExams} class='img-fluid' alt='' />
                <h3 class='__title'>Competitive Exams</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <div class='box'>
                <img src={Robotics} class='img-fluid' alt='' />
                <h3 class='__title'>Robotics</h3>
              </div>
            </div>
          </div>
          <div class='row gy-4 mb-4' data-aos='fade-left'>
            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='100'
            >
              <div class='box'>
                <img src={Yoga} class='img-fluid' alt='' />
                <h3 class='__title'>Yoga</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <div class='box'>
                <img src={Sports} class='img-fluid' alt='' />
                <h3 class='__title'>Sports</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <div class='box'>
                <img src={Fitness} class='img-fluid' alt='' />
                <h3 class='__title'>Fitness</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <div class='box'>
                <img src={MartialArts} class='img-fluid' alt='' />
                <h3 class='__title'>Martial Arts</h3>
              </div>
            </div>
          </div>
          <div class='row gy-4 mb-4' data-aos='fade-left'>
            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='100'
            >
              <div class='box'>
                <img src={Music} class='img-fluid' alt='' />
                <h3 class='__title'>Music</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <div class='box'>
                <img src={Dance} class='img-fluid' alt='' />
                <h3 class='__title'>Dance</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <div class='box'>
                <img src={ArtCraft} class='img-fluid' alt='' />
                <h3 class='__title'>Art & Craft</h3>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <div class='box'>
                <img src={Photography} class='img-fluid' alt='' />
                <h3 class='__title'>Photography</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubjectCategories;
