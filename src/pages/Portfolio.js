import "./Portfolio.css";
import Navbar from "./Navbar";

const Portfolio = () => {
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
      <section id="portfolio">
        <div className="container ">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1">
            <i>PROJECTS</i>
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

      <section id="info">
        <div class="section-heading text-center mb-1"></div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-6 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>Calculator</h2>
                  </div>
                  <div className=" p-1 shadow">
                    <li class="nav-item">
                      <h5>Click This Link to see my Calculator</h5>
                    </li>
                  </div>
                  <div className=" p-1 shadow text-center">
                    <ul>
                      <h2>⬇️</h2>
                    </ul>
                  </div>
                  <div className="card p-1 shadow mt-1">
                    <li class="nav-item">
                      <a href="https://johnnoelcuales4.github.io/calculator">
                        <h3> 🧮click me🧮</h3>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="col-md-6 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>Website</h2>
                  </div>
                  <div className=" p-1 shadow">
                    <li class="nav-item">
                      <h5>Click This Link to see my Website</h5>
                    </li>
                  </div>
                  <div className=" p-1 shadow text-center">
                    <ul>
                      <h2>⬇️</h2>
                    </ul>
                  </div>
                  <div className="card p-1 shadow mt-1">
                    <li class="nav-item">
                      <a href="https://johnnoelcuales4.github.io/johnnoelcuales/">
                        <h3>💻click me💻</h3>
                      </a>
                    </li>
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

export default Portfolio;
