import React from "react";

function CopyRight(){
      return (
        <>
          <div className="copyRight">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 d-lg-flex gap-2 siteMap">
                  <p>Copyright © 2019 Insurify Inc. License #1010155</p>
                  <span>.</span>
                  {/* <a href="#">Privacy Policy</a>
                  <span>.</span>
                  <a href="#">Sitemap</a> */}
                </div>
                <div className="col-sm-5">
                  <p className="d-none" >
                    Template Design & Made
                    <em className="fa fa-heart text-danger"></em> by
                    <a href="#"> Softnio</a>
                  </p>
                </div>
                <div className="col-sm-12">
                  <p className="small">
                    <strong>Disclaimer:</strong>
                    The material on this website is for demostration purpose
                    only and is provided denounce with righteous indignation and
                    dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue. These cases are perfectly simple and easy to
                    distinguish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default CopyRight;