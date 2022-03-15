// Home page
// Post content page
// Tag/Category page
// Author page
// View comment/Create comment
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import "./App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="pure-menu pure-menu-horizontal">
        <ul>
          <li className="pure-menu-item">
            <a href="https://www.facebook.com/ryuchotichan" className="pure-menu-link">
              About
            </a>
          </li>
          <li className="pure-menu-item">
            <a
              href="https://github.com/Jokerbm"
              className="pure-menu-link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
