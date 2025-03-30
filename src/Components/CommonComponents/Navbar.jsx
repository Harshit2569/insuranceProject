import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Images/logo.png";


function NavBar() {
  // const [aboutIsOpen,aboutIsCLose] =  useState(false)
  // const [isDropDownOpen, setDropDownClose] = useState(false);
  const [isOpen,isClose] = useState(false)
  const [activeItem,setIsActive] = useState(false)

  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <img src={Logo} className="companyLogo" alt="" />
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav d-flex gap-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        HOME
                      </a>
                    </li>
                    <li
                      className={`nav-item dropdown ${
                        aboutIsOpen ? "show" : ""
                      }`}
                      onMouseEnter={() => aboutIsCLose(true)}
                      onMouseLeave={() => aboutIsCLose(false)}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="{isDropDownOpen}"
                      >
                        About
                      </a>
                      <ul
                        className={`dropdown-menu ${aboutIsOpen ? "show" : ""}`}
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            About - Alter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Teams - Classic
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Teams - Alter
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            FAQs - Classics
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Contact - Extend
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Report a Claim
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Shortcode Section
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Typography Visuals
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`nav-item dropdown ${
                        isDropDownOpen ? "show" : ""
                      }`}
                      onMouseEnter={() => setDropDownClose(true)}
                      onMouseLeave={() => setDropDownClose(false)}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="{isDropDownOpen}"
                      >
                        INSURANCE SERVICES
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          isDropDownOpen ? "show" : ""
                        }`}
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Service Page Styles
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            HomeOwner's Insurance
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Personal Insurance
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Auto Insurance
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Commercial Insurance
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Life & Health Insurance
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Renter's Insurance
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        TESTIMONIALS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        CLIENT RESOURCES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        BLOG
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div> */}
      <div className="fixedNav sticky-lg-top top-0 bg-light z-3 ">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="d-lg-flex justify-content-between gap-3">
                <Link to="/">
                  <div className="d-flex align-items-center justify-content-between">
                    <img src={Logo} className="companyLogo" alt="" />
                    <button className="d-lg-none Quotes">
                      <Link to="/"></Link>
                      Get Quote
                    </button>
                  </div>
                </Link>
                <nav className="navbar  navbar-expand-lg">
                  <div className="container d-sm-flex justify-content-center">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={() => isClose(!isOpen)}
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      aria-controls="navbarSupportedContent"
                    >
                      <i
                        className={`fs-2 ${
                          isOpen ? "ri-close-line" : "ri-menu-line"
                        }`}
                      ></i>
                    </button>
                    <div
                      className={`collapse navbar-collapse ${
                        isOpen ? "show" : ""
                      }`}
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav  d-lg-flex  gap-3">
                        <li className="nav-item dropdown">
                          <Link
                            className={`nav-link ${
                              activeItem === "home" ? "active" : ""
                            }`}
                            onClick={(e) => setIsActive("home")}
                            to="/"
                          >
                            HOME
                          </Link>
                        </li>

                        <li className="nav-item dropdown">
                          {/* <Link className="nav-link" to="/about">
                            ABOUT
                          </Link> */}
                          <Link
                            className={`nav-link ${
                              activeItem === "about" ? "active" : ""
                            }`}
                            onClick={() => setIsActive("about")}
                            to="/about"
                          >
                            ABOUT
                          </Link>
                        </li>

                        <li className="nav-item dropdown">
                          {/* <Link className="nav-link toggle" to="/insurance">
                            INSURANCE SERVICES
                          </Link> */}
                          <Link
                            className={`nav-link ${
                              activeItem === "insurance" ? "active" : ""
                            }`}
                            onClick={() => setIsActive("insurance")}
                            to="/insurance"
                          >
                            INSURANCE
                          </Link>

                          {/* <Link
                            className={`nav-link ${
                              activeItem === "insurance" ? "active" : ""
                            }`}
                            onClick={() => handleActiveItem("insurance")}
                            to="/insurance"
                          >
                            INSURANCE
                          </Link> */}
                        </li>
                        <li className="nav-item">
                          {/* <Link className="nav-link" to="/insurtest">
                            TESTIMONIALS
                          </Link> */}
                          <Link
                            className={`nav-link ${
                              activeItem === "insurtest" ? "active" : ""
                            }`}
                            onClick={() => setIsActive("insurtest")}
                            to="/insurtest"
                          >
                            TESTIMONIALS
                          </Link>
                        </li>
                        <li className="nav-item">
                          {/* <Link className="nav-link" to="/clientResource">
                            CLIENT RESOURCES
                          </Link> */}
                          <Link
                            className={`nav-link ${
                              activeItem === "clientResource" ? "active" : ""
                            }`}
                            onClick={() => setIsActive("clientResource")}
                            to="/clientResource"
                          >
                            CLIENT RESOURCES
                          </Link>
                        </li>
                        <li className="nav-item">
                          {/* <Link
                            className="nav-link"
                            aria-current="page"
                            to="/blog"
                          >
                            BLOG
                          </Link> */}
                          <Link
                            className={`nav-link ${
                              activeItem === "blog" ? "active" : ""
                            }`}
                            onClick={() => setIsActive("blog")}
                            to="/blog"
                          >
                            BLOG
                          </Link>
                        </li>
                        <li className="nav-item">
                          {/* <Link
                            className="nav-link"
                            aria-current="page"
                            to="/contact"
                          >
                            CONTACT
                          </Link> */}
                          <Link
                            className={`nav-link ${
                              activeItem === "contact" ? "active" : ""
                            }`}
                            onClick={() => setIsActive("contact")}
                            to="/contact"
                          >
                            CONTACT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <nav className="navbar  navbar-expand-lg bg-sky-300 position-sticky">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default NavBar;
