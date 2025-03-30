import React from "react";
import { Link } from "react-router-dom";
import HelpingFamily from "../Images/HelpingFamliy.jpg";
import LivePolicy from "../Images/livePolicy.jpg";

function HelpingCard() {
  return (
    <>
      {/* <div>
        <div className="container">
          <div className="row row-md-column mt-5 pb-4">
            <div className="col-md-4 col-sm-6">
              <div className="familyCard">
                <h3 className="familyText">Our Family Helping your Family</h3>
                <div className="img">
                  <img src={HelpingFamily} alt="" />
                </div>
                <p>
                  Whether you’re looking for protection for you, tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercation ullamco laboris nisi ution
                  aliquip exon commodo.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="familyCard">
                <h3 className="familyText">Our Family Helping your Family</h3>
                <div className="img">
                  <img src={LivePolicy} alt="" />
                </div>
                <p>
                  Whether you’re looking for protection for you, tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercation ullamco laboris nisi ution
                  aliquip exon commodo.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <h5 className="familyText">Available Coverage Includes:</h5>
              <ul className="list-checker">
                <li>
                  <strong>Commercial Insurance</strong>
                </li>
                <li>
                  <strong>Auto Insurance</strong>
                </li>
                <li>
                  <strong>Benefit Program</strong>(including Life, Health and
                  Annuities)
                </li>
                <li>
                  <strong>Auto Service Programs</strong>
                  (protecting enim ad minim veniam, quis nostrud exercation
                  ullamco laboris nisi ution aliquip exon commodo and much, much
                  more)
                </li>
                <li>Homeowner’s Insurance</li>
              </ul>
              <div>
                <button className="talkBtn">NEED TO TALK US DIRECTLY</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <div className="container mt-5 mb-5">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="row p-2">
                <div className="col-md-6">
                  <div className="familyCard">
                    <h3 className="familyText">
                      Our Family Helping your Family
                    </h3>
                    <div className="img imgHover">
                      <img src={HelpingFamily} alt="" />
                    </div>
                    <p>
                      Whether you’re looking for protection for you, tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercation ullamco laboris nisi
                      ution aliquip exon commodo.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="familyCard">
                    <h3 className="familyText">
                      Our Family Helping your Family
                    </h3>
                    <div className="img imgHover">
                      <img src={LivePolicy} alt="" />
                    </div>
                    <p>
                      Whether you’re looking for protection for you, tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercation ullamco laboris nisi
                      ution aliquip exon commodo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row p-2">
                <div className="col-md-12">
                  <h5 className="familyText">Available Coverage Includes:</h5>
                  <ul className="list-checker">
                    <li>
                      <strong>Commercial Insurance</strong>
                    </li>
                    <li>
                      <strong>Auto Insurance</strong>
                    </li>
                    <li>
                      <strong>Benefit Program</strong>(including Life, Health
                      and Annuities)
                    </li>
                    <li>
                      <strong>Auto Service Programs</strong>
                      (protecting enim ad minim veniam, quis nostrud exercation
                      ullamco laboris nisi ution aliquip exon commodo and much,
                      much more)
                    </li>
                    <li>Homeowner’s Insurance</li>
                  </ul>
                  <div>
                    <button className="talkBtn">
                      <Link
                        to="/quote"
                        className="text-decoration-none text-light"
                      >
                        NEED TO TALK US DIRECTLY
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HelpingCard;
