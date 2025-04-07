import React from "react";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import Insurify from "../Pages/Insurify";
import StoryNdPro from "./StoryNdProm";
import CompanyTeam from "./CompanyTeam";
import PropertyPage from "./PropertyPage";
import Quest from "../Pages/Quest"
// import Companies from "../Pages/Companies"
import CardsSwiper from "./CardsSwiper";
import Footer from "../CommonComponents/Footer";
import Copyright from "../CommonComponents/Copyright"

function AboutUs(){
      return (
        <>
          <Header />
          <NavBar />
          <Insurify />
          <div className="text-bg-light">
            <div className="container">
              <div className="row pt-5 pb-5">
                <div className="col-md-12">
                  <div className="insurifyText d-lg-flex flex-column justify-content-center mt-5 mb-5">
                    <p className="mx-auto">
                      About Insurify: Personal, Auto, Home, Commercial Insurance
                      and more in USA.
                    </p>
                    <h6 className="mx-auto">
                      Why we’re an Insurance Agency... And why it matters to
                      you.
                    </h6>
                    <div>
                      <p className="insurancePara fs-5 mx-auto text-lg-center pt-5 pb-2">
                        When an insurance agent represents one company, on the
                        other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the
                        charms of pleasure of the moment, so blinded by desire,
                        that they cannot foresee the pain and trouble that are
                        bound.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StoryNdPro />
          <CompanyTeam />
          <PropertyPage />
          <Quest />
          {/* <Companies /> */}
          <CardsSwiper />
          
          <Footer />
          <Copyright />
        </>
      );
}
export default AboutUs;