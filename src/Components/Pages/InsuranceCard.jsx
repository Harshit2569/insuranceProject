import React from "react";
function InsuranceCard() {
  return (
    <>
      <div className="bg-transparent">
        <div className="container pt-5 pb-5">
          <div className="row gy-5">
            <div className="col-md-6">
              <div className="homeText">
                <p>
                  Switch to Insurify <span>Home Insurance</span> and you could
                  <span> Save up 16%</span>.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="homeTwo">
                <p>
                  Protecting <span>Auto + Property</span> Insurance now you
                  could<span> Save 5% extra</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InsuranceCard;
