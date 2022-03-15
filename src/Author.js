// Home page
// Post content page
// Tag/Category page
// Author page
// View comment/Create comment
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useParams, useResolvedPath } from "react-router-dom";
import Footer from "./footer";

import "./App.css";
var dayjs = require("dayjs");

function Author() {
  const [post, setposts] = useState([]);
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function fetchMyAPI() {
      let getdata = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/posts?author=" + id
      );
      let getuser = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/users"
      );
      let fuck = await setposts(getdata.data);
      let fuck2 = await setuser(getuser.data);
      let fuck3 = await setloading(false);
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
      <div id="layout" className="pure-g">
        <Sidebar />

        <div
          className="content pure-u-1 pure-u-md-3-4"
          style={{ width: "75%" }}
        >
          <div>
            <h1 className="content-subhead">USER: {user[id - 1].name}</h1>

            {post.map((num) => (
              <div className="posts" key={num.id}>
                <section className="post">
                  <header className="post-header">
                    {/* <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="/img/common/tilo-avatar.png"> */}

                    <h2 className="post-title">{num.title.rendered}</h2>

                    <p className="post-meta">
                      By{" "}
                      <a href={"/author/" + num.author} className="post-author">
                        {user[num.author - 1].name}
                      </a>{" "}
                      {dayjs(num.date).format("YYYY-MMMM-DD")}{" "}
                      {/* <a class="post-category post-category-design" href="#">
                        CSS
                      </a>{" "}
                      <a class="post-category post-category-pure" href="#">
                        Pure
                      </a> */}
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
export default Author;
