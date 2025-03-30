import React from "react";
function CompaniesBanner(){
      return (
        <>
          <div className="companyBanner">
            <div className="container">
              <div className="row">
                <div className="p-5">
                  <h2 className="text-center text-light fw-bold">
                    Companies We Represent
                  </h2>
                  <p className="text-center text-light">
                    Some of the companies we represent are shown below. <br />{" "}
                    Please don’t hesitate to contact us if you have a claim or
                    billing issue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default CompaniesBanner;