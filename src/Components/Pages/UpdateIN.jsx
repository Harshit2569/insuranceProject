import React from "react";
import Home from "../Images/oneHome.jpg";
import NewYork from "../Images/NewYork.jpg";
import Ocean from "../Images/ocean.jpg";
function UpdateIN() {
  return (
    <>
      {/* <div className="pt-4 mt-4 update">
        <div className="container">
          <h2 className="text-center mt-5 p-3">Insurance Update from Blog</h2>
          <div className="row g-5 pt-5">
            <div className="col-lg-4">
              <div className="card">
                <div className="date">
                  <img src={Home} className="card-img-top" alt="..." />
                  <div className="postDate">
                    <span className="dates">
                      <strong className="text-center">01</strong>
                      MAR
                    </span>
                  </div>
                </div>
                <div className="cardBody">
                  <p className="Universal">
                    Time To Review Your Universal Life Policy
                  </p>
                  <p className="lifePolicy">
                    "Is it time to review your Universal Life policy? Ensure
                    your coverage still meets your needs and financial goals.
                    Let’s go over your policy together to maximize its benefits
                    and keep your future secure. Contact us today for a free
                    review!"
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="date">
                  <img
                    src={NewYork}
                    className="card-img-top imgFluid"
                    alt="..."
                  />
                  <div className="postDate">
                    <span className="dates">
                      <strong className="text-center">01</strong>
                      MAR
                    </span>
                  </div>
                </div>
                <div className="cardBody">
                  <p className="Universal">
                    Home Improvement: Contractor Vs. Do-It-Yourself
                  </p>
                  <p className="lifePolicy">
                    "Is it time to review your Universal Life policy? Ensure
                    your coverage still meets your needs and financial goals.
                    Let’s go over your policy together to maximize its benefits
                    and keep your future secure. Contact us today for a free
                    review!"
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="date">
                  <img src={Ocean} className="card-img-top" alt="..." />
                  <div className="postDate">
                    <span className="dates">
                      <strong className="text-center">01</strong>
                      MAR
                    </span>
                  </div>
                </div>
                <div className="cardBody">
                  <p className="Universal">
                    5 Tips For A More Secure Workplace
                  </p>
                  <p className="lifePolicy">
                    "Is it time to review your Universal Life policy? Ensure
                    your coverage still meets your needs and financial goals.
                    Let’s go over your policy together to maximize its benefits
                    and keep your future secure. Contact us today for a free
                    review!"
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div className="container pt-5 pb-5">
          <h2 className="text-center">Insurance Update from Blog</h2>
          <div className="row gy-2 pt-4">
            <div className="col-lg-4">
              <div className="card cardHover">
                <div className="date">
                  <div className="imgHover">
                    <img src={Home} className="card-img-top" alt="..." />
                  </div>
                  <div className="postDate">
                    <span className="dates">
                      <strong className="text-center">01</strong>
                      MAR
                    </span>
                  </div>
                </div>
                <div className="cardBody">
                  <p className="Universal">
                    Time To Review Your Universal Life Policy
                  </p>
                  <p className="lifePolicy">
                    "Is it time to review your Universal Life policy? Ensure
                    your coverage still meets your needs and financial goals.
                    Let’s go over your policy together to maximize its benefits
                    and keep your future secure. Contact us today for a free
                    review!"
                  </p>
                  <p className="lifePolicy"></p>
                  <a href="#" className="text-primary text-decoration-none">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-lg-4">
              <div className="card cardHover">
                <div className="date">
                  <div className="imgHover">
                    <img src={NewYork} className="card-img-top" alt="..." />
                  </div>
                  <div className="postDate">
                    <span className="dates">
                      <strong className="text-center">01</strong>
                      MAR
                    </span>
                  </div>
                </div>
                <div className="cardBody ">
                  <p className="Universal">
                    Home Improvement: Contractor Vs. Do-It-Yourself
                  </p>
                  <p className="lifePolicy">
                    "Is it time to review your Universal Life policy? Ensure
                    your coverage still meets your needs and financial goals.
                    Let’s go over your policy together to maximize its benefits
                    and keep your future secure. Contact us today for a free
                    review!"
                  </p>
                  <p className="lifePolicy"></p>
                  <a href="#" className="text-primary text-decoration-none">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-lg-4">
              <div className="card cardHover">
                <div className="date">
                  <div className="imgHover">
                    <img src={Ocean} className="card-img-top" alt="..." />
                  </div>
                  <div className="postDate">
                    <span className="dates">
                      <strong className="text-center">01</strong>
                      MAR
                    </span>
                  </div>
                </div>
                <div className="cardBody">
                  <p className="Universal">
                    5 Tips For A More Secure Workplace
                  </p>
                  <p className="lifePolicy">
                    "Is it time to review your Universal Life policy? Ensure
                    your coverage still meets your needs and financial goals.
                    Let’s go over your policy together to maximize its benefits
                    and keep your future secure. Contact us today for a free
                    review!"
                  </p>
                  <p className="lifePolicy"></p>
                  <a href="#" className="text-primary text-decoration-none">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateIN;
