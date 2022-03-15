// Home page
// Post content page
// Tag/Category page
// Author page
// View comment/Create comment
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./footer";

import "./App.css";
var dayjs = require("dayjs");

function App() {
  const [post, setposts] = useState([]);
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function fetchMyAPI() {
      let getdata = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/posts?per_page=100"
      );
      let getuser = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/users"
      );
      await setposts(getdata.data);
      await setuser(getuser.data);
      await setloading(false);
    }

    fetchMyAPI();
  }, []);
  if (loading) {
    return (
      <div className="App">
        <p>loading</p>
      </div>
    );
  } else {
    // console.log(comment);

    return (
      <div id="layout" className="pure-g" style={{ width: "100%" }}>
        <Sidebar />

        <div
          className="content pure-u-2-3 pure-u-md-3-4"
          // style={{ width: "75%" }}
        >
          <div>
            <h1 className="content-subhead">Post</h1>

            {post.map((num) => (
              <div className="posts" key={num.id}>
                <section className="post">
                  <header className="post-header">
                    {/* <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="/img/common/tilo-avatar.png"> */}

                    <h2 className="post-title">{num.title.rendered}</h2>

                    <p className="post-meta">
                      By{" "}
                      <a href={"author/" + num.author} className="post-author">
                        {user[num.author - 1].name}
                      </a>{" "}
                      {dayjs(num.date).format("YYYY-MMMM-DD")}{" "}
                    </p>
                  </header>

                  <div className="post-description" style={{ width: "75%" }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: num.content.rendered }}
                    />
                  </div>
                  <div className="post-description" style={{ width: "75%" }}>
                    <a href={`/post/` + num.id}>
                      <div>continue reading</div>
                    </a>
                  </div>
                </section>
              </div>
            ))}

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
