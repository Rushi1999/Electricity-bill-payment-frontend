import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  let [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    setLoginStatus(sessionStorage.getItem("isUserLoggedIn"));
  }, []);

  if (loginStatus) {
    return (
      /**----------------------------------------new header-------------------------------- */
      <header id="header" class="header fixed-top header sticky-top">
        <div
          class="container-fluid container-xl d-flex align-items-center
          justify-content-between"
        >
          <a href="/" class="logo d-flex align-items-center">
            <img src="https://img.icons8.com/cotton/64/000000/electricity.png" />
            <span>E-Pay</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="blog.html">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="blog.html">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="blog.html">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="blog.html">
                  Team
                </a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li class="dropdown">
                <a href="blog.html">
                  <span>Services</span>{" "}
                  <i
                    class="bi
                    bi-chevron-down"
                  ></i>
                </a>
                <ul>
                  <li class="dropdown">
                    <a href="#">
                      <span>Customer</span>
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/customerregister">Customer Profile</a>
                      </li>
                      <li>
                        <a href="/customer">Check Customer Profiles</a>
                      </li>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a href="#">
                      <span>Connections</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/newconnectionreq">New Connection Request</a>
                      </li>
                      <li>
                        <a href="/connection">Check all connection</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/reading">Reading</a>
                  </li>
                  <li>
                    <a href="/bill">Bill</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Payment</span>
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/payment">All Payments</a>
                      </li>
                      <li>
                        <a href="/billpayment">Pay/ViewBill</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  } else {
    return (
      // <header class="header sticky-top">
      //   <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
      //     <div class="container">
      //       <Link className="navbar-brand" to="/">
      //         <img
      //           src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
      //           height="24px"
      //           alt="Capgemini"
      //         />
      //       </Link>
      //       <button
      //         class="navbar-toggler"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target="#navbarResponsive"
      //       >
      //         <span class="navbar-toggler-icon"></span>
      //       </button>
      //       <div class="collapse navbar-collapse" id="navbarResponsive">
      //         <ul class="navbar-nav ml-auto">
      //           <li className="nav-item">
      //             <Link className="nav-link" to="/register">
      //               Register
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link className="nav-link" to="/login">
      //               Login
      //             </Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </header>

      <header id="header" class="header fixed-top header sticky-top">
        <div
          class="container-fluid container-xl d-flex align-items-center
        justify-content-between"
        >
          <a href="/" class="logo d-flex align-items-center">
            <img src="https://img.icons8.com/cotton/64/000000/electricity.png" />
            <span>E-Pay</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>

              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/register">
                  Register
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;
