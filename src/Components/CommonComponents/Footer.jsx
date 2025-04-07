import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png"
function Footer() {
  return (
    <>
      <div className="footerWidget">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div>
                <h2 className="footerText">OUR SERVICES</h2>
                <div>
                  <ul className="serviceList">
                    <li>
                      <a href="#">HomeOwner's Insurance</a>
                    </li>

                    <li>
                      <a href="#">Personal Insurance</a>
                    </li>
                    <li>
                      <a href="#">Auto Insurance</a>
                    </li>
                    <li>
                      <a href="#">Commercial Insurance</a>
                    </li>
                    <li>
                      <a href="#">Life & Health Insurance</a>
                    </li>

                    <li>
                      <a href="#">Renter's Insurance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h2 className="footerText">QUICK LINKS</h2>
              <div>
                <ul className="serviceList">
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/insurtest">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/clientResource">Client Resources</Link>
                  </li>
                  <li>
                    <Link to="/blog">Our Blog</Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h2 className="footerText">PROUDLY SERVING</h2>
              <ul className="addressList">
                <li>Brooklyn, NY</li>
                <li>Bushwick, NY</li>
                <li>Long Beach, CA</li>
                <li>Los Alamitos, CA</li>
                <li>New Jersey, NJ</li>
                <li>Florida, FL</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="logo">
                <Link to="/">
                <img src={Logo} alt="" />
                </Link>
                <ul className="addressList pt-2">
                  <li>Toll Free: 800-123-5689</li>
                  <li>Phone: 781-123-9865</li>
                  <li>Fax: 781-123-0011</li>
                  <li>34 South Franklin Road Santa Ana, CA 8975, USA.</li>
                </ul>
              </div>
              <div className="socialMedia">
                <ul className="d-flex gap-2">
                  <li>
                    <Link to="https://www.facebook.com/">
                      <i class="ri-facebook-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://x.com">
                      <i class="ri-twitter-x-line"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/">
                      <i class="ri-linkedin-box-fill"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
