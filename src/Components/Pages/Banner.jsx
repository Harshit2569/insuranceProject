import React from "react";
// import HandShake from "../Images/handshake.jpg";
// import Person from "../Images/person.jpg";
// import Mili from "../Images/mili.jpg";
function Banner() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* <img
                    src={HandShake}
                    className=" w-100 object-fit-contain"
                    alt="..."
                  /> */}
                  <div className="bgImg">
                    <div className="carousel-caption d-md-block">
                      <h5 className="text-light">
                        INSURANCE YOUR BUSINESS WITH
                      </h5>
                      <h3 className="bannerHomeText mt-4">INSURIFY</h3>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="twoImg">
                    <div className="carousel-caption  d-md-block">
                      <h5 className="text-light">
                        INSURANCE YOUR BUSINESS WITH INSURIFY
                      </h5>
                      <h3 className="bannerHomeText mt-4">INSURIFY</h3>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  {/* <img
                    src={Mili}
                    className=" w-100 object-fit-contain"
                    alt="..."
                  /> */}
                  <div className="threeImg">
                    <div className="carousel-caption  d-md-block">
                      <h5 className="text-light">
                        INSURANCE YOUR BUSINESS WITH INSURIFY
                      </h5>
                      <h3 className="bannerHomeText mt-4">INSURIFY</h3>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon "
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
    </>
  );
}
export default Banner;
