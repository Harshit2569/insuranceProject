import React from "react";
import { Link } from "react-router-dom";
function GetStarted(){
      return (
        <>
          <div className="getStarted">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="pullRight mt-5">
                    <h3 className="insuranceTitle">
                      How Much Life Insurance Do I Need?
                    </h3>
                    <h5 className="insuranceCoverage">
                      Find the life insurance coverage that best fits your
                      needs.
                    </h5>
                    <div className="pt-4">
                      <button type="button" class="btns ">
                        <Link to="/" className="text-decoration-none">
                        Get Started
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default GetStarted;