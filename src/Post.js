// Home page
// Post content page
// Tag/Category page
// Author page
// View comment/Create comment
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./footer";
import { useParams } from "react-router-dom";

import "./App.css";
var dayjs = require("dayjs");
async function callYourAPI(a, b, c) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic ZnN3ZDpmc3dkLWNtcw==",
  };

  await axios
    .post(
      "https://fswd-wp.devnss.com/wp-json/wp/v2/comments?posts",
      { content: b, author_name: a, post: c },
      {
        headers: headers,
      }
    )
    .then((res) => {
      console.log(res);
      document.location.reload();
    });
}

function Post() {
  let { id } = useParams();
  const [post, setposts] = useState([]);
  const [user, setuser] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [tags, settags] = useState([]);
  const [comment, setcomment] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function fetchMyAPI() {
      let getdata = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/posts/" + id
      );
      let getuser = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/users"
      );
      let gettags = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/tags"
      );
      let getCategories = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/categories"
      );
      let getcomment = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/comments?post=" + id
      );
      await setposts(getdata.data);
      await setuser(getuser.data);
      await settags(gettags.data);
      await setcomment(getcomment.data);
      await setCategories(getCategories.data);
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
    return (
      <div id="layout" className="pure-g">
        <Sidebar />

        <div
          className="content pure-u-1 pure-u-md-3-4"
          style={{ width: "75%" }}
        >
          <div>
            <h1 className="content-subhead">Post: {post.title.rendered}</h1>

            <div className="posts" key={post.id}>
              <section className="post">
                <header className="post-header">
                  {/* <img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="/img/common/tilo-avatar.png"> */}

                  <h2 className="post-title">{post.title.rendered}</h2>

                  <p className="post-meta">
                    By{" "}
                    <a href={"/author/" + post.author} className="post-author">
                      {user[post.author - 1].name}
                    </a>{" "}
                    {dayjs(post.date).format("YYYY-MMMM-DD")}{" "}
                  </p>
                </header>

                <div className="post-description" style={{ width: "75%" }}>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
              </section>
            </div>

            <div className="post-description" style={{ width: "75%" }}>
              <div>
                Published in{" "}
                {post.categories.map((num) => {
                  let tmp = "";
                  Categories.map((ryu) => {
                    if (num == ryu.id) {
                      tmp = ryu.name;
                    }
                  });
                  return (
                    <a>
                      <a href={"/categories/" + num} className="post-author">
                        {tmp}
                      </a>{" "}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="post-description" style={{ width: "75%" }}>
              <div>
                Tag :{" "}
                {post.tags.map((num) => {
                  let tmp = "";
                  tags.map((ryu) => {
                    if (num == ryu.id) {
                      tmp = ryu.name;
                    }
                  });
                  return (
                    <a>
                      <a href={"/tags/" + num} className="post-author">
                        {tmp}
                      </a>{" "}
                    </a>
                  );
                })}
              </div>
            </div>
            <hr></hr>

            <form class="pure-form">
              <fieldset class="pure-group">
                <input
                  id="name"
                  class="pure-input-1-2"
                  type="text"
                  placeholder="กรอกชื่อ"
                  required={true}
                />

                <textarea
                  id="comment"
                  class="pure-input-1-2"
                  placeholder="Comment"
                  required={true}
                ></textarea>
              </fieldset>
            </form>
            <button
              onClick={() =>
                callYourAPI(
                  document.getElementById("name").value,
                  document.getElementById("comment").value,
                  id
                )
              }
              // type="submit"
              class="pure-button pure-input-1-2 pure-button-primary"
            >
              comment
            </button>
            <div className="post-description" style={{ width: "75%" }}>
              {comment.map((con) => {
                return (
                  <div>
                    <p>Author: {con.author_name}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: con.content.rendered }}
                    />

                    <hr></hr>
                  </div>
                );
              })}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
