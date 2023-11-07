import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../asset/logo1.png";

const Navbar = ({ cart, total }) => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <Link class="navbar-brand" to="/">Home</Link> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <NavLink className="nav-item img " to="/">
              <img

                src={Logo}
                alt=""
                style={{ marginLeft: "29px", width: "254px", height: "65px" }}
              />
            </NavLink>
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <NavLink 
                className="nav-item "
                to="/" 
                >
                  <img src={Logo} alt="" width={"94px"} height={"65px"} />
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "red" : "black"}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "red" : "black"}`
                  }
                  to="/electronic"
                >
                  Electronic
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "red" : "black"}`
                  }
                  to="/grocery"
                >
                  Grocery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "red" : "black"}`
                  }
                  to="/gym"
                >
                  Gym
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "red" : "black"}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "red" : "black"}`
                  }
                  to="/myorder"
                >
                  MyOrder
                </NavLink>
              </li>
              <NavLink
                className={({ isActive }) =>
                  `nav-item ${isActive ? "red" : "black"}`
                }
                to="/cart"
              >
                <img
                  width="55"
                  height="55"
                  src="https://img.icons8.com/dotty/80/000000/shopping-cart.png"
                  alt="shopping-cart"
                />
                <span style={{ position: "absolute" }}>{cart}</span>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
