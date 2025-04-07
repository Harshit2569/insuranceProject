import React from "react";
import HomeLoan from "../Images/home loan.jpg";
import CarLoan from "../Images/car loan.jpg";
import FamilyLoan from "../Images/family loan.jpg";
function Need() {
  return (
    <>
      <div className="needs">
        <div className="container">
          <div className="content row">
            <div className="wide-md center">
              <h3 className="fs-3 fw-semibold">
                <strong className="fs-6">Insurify helps YOUR</strong> <br />
                Needs and Requirement
              </h3>
              <div className="row row-column-md">
                <div className="col-sm-4">
                  <div className="image image-md circle">
                    <img src={HomeLoan} className="mx-auto" alt="" />
                  </div>
                  <h5 className="colorPrimary px-5 py-2">Home Loan Solution</h5>
                  <p className="px-5 py-2">
                    You are covered sed quia non numquam empora incidunt ut lare
                    et dolore mag.
                  </p>
                </div>

                {/* 2 */}
                <div className="col-sm-4">
                  <div className="image image-md circle">
                    <img src={CarLoan} className="mx-auto" alt="" />
                  </div>
                  <h5 className="colorPrimary px-5 py-2">
                    Car buying Services
                  </h5>
                  <p className="px-5 py-2">
                    You are covered sed quia non numquam empora incidunt ut lare
                    et dolore mag.
                  </p>
                </div>
                {/* 3 */}
                <div className="col-sm-4">
                  <div className="image image-md circle">
                    <img src={FamilyLoan} className="mx-auto" alt="" />
                  </div>
                  <h5 className="colorPrimary px-5 py-2">
                    Retirement Solution
                  </h5>
                  <p className="px-5 py-2">
                    You are covered sed quia non numquam empora incidunt ut lare
                    et dolore mag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Need;
