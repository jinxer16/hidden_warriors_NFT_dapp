import React from "react";

const Header = () => {
  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky"
              src="img/logo.png"
              alt="sticky brand-logo"
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items ">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="./marketplace" className="nav-link">
                Marketplace
              </a>
            </li>

            <li className="nav-item">
              <a href="./activity" className="nav-link">
                My MInt
              </a>
            </li>
            <li className="nav-item">
              <a href="./profile" className="nav-link">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://tronscan.io/#/contract/TVp1v9DvD64HcjG8cmLj9PBCDLcgScLZg3/code"
                className="contractLink"
              >
                Contract
              </a>
            </li>
          </ul>
          <ul className="navbar-nav toggle">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#menu"
              >
                <i className="fas fa-bars toggle-icon m-0" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
