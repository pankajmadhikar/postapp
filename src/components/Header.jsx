import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink to={"/"}>
            <img
              className="logo-img"
              src="https://res.cloudinary.com/nirmitee-io/image/upload/v1655042071/nirmitee/nirmitee_p4nmh2.png"
              alt="logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Whatsapp chatbot and Integration Services
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Platform Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Website Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobile Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Audit And Consultancy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Website Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        AI/ML Product Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SASS Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Node JS Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Node JS Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        React JS Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        React Native Development
                      </a>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="nav-item">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Case Studies
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Agriculture
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Automotive
                      </a>
                    </li>
                  </ul>
                </li>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to={"https://pmportfolioresume.netlify.app/"}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to={"https://pankajmadhikar.github.io/resumeapp/"}>
                  Resume
                </NavLink>
              </li>
            </ul>
            <button className="talk-btn">Talk to our Experts </button>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
