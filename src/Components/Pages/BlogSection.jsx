import React from "react";
import Home from "../Images/oneHome.jpg";
import NewYork from "../Images/NewYork.jpg";
import Family from "../Images/family.jpg";
import Ocean from "../Images/ocean.jpg";
function BlogSection() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-8 pt-5 pb-2">
                <div className="row">
                  <div className="col-md-6 p-3">
                    <div className="imgHover">
                      <img src={Home} alt="" className="w-100 h-100 imgBlog" />
                    </div>
                    <div className="datesPolicy">
                      <h4>22 SEP, 2023</h4>
                    </div>
                    <div>
                      <p className="Universal">
                        Time To Review Your Universal Life Policy
                      </p>
                      <p className="lifePolicy">
                        "Is it time to review your Universal Life policy? Ensure
                        your coverage still meets your needs and financial
                        goals. Let’s go over your policy together to maximize
                        its benefits and keep your future secure. Contact us
                        today for a free review!"
                      </p>
                      <p className="lifePolicy"></p>
                      <a href="#" className="text-primary text-decoration-none">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="imgHover">
                      <img src={NewYork} alt="" className="w-100 h-100" />
                    </div>
                    <div className="datesPolicy">
                      <h4>26 SEP, 2023</h4>
                    </div>
                    <div>
                      <p className="Universal">
                        Home Improvement: Contractor Vs. Do-It-YourSelf
                      </p>
                      <p className="lifePolicy">
                        "Is it time to review your Universal Life policy? Ensure
                        your coverage still meets your needs and financial
                        goals. Let’s go over your policy together to maximize
                        its benefits and keep your future secure. Contact us
                        today for a free review!"
                      </p>
                      <p className="lifePolicy"></p>
                      <a href="#" className="text-primary text-decoration-none">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="imgHover">
                      <img src={Ocean} alt="" className="w-100 h-100" />
                    </div>
                    <div className="datesPolicy">
                      <h4>30 SEP, 2023</h4>
                    </div>
                    <div>
                      <p className="Universal">
                        5 Tips For A More Secure <br /> Workplace
                      </p>
                      <p className="lifePolicy">
                        "Is it time to review your Universal Life policy? Ensure
                        your coverage still meets your needs and financial
                        goals. Let’s go over your policy together to maximize
                        its benefits and keep your future secure. Contact us
                        today for a free review!"
                      </p>
                      <p className="lifePolicy"></p>
                      <a href="#" className="text-primary text-decoration-none">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="imgHover">
                      <img src={Family} alt="" className="w-100 h-100" />
                    </div>
                    <div className="datesPolicy">
                      <h4>01 OCT, 2023</h4>
                    </div>
                    <div>
                      <p className="Universal">
                        Home Improvement: Contractor Vs. Do-It-YourSelf
                      </p>
                      <p className="lifePolicy">
                        "Is it time to review your Universal Life policy? Ensure
                        your coverage still meets your needs and financial
                        goals. Let’s go over your policy together to maximize
                        its benefits and keep your future secure. Contact us
                        today for a free review!"
                      </p>
                      <p className="lifePolicy"></p>
                      <a href="#" className="text-primary text-decoration-none">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="imgHover">
                      <img src={NewYork} alt="" className="w-100 h-100" />
                    </div>
                    <div className="datesPolicy">
                      <h4>5 OCT, 2023</h4>
                    </div>
                    <div>
                      <p className="Universal">
                        Mariano Rivera Teaches Fire Safety to Student
                      </p>
                      <p className="lifePolicy">
                        "Is it time to review your Universal Life policy? Ensure
                        your coverage still meets your needs and financial
                        goals. Let’s go over your policy together to maximize
                        its benefits and keep your future secure. Contact us
                        today for a free review!"
                      </p>
                      <p className="lifePolicy"></p>
                      <a href="#" className="text-primary text-decoration-none">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 p-3">
                    <div className="imgHover">
                      <img src={Home} alt="" className="w-100 h-100" />
                    </div>
                    <div className="datesPolicy">
                      <h4>10 OCT, 2023</h4>
                    </div>
                    <div>
                      <p className="Universal">
                        Why Do I Need Insurance After I Close My Business?
                      </p>
                      <p className="lifePolicy">
                        "Is it time to review your Universal Life policy? Ensure
                        your coverage still meets your needs and financial
                        goals. Let’s go over your policy together to maximize
                        its benefits and keep your future secure. Contact us
                        today for a free review!"
                      </p>
                      <p className="lifePolicy"></p>
                      <a href="#" className="text-primary text-decoration-none">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ////////// */}
              <div className="col-md-4 pt-5 pb-2">
                {/* <div className="formGroup mt-3">
                  <input type="text" name="" id="" className="searchBar" placeholder="Search.." />
                  <button className="searchBtn">
                    <i className="fa fa-search"></i>
                  </button>
                </div> */}
                <div className="formGroup mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-button"
                  />
                  <button className="searchBtn">
                    <i className="fa fa-search"></i>
                  </button>
                  <div></div>
                </div>

                <div className="recentPost">
                  <h3 className="fs-3 pt-5">Recent Post</h3>
                  <div className="pt-5">
                    <img src={Family} alt="" className="imgFLoat" />
                    <p className="text">
                      Sed ut perspiciatis unde omnis iste natus error sit volup
                      accus antium doloremque laudantiu...
                    </p>
                  </div>
                  <hr />
                  <div className="">
                    <img src={Ocean} alt="" className="imgFLoat" />
                    <p className="text">
                      Sed ut perspiciatis unde omnis iste natus error sit volup
                      accus antium doloremque laudantiu...
                    </p>
                  </div>
                  <hr />
                  <div className="">
                    <img src={NewYork} alt="" className="imgFLoat" />
                    <p className="text">
                      Sed ut perspiciatis unde omnis iste natus error sit volup
                      accus antium doloremque laudantiu...
                    </p>
                  </div>
                  <hr />
                  <div className="">
                    <img src={Home} alt="" className="imgFLoat" />
                    <p className="text">
                      Sed ut perspiciatis unde omnis iste natus error sit volup
                      accus antium doloremque laudantiu...
                    </p>
                  </div>
                </div>
                {/* tag */}

                <div className="pt-5 pb-5">
                  <h3>Tags</h3>
                  <div className="row gy-1 g-2 pt-3 mt-3">
                    <div className="col-md-3">
                      <div className="businessBtn">
                        <a href="#">Business</a>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="businessBtn">
                        <a href="#">Life</a>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="businessBtn">
                        <a href="#">Personal</a>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="businessBtn">
                        <a href="#">Safe</a>
                      </div>
                    </div>
                  </div>

                  <div className="row gy-3 g-2 pt-3">
                    <div className="col-md-3">
                      <div className="businessBtn">
                        <a href="#">Fast</a>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="businessBtn ">
                        <a href="#">Autos</a>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="businessBtn">
                        <a href="#">Benefits</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* contactInformation */}
                <div className="pt-5 pb-5">
                  <div className="contactInfoBox">
                    <div>
                      <h3 className="fs-5 fw-bold">Contact Information</h3>
                      <span className="text-body-secondary fw-semibold">
                        Insurify Inc.
                      </span>
                      <p>
                        34 South Franklin Road <br />
                        Santa Ana, CA 8975, USA.
                      </p>
                    </div>
                    {/* contact */}
                    <div>
                      <h3 className="fs-5 text-body-secondary fw-semibold ">
                        Contact Number
                      </h3>
                      <h6 className="fw-light">Phone: 781-123-9865</h6>
                      <h6 className="fw-light">Toll Free: 800-123-5689</h6>
                    </div>
                    <div className="pt-3">
                      <a href="#" className="text-decoration-none fs-5 quotes">
                        Insurance Claim
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogSection;
