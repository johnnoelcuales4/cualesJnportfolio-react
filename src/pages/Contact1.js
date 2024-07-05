import "./Contact.css";
import fb1 from "../img/jnc20.png";
import fb from "../img/jnc1.png";
import fb2 from "../img/call.jpeg";
import fb3 from "../img/gmail1.jpeg";

import Navbar from "./Navbar";

const Contact1 = () => {
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
      <section id="contact">
        <div className="container">
          <div className="pb-5 mt-"></div>
          <h1 className="fw-bold display-2 text-center mt-0 pt-1">
            <i>Contacts</i>
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

      <section id="photos1">
        <div className="col-lg mb-1 mt-5 text-center">
          <div className="container text-center">
            <div className="card align-items-center">
              <h4 className=" mt-3">
                Click the Icon to see My Social Media<h1>⬇️</h1>
              </h4>
            </div>
          </div>

          <div className=" p-3">
            <a href="https://www.facebook.com/johnnoel.cuales.1/">
              <img src={fb}></img>
            </a>

            <a
              href="https://www.tiktok.com/@johnnoelcuales1?_r=1&_d=secCgYIASAHKAESP
                      go8%2BrFy3YAc1EBXxR5nlltmVfcctSukgQY%2F7wsTX%2Fis0XiROKkfr9zsdozAj%2Fih
                      Tg2U51uqe73mtssZTInOGgA%3D&checksum=f6f90a5b9ede73d26b77829943e455984e879fa99fce2f672
                      a673665bee89026&sec_uid=MS4wLjABAAAA-HxCkkoD9pUFpFgZf4XQczKqNP6RvbDULXTsttIevpT0Ns3CDjVA
                      7jTrEbi2OSa_&sec_user_id=MS4wLjABAAAA-HxCkkoD9pUFpFgZf4XQczKqNP6RvbDULXTsttIevpT0Ns3CDjVA7jTrEbi2OSa
                      _&share_app_id=1180&share_author_id=6644719926647160834&share_link_
                      id=996689a8-6334-4e26-a639-5f0050886928&sharer_language=en&social_sha
                      re_type=5&source=h5_t&timestamp=1719377115&u_code=d44ihf3kbjdh2c&ug_btm=b8727%2CEnlargeAvatarActi
                      vity&ugbiz_name=ACCOUNT&user_id=6644719926647160834&utm_campaign=client_share&utm_medium=
                      android&utm_source=copy"
            >
              <img src={fb1}></img>
            </a>
          </div>
          <div className="container text-center">
            <div className="card align-items-center">
              <h4 className=" mt-3">
                My Phone Number<h1>⬇️</h1>
              </h4>
            </div>
          </div>
          <div className=" p-2">
            <img src={fb2}></img>

            <h1>09163077429-Globe</h1>

            <img src={fb3}></img>
            <h1>cualesjn4@gmail.com</h1>
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

export default Contact1;
