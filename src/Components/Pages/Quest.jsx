import React from "react";
import { Link } from "react-router-dom";
function Quest(){
      return (
        <>
          <div className="questSec">
            <div className="container">
              <div className="d-lg-flex justify-content-between pt-5 pb-5">
                <div className="headingText">
                  <h3>Commercial Insurance / Personal Insurance</h3>
                  <span>
                    Don't wait until it's too late. Contact for all of your
                    personal and commercial insurance.
                  </span>
                </div>
                <div>
                  <button className="quoteBtn mt-2">
                    <Link to="/quote" className="text-decoration-none text-dark">
                      Get a Quote
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default Quest;