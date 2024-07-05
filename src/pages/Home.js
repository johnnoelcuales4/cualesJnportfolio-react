import "./Home.css";

import IMG from "../img/jn1.png";
import JN1 from "../img/jnb.jpeg";
import JN2 from "../img/OIP.jpeg";
import J1 from "../img/basketball.jpeg";
import J2 from "../img/basketball1.jpeg";
import J3 from "../img/motorshow.jpg";
import J4 from "../img/motorshow1.jpeg";
import J5 from "../img/drag.jpeg";
import J6 from "../img/drag1.jpeg";
import J7 from "../img/cross.jpeg";
import J8 from "../img/cross1.jpeg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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
      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img src={IMG} alt="JOHN NOEL B. CUALES PROFILE" />
                    </div>
                  </div>
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">
                        <i>Hi, I'm</i>
                      </h1>
                      <h1 className="text display-4 fw-bold">
                        <i>John Noel B. Cuales</i>
                      </h1>
                      <br />
                      <p className="self text-dark fw-bold">
                        I'm a Basketball Player & Web Designer
                      </p>
                      <a href="/About" className="btn btn-brand shadow mt-5">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="fav">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3 text-dark">
              <strong> Favorites Sports</strong>
            </h3>
            <div className="col-lg-3 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">BasketBall</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={J1} alt="" />
                  <img src={J2} alt="" />
                </div>
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Motor Show</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={J3} alt="" />
                  <img src={J4} alt="" />
                </div>
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Drag Race</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={J5} alt="" />
                  <img src={J6} alt="" />
                </div>
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3 text-center">Moto Cross</h4>
              </div>
              <div className="row">
                <div className="card">
                  <img src={J7} alt="" />
                  <img src={J8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3 mt-3">
              <div className="card p-3 shadow">
                <img src={JN1} alt="" />
                <h4 className="text-center">Basketball</h4>
                <p>
                  Basketball, game played between two teams of five players each
                  on a rectangular court, usually indoors. Each team tries to
                  score by tossing the ball through the opponent’s goal, an
                  elevated horizontal hoop and net called a basket.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3 mt-3">
              <div className="card p-3 shadow">
                <img src={JN2} alt="" />
                <h4 className="text-center">Visual Studio Code</h4>
                <p>
                  Microsoft created Visual Studio Code (VS Code), a free source
                  code editor available for Linux, macOS, and Windows. Because
                  of its many features, adaptability, and customizable nature,
                  it has swiftly become one of the most well-liked code editors
                  among developers.
                </p>
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

export default Home;
