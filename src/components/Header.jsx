import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Home from "./../Pagejs/Home";
import logo from "../assets/img/svg/logo.svg";

function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <section
        id="Header"
        className="bg-black navBar "
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000">
        <div className="  m-0 m-sm-auto">
          <nav className="py-3 nav_bg">
            <div className=" container px-2 px-sm-0 z_index_123">
              <div
                data-aos="fade-down"
                data-aos-delay="500"
                className="d-flex justify-content-between align-items-center w-100 ">
                <a className="text-white fs_sm" href="#">
                  <img className="Nav_logo" src={logo} alt="img" />
                </a>

                <ul className="d-flex gap-lg-4 gap-2  py-3  d-none d-lg-flex align-items-center mb-0 justify-content-end ps-0">
                  <li>
                    <Link to="/">
                      <span className=" d-block text-white fw-normal fs_sm opacity08 opacity_1 transition300 Nav_TAb_Bottom position-relative">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="z_index_123">
                    <div class="dropdown">
                      <button class="dropbtn">Dropdown</button>
                      <div class="dropdown-content z_index3">
                        <Link to="/Services">
                          <span className=" d-block ">Services</span>
                        </Link>
                        <Link to="/cloude">
                          <span className=" d-block ">Cloud Services</span>
                        </Link>
                        <Link to="/SdWan">
                          <span className=" d-block ">SD-WAN</span>
                        </Link>
                        <Link to="/CCaaS">
                          <span className=" d-block ">CCaaS</span>
                        </Link>
                        <Link to="/UCaaS">
                          <span className=" d-block ">UCaaS</span>
                        </Link>
                        <Link to="/Connectivity">
                          <span className=" d-block ">Connectivity</span>
                        </Link>
                        <Link to="/Colocation">
                          <span className=" d-block ">Colocation</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className="text-white fw-normal fs_sm opacity08 opacity_1 transition300"
                      href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <a
                  className="nav_btn fw-semibold fs_sm text-white d-inline-block d-none d-lg-flex transition300"
                  href="#">
                  <svg
                    className="me-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.95 21C17.8 21 15.7043 20.5207 13.663 19.562C11.6217 18.6033 9.81333 17.3367 8.238 15.762C6.66267 14.1873 5.396 12.379 4.438 10.337C3.48 8.295 3.00067 6.19933 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.729 7.746 9.687 7.938C9.645 8.13 9.54933 8.30067 9.4 8.45L7 10.9C7.7 12.1 8.575 13.225 9.625 14.275C10.675 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1127 20.775 15.288C20.925 15.4633 21 15.6673 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                      fill="white"
                    />
                  </svg>
                  <span className="ps-1"> 561-255-2407</span>
                </a>
                <div
                  style={{ zIndex: "1000" }}
                  className={
                    navShow
                      ? "threeline d-lg-none cursor_pointer"
                      : "threeline d-lg-none cursor_pointer"
                  }
                  onClick={() => setNavShow(!navShow)}>
                  <a href="#">
                    <div
                      className={
                        navShow ? " falseline1" : "  threelinechild"
                      }></div>
                    <div
                      className={
                        navShow ? "falseline" : " threelinechild"
                      }></div>
                    <div
                      className={
                        navShow ? "falseline3 " : "threelinechild"
                      }></div>
                  </a>
                </div>
              </div>
              <div className="d-lg-none d-flex justify-content-between ">
                <div className={` ${navShow ? "shownav " : "hidenav"}`}>
                  <ul className="d-flex flex-column gap-3 gap-xl-5 py-3 list-unstyled mb-0 align-items-center h-100 justify-content-center">
                    <li>
                      <Link onClick={() => setNavShow(!navShow)} to="/">
                        <span className=" d-block text-white fw-normal fs_sm opacity08 opacity_1 transition300 Nav_TAb_Bottom position-relative">
                          Home
                        </span>
                      </Link>
                    </li>
                    <li className="z_index_123">
                      <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content z_index3">
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/Services">
                            <span className=" d-block ">Services</span>
                          </Link>
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/cloude">
                            <span className=" d-block ">Cloud Services</span>
                          </Link>
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/SdWan">
                            <span className=" d-block ">SD-WAN</span>
                          </Link>
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/CCaaS">
                            <span className=" d-block ">CCaaS</span>
                          </Link>
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/UCaaS">
                            <span className=" d-block ">UCaaS</span>
                          </Link>
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/Connectivity">
                            <span className=" d-block ">Connectivity</span>
                          </Link>
                          <Link
                            onClick={() => setNavShow(!navShow)}
                            to="/Colocation">
                            <span className=" d-block ">Colocation</span>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="text-white fs_sm " href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
