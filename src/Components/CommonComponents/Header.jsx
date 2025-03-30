import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      {/* <div className="header">
        <div className="container">
          <div className="row pt-2 d-none d-lg-flex align-items-center">
            <div className="col-lg-12">
              <h6 className="x">We are licensed in NY, NJ, PA, MA, FL, CT</h6>
              <div>
                <div className="socialMedialinks">
                  <div className="d-flex gap-3 ">
                    <a href="#">
                      <i className="ri-facebook-line" />
                    </a>
                    <a href="#">
                      <i className="ri-twitter-x-line" />
                    </a>
                    <a href="#">
                      <i className="ri-google-line" />
                    </a>
                    <a href="#">
                      <i className="ri-linkedin-line" />
                    </a>
                    <i className="ri-phone-line">(800)123-5689</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* copy */}
      <div className="headerSec">
        <div className="container pt-2">
          <div className="d-none d-lg-flex justify-content-between align-items-center">
            <h6 className="license">
              We are licensed in NY, NJ, PA, MA, FL, CT
            </h6>
            <div className="socialMediaHead">
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <Link to="https://www.facebook.com/">
                    <i className="ri-facebook-line" />
                  </Link>
                </li>
                <li>
                  <Link to="https://x.com">
                    <i className="ri-twitter-x-line" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.google.com/">
                    <i className="ri-google-line" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/">
                    <i className="ri-linkedin-line" />
                  </Link>
                </li>
                <i className="ri-phone-line">(800)123-5689</i>
                <div className="Btns">
                  <button className="GetBtn">
                    <Link to="/quote" className="getBtn">Get a Quote</Link>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
