import React from "react";
import Location from "../Images/location.png"
function FromContact() {
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Contact Information</h2>
              <div className="row pt-4 pb-4">
                <div className="col-sm-5">
                  <p>
                    <strong>Insurify Inc.</strong> <br /> 34 South Franklin Road{" "}
                    <br />
                    Santa Ana, CA 8975, USA.
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <strong>Contact Number</strong> <br />
                    Phone: 781-123-9865
                    <br />
                    Toll Free: 800-123-5689
                  </p>
                </div>
                <div className="col-sm-3">
                  <p>
                    <strong>Office Hours</strong>
                    <br />
                    Monday-Friday
                    <br />
                    8:30am-5:00pm
                  </p>
                </div>
                <h4 className="pt-3"> Submit  the form </h4>
                <form className="d-flex flex-column gap-4 pt-2 pb-4">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Name*"
                      ></input>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email*"
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Phone*"
                      ></input>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Alternate Num*"
                      ></input>
                    </div>
                  </div>
                  <div className="row">
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
                        placeholder="State,City,ZIP*"
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Type of Product Interest*"
                      ></input>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Best time to reach*"
                      ></input>
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
                  <button className="formBtn">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div className="imgLocation">
                <a href="#">
                  <img src={Location} alt="" />
                </a>
                <a
                  href="https://maps.google.com/"
                  className="text-decoration-none"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FromContact;
