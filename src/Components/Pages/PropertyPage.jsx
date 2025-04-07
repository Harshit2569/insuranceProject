import React from "react";
import OneBlock from "../Images/oneBlock.jpg"
function PropertyPage(){
      return (
        <>
          <div className="propertySection pt-5">
            <div className="container">
              <div className="row d-flex align-items-center px-3 pt-5 pb-5">
                <div className="col-md-7">
                  <div className="d-lg-flex flex-column gap-5">
                    <div className="d-lg-flex flex-column gap-3">
                      <h3 className="text-light fs-5">
                        We can insure your property rights.
                      </h3>

                      <p className="text-light fs-6">
                        As part of our work, there is no one who seeks pain
                        itself, who loves pain for its own sake, or who desires
                        to obtain it simply because it is pain, unless it
                        happens occasionally due to some special circumstances.
                      </p>
                    </div>
                    <div className="d-lg-flex flex-column gap-3">
                      <h3 className="text-light fs-5">
                        We have experience and expertise.
                      </h3>
                      <p className="text-light fs-6">
                        It is not only about what we do, but about the fact that
                        there is no one who seeks pain itself, who loves pain
                        for its own sake, or who desires to obtain it simply
                        because it is pain, unless it happens occasionally due
                        to some special circumstances, in order to attain some
                        great benefit or advantage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="imgHover">
                    <img src={OneBlock} alt="" className="imgFluids" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default PropertyPage;