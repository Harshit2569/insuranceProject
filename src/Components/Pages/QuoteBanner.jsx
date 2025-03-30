import React from "react";
function QuoteBanner() {
  return (
    <>
      <div className="testBanner">
        <div className="bannerText">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center pt-5">
                  <div className="textBanner">
                    <h3 className="text-dark fs-3">
                      Personal / Commercial <br /> Online Insurance Quote
                    </h3>
                    <span className="text-dark fs-5 fw-lighter">
                      Want to work with us or need more details about <br />
                      adipicing elit ncidut labore dolor unde omnis iste.
                    </span>
                  </div>
                  {/* <div>
                        <div class="cards d-none d-lg-flex">
                          <div class="card-body">
                            <p>
                              The <strong>Insurify</strong> makes it easy to get
                              any kind of insurance quote online.
                            </p>
                            <a href="#" className="quotes">
                              Start Quote
                            </a>
                          </div>
                        </div>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuoteBanner;
