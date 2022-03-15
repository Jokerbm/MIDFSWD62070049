// Home page
// Post content page
// Tag/Category page
// Author page
// View comment/Create comment
import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./footer";



import "./App.css";

function Home() {
  return (
    <div id="layout" className="pure-g">
      <Sidebar />

      <div className="content pure-u-1 pure-u-md-3-4" style={{ width: "75%" }}>
        <div>
        <h1 className="content-subhead">HOME</h1>

          
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
          />

         <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
