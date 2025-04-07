import React from "react";
import HomeLoan from "../Images/home loan.jpg";
import Renter from "../Images/renter.jpg";
// import Person from "../Images/person.jpg"
import Commercial from "../Images/commercialInsu.jpg"
import CarLoan from "../Images/car loan.jpg";
import LifeInsurance from "../Images/lifeInsurance.jpg"
import FamilyLoan from "../Images/family loan.jpg";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import Services from "../Pages/Services";

import Quest from "../Pages/Quest";
import Footer from "../CommonComponents/Footer";
import Copyright from "../CommonComponents/Copyright";
function InsuranceServices() {
  return (
    <>
      <Header />
      <NavBar />
      <Services />

      <div>
        <div className="container">
          <div className="row">
            <div className="needs">
              <div className="container">
                <div className="content row">
                  <div className="wide-md center">
                    <h3>
                      <strong>Insurify helps YOUR</strong> <br />
                      Needs and Requirement
                    </h3>
                    <div className="row row-column-md">
                      <div className="col-sm-4">
                        <div className="image image-md circle">
                          <img src={HomeLoan} className="mx-auto" alt="" />
                        </div>
                        <h5 className="colorPrimary pt-1 pb-1">
                          Homeowners Insurance
                        </h5>
                        <p className="text-body-secondary pt-1 pb-1">
                          Protection for where you live, and how you liv
                        </p>
                      </div>

                      {/* 2 */}
                      <div className="col-sm-4">
                        <div className="image image-md circle">
                          <img src={LifeInsurance} className="mx-auto" alt="" />
                        </div>
                        <h5 className="colorPrimary pt-1 pb-1">
                          Personal Insurance
                        </h5>
                        <p className="text-body-secondary pt-1 pb-1">
                          We stands behind you and your family when need.
                        </p>
                      </div>
                      {/* 3 */}
                      <div className="col-sm-4">
                        <div className="image image-md circle">
                          <img src={FamilyLoan} className="mx-auto" alt="" />
                        </div>
                        <h5 className="colorPrimary pt-1 pb-1">
                          Life Insurance
                        </h5>
                        <p className="text-body-secondary pt-1 pb-1">
                          Health insurance plans that fit you and your family.
                        </p>
                      </div>
                      {/* 4 */}
                      <div className="col-sm-4">
                        <div className="image image-md circle">
                          <img src={Commercial} className="mx-auto" alt="" />
                        </div>
                        <h5 className="colorPrimary pt-1 pb-1">
                          Commercial Insurance
                        </h5>
                        <p className="text-body-secondary pt-1 pb-1">
                          Get the right coverage for your small business.
                        </p>
                      </div>
                      {/* 5 */}
                      <div className="col-sm-4">
                        <div className="image image-md circle">
                          <img src={CarLoan} className="mx-auto" alt="" />
                        </div>
                        <h5 className="colorPrimary pt-1 pb-1">
                          Auto Insurance
                        </h5>
                        <p className="text-body-secondary pt-1 pb-1">
                          Coverage that fits for your car and motorcycle
                        </p>
                      </div>
                      {/* 6 */}
                      <div className="col-sm-4">
                        <div className="image image-md circle">
                          <img src={Renter} className="mx-auto" alt="" />
                        </div>
                        <h5 className="colorPrimary pt-1 pb-1">
                          Renter's Insurance
                        </h5>
                        <p className="text-body-secondary pt-1 pb-1">
                          Renters insurance is an affordable way to cover.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quest />
      <Footer />
      <Copyright />
    </>
  );
}
export default InsuranceServices;
