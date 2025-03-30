import React from "react";
import InPhoto from "../Images/InPhoto.jpg";

function TextInsurance() {
  return (
    <>
      <div className="insurance">
        <div className="container mt-5 mb-5 pt-4">
          <div className="row">
            <div className=" col-md-6 d-lg-flex flex-column gap-2 mt-3">
              <h2 className="text-primary fs-2">
                Insurify offering Auto, Boat,  Business, Car, Flood, Home
                & Motorcylce Insurance.
              </h2>
              <h4>Quality coverage at competitive rates.</h4>
              <p className="text-body-secondary fw-light fs-4">
                As a full-service independent insurance company sed ut
                perspiciatis unde omnis. Iseste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ollo inventore.
              </p>
              <h4>We're helps you to making decisions about insurance.</h4>
            </div>
            <div className="col-md-6 p-4">
              <div className="card">
                <img src={InPhoto} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TextInsurance;
