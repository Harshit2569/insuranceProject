import React from "react";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import TestiBanner from "../Pages/TestiBanner";
import Quest from "../Pages/Quest";
import Footer from "../CommonComponents/Footer";
import CopyRight from "../CommonComponents/Copyright";
function InsurTest(){
      return (
        <>
          <Header />
          <NavBar />
          <TestiBanner />
          <div className="pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <div>
                      <h4>
                        “I have been a loyal customer of Insurify since 1999 (18
                        years!)”
                      </h4>
                      <p className="ceoText">
                        But so that we may understand where all this error came
                        from: I will reveal the entire matter and explain the
                        very things that were said by that discoverer of truth
                        and the so-called architect of a blessed life.
                      </p>
                      <div>
                        <h3 className="fs-6 fw-bold">David Alone</h3>
                        <span className="fs-6 fw-light">CEO, Company Name</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <p className="ceoText">
                        Auto insurance provides financial protection in case of
                        accidents, theft, or damage to your vehicle. Most
                        policies cover liability, collision, and comprehensive
                        damages, ensuring peace of mind on the road. Choosing
                        the right plan depends on factors like coverage limits,
                        deductibles, and state requirements. Stay protected and
                        drive with confidence
                      </p>
                      <h3 className="fs-6 fw-bold">Newman H.</h3>
                    </div>
                    <div className="pt-3">
                      <p className="ceoText">
                        I have car showrooms in... and all this mistake was
                        born, causing suffering to be accused and praised. I
                        will reveal the whole matter and explain the very things
                        that were said by the inventor of truth
                      </p>
                      <h3 className="fs-6 fw-bold">Robert W.</h3>
                      <span className="fs-6 fw-light">CEO, Company Name</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4>This agency is tops in customer service.”</h4>
                    <p className="ceoText pt-4">
                      But from where all this error was born, which brings
                      accusation and praise to suffering, I will reveal the
                      entire matter and explain the very things that were said
                      by the inventor of truth
                    </p>
                    <div>
                      <h3 className="fs-6 fw-bold">Maribel M.</h3>
                      <span className="fw-light">CEO, Company Name</span>
                    </div>
                  </div>

                  <div>
                    <p className="ceoText pt-3">
                      For no one truly understands why, from where all this
                      error was born, which brings accusation and praise to
                      suffering, I will reveal the entire matter. And also those
                      very things that were said by the inventor of truth and
                      the so-called architect of a blessed life will be
                      explained
                    </p>
                    <h3 className="fs-6 fw-bold">Jimmy Alan</h3>
                  </div>
                  <div>
                    <p className="ceoText pt-3">
                      For no one truly understands why, from where all this
                      error was born, which brings accusation and praise to
                      suffering, I will reveal the entire matter
                    </p>
                    <h3 className="fs-6 fw-bold">Williams Jhon</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Quest/>
          <Footer/>
          <CopyRight/>


        </>
      );
}
export default InsurTest;