import "./About.css";
import "./Education.css";

import Navbar from "./Navbar";

import IMG from "../img/jn2.jpg";
import IMG1 from "../img/FAMILY1.jpg";
import IMG2 from "../img/FAMILY2.jpg";
import m1 from "../img/M1.jpg";
import m2 from "../img/M2.jpg";
import m3 from "../img/M3.jpg";
import b2 from "../img/b2.jpg";
import b3 from "../img/b3.jpg";
import b5 from "../img/b5.jpg";
import b4 from "../img/b4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>
      <section id="About">
        <div className="container">
          <div className="pb-5 "></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1">
            <i>About</i>
          </h1>
        </div>
        <svg
          className="air-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
          </g>
          <g className="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
          </g>
        </svg>
      </section>
      <section id="carton">
        <div className="container ">
          <div className="col mt-7">
            <div className="card p-5 shadow">
              <div className="row mt-10">
                <div className="col-lg-5  mt-5">
                  <center>
                    <img
                      src={IMG}
                      alt="JOHN NOEL B. CUALES PROFILE PICTURE  "
                    />
                  </center>
                </div>
                <div className="col-lg-7 text mt-5">
                  <h2 className="text-dark">About Me</h2>
                  <p>
                    <i>
                      At Central Philippines State University, I am a motivated
                      and committed student pursuing a Bachelor of Science in
                      Information Technology (BSIT). I'm really interested in
                      emerging technologies, cybersecurity, and software
                      development.
                    </i>
                  </p>
                  <h2 className="text-dark mt-5">Academic Journey</h2>
                  <p>
                    <i>
                      I have gained experience in the College of Computer
                      Studies. acquired important expertise in programming
                      languages, including Web development, JavaScript, and C++.
                    </i>
                  </p>
                  <h2 className="text-dark mt-5">My Hobbies</h2>
                  <p>
                    <i>
                      My Hobbies is playing basketball, ridingmotors and playing
                      online games, that habbies is important to me because that
                      are my stress reliever when i am stress
                    </i>
                  </p>
                  <h2 className="text-dark mt-5">My Dream</h2>
                  <p>
                    <i>
                      My dream is to be a business man someday and have a good
                      life and happy family and my biggest dream is to ride a
                      big bikes and to join the motorcross competition
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="about" className="">
        <div className="container mt-1">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="section-heading text-center mb-1 ">
          <h1>
            <i>Educational Attainment</i>
          </h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div className="card p-1 shadow">
                    <h4 className="text-center">
                      Inapoy SDA Elementary School
                    </h4>
                    <p className="text-dark">
                      Brgy. Inapoy, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>{" "}
                  <div className="card p-1 shadow">
                    <h4 className="text-center">Inapoy National High School</h4>
                    <p className="text-dark">
                      Brgy. Inapoy, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>{" "}
                  <div className="card p-1 shadow">
                    <h4 className="text-center">
                      Central Philippines State University
                    </h4>
                    <p className="text-dark">
                      Brgy. Camingawan, Kabankalan City, Negros Occidental
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="info">
        <div class="section-heading text-center mb-1 ">
          <h1>
            <i>FAMILY NAMES</i>
          </h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">MOTHER</h4>
                    <p className="text-dark">LILY MORADAS BACOSA CUALES</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3 ">
                <div class="single-horizontal-timeline ">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">SIBLINGS</h4>
                    <p className="text-dark">IRENE BACOSA CUALES</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div className="card p-1 shadow">
                    <h4 className="text-center">FATHER</h4>
                    <p className="text-dark">NOEL MIRAFLORES CUALES</p>
                  </div>
                </div>
              </div>{" "}
              <section id="photos3">
                <div className="col-lg mb-1 mt-5 text-center">
                  <div className=" p-3">
                    <a>
                      <img src={IMG1}></img>
                    </a>
                  </div>
                  <div className=" p-3">
                    <a>
                      <img src={IMG2}></img>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="info">
        <div class="section-heading text-center mb-1 ">
          <h1>
            <i>SKILLS</i>
          </h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <section id="photos4">
                <div className="col-lg mb-1 mt-5 text-center">
                  <div className=" p-3">
                    <a>
                      <img src={b3}></img>
                      <img src={b5}></img>
                      <img src={b4}></img>
                      <img src={m1}></img>
                      <img src={m2}></img>
                      <img src={m3}></img>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="air-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> John Noel Cuales</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
