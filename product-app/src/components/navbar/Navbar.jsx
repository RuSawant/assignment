import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="container-fluid px-0">
      <div className="navbar-container">
        <div className="nav-links flex mb-3">
          <div className="dashboard align-items-center">
            <i class="fa-solid fa-arrow-down-wide-short"></i>
          </div>
          <div className="navlist">
            <div className="list">
              <ul className="list rows mt-3 ">
                <li>Home</li>
                <li>Shop</li>
                <li>Magazine</li>
              </ul>
            </div>
            <div className="search">
              <div className="list">
                <ul className="list rows mt-3 ">
                  <li>
                    <i class="px-3 icons fa-solid fa-search"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
