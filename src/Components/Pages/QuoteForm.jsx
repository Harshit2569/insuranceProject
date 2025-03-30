import React from "react";
function QuoteFrom() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="fs-4 fw-light pt-5">
                Please contact us with questions and to set-up an appointment
                for a free quote by filling out the form below or giving us a
                call
              </h2>
              <form className="d-flex flex-column gap-3 pt-4 pb-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Name*"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Company*"
                    ></input>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email Address*"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone Number*"
                    ></input>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Address*"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="City,State,Zip*"
                    ></input>
                  </div>
                </div>
                <div>
                  <h2 className="fs-4 mt-2 mb-2">
                    Type Of Product You Interested
                  </h2>
                  <div className="row pt-4 pb-2">
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        placeholder="Homeowners Insurance"
                      />
                      <label htmlFor="" className="px-2">
                        Homeowners Insurance
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        placeholder="Homeowners Insurance"
                      />
                      <label htmlFor="" className="px-2">
                        Personal Insurance
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input type="checkbox" name="" id="" placeholder="" />
                      <label htmlFor="" className="px-2">
                        Auto Insurance
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        placeholder="Homeowners Insurance"
                      />
                      <label htmlFor="" className="px-2">
                        Commercial Insurance
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        placeholder="Homeowners Insurance"
                      />
                      <label htmlFor="" className="px-2">
                        Life Insurance
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        placeholder="Homeowners Insurance"
                      />
                      <label htmlFor="" className="px-2">
                        Health Insurance
                      </label>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="col-md-4">
                      <input type="checkbox" name="" id="" placeholder="" />
                      <label htmlFor="" className="px-2">
                        Rentals Insurance
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input type="checkbox" name="" id="" placeholder="" />
                      <label htmlFor="" className="px-2">
                        Others
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="row gy-2 pt-4 pb-4">
                    <div className="col-md-6">
                      <label htmlFor="">Best time to reach</label>
                      <select className="form-select mt-2">
                        <option selected>Please select</option>
                        <option value={1}>09AM - 12PM</option>
                        <option value={2}>12PM - 03PM</option>
                        <option value={3}>03PM - 06PM</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Hear About Us</label>
                      <select className="form-select mt-2">
                        <option selected>Please select</option>
                        <option value={1}>Friends</option>
                        <option value={2}>Facebook</option>
                        <option value={3}>Google</option>
                        <option value={3}>Colleagues</option>
                        <option value={3}>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <textarea
                        placeholder="Messages/Questions"
                        id="floatingTextarea"
                        rows="4"
                        className="formArea w-100"
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-3 mt-2 mb-2 pb-3">
                    <button className="formBtn ">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 mt-2 mb-2 pt-5 pb-5">
              <div className="contactInfoBox">
                <div>
                  <h3 className="fs-5 fw-bold">Contact Information</h3>
                  <span className="text-body-secondary fw-semibold">
                    Insurify Inc.
                  </span>
                  <p>
                    34 South Franklin Road <br />
                    Santa Ana, CA 8975, USA.
                  </p>
                </div>
                {/* contact */}
                <div>
                  <h3 className="fs-6 text-body-secondary fw-semibold ">
                    Contact Number
                  </h3>
                  <h6 className="fw-light">Phone: 781-123-9865</h6>
                  <h6 className="fw-light">Toll Free: 800-123-5689</h6>
                </div>
                <div>
                  <h3 className="fs-6 pt-2">Office Hours</h3>
                  <h6 className="fw-light">Monday - Friday</h6>
                  <h6 className="fw-light">8:30am-5:00pm </h6>
                </div>
                {/* <div className="pt-3">
                  <a
                    href="#"
                    className="text-decoration-none fs-5 claimInsurance"
                  >
                    Insurance Claim
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuoteFrom;
