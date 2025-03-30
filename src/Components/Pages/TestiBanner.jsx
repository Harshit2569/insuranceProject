import React from "react";
function TestiBanner(){
      return (
        <>
          <div className="testBanner">
            <div className="bannerText">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center pt-5">
                      <div className="textBanner">
                        <h3 className="text-dark">Testimonials</h3>
                        <span className="text-dark">
                          Our clients speak for us. Their experiences <br /> reflect
                          our commitment to excellence and quality service.
                        </span>
                      </div>
                      <div>
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
export default TestiBanner;