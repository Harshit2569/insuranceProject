import React from "react";
import Aetna from "../Images/aetna.jpg";
import Zurich from "../Images/zurich.jpg";
import Encompass from "../Images/Enocompass.jpg";
import Mutual from "../Images/mutual.jpg";
import America from "../Images/Transamerica.jpg";
import Travel from "../Images/travel.jpg";
import Jackson from "../Images/jackson.jpg";
import Prudential from "../Images/prudential.jpg";
import Header from "../CommonComponents/Header";
import NavBar from "../CommonComponents/Navbar";
import CompaniesBanner from "../Pages/CompaniesBanner";
import Quest from "../Pages/Quest";
import Footer from "../CommonComponents/Footer";
import CopyRight from "../CommonComponents/Copyright";
function ClientResource() {
  return (
    <>
      <Header />
      <NavBar />
      <CompaniesBanner />
      <div className="mx-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={Aetna} className="card-img-top  " alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  {" "}
                  <span className="text-body-tertiary fw-bolder">
                    Claim:
                  </span>{" "}
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  {" "}
                  <span className="text-body-tertiary fw-bolder">
                    Billing:
                  </span>{" "}
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>

            {/* 2 */}
            <div className="col-md-3">
              <div className="card">
                <img src={Zurich} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  {" "}
                  <span className="text-body-tertiary fw-bolder">
                    Claim:
                  </span>{" "}
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  {" "}
                  <span className="text-body-tertiary fw-bolder">
                    Billing:
                  </span>{" "}
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
            {/* 3 */}
            <div className="col-md-3">
              <div className="card">
                <img src={Encompass} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Claim:</span>
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Billing:</span>
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
            {/* 4 */}
            <div className="col-md-3">
              <div className="card">
                <img src={Mutual} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Claim:</span>
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Billing:</span>
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
            {/* 5 */}
            <div className="col-md-3 pt-5">
              <div className="card">
                <img src={America} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Claim:</span>{" "}
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Billing:</span>{" "}
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
            {/* 6 */}
            <div className="col-md-3 pt-5">
              <div className="card">
                <img src={Prudential} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder"> Claim:</span>{" "}
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Billing:</span>{" "}
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
            {/* 7 */}
            <div className="col-md-3 pt-5">
              <div className="card">
                <img src={Travel} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Claim:</span>
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Billing:</span>
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
            {/* 8 */}
            <div className="col-md-3 pt-5">
              <div className="card">
                <img src={Jackson} className="card-img-top" alt="..." />
              </div>
              <div className="pt-2">
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Claim:</span>
                  800-123-4567
                </h3>
                <h3 className="fs-6">
                  <span className="text-body-tertiary fw-bolder">Billing:</span>
                  800-123-9876
                </h3>
                <a href="#" className="text-decoration-none">
                  Pay Bill Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quest />
      <Footer />
      <CopyRight />
    </>
  );
}
export default ClientResource;
