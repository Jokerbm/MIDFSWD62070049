// Home page
// Post content page
// Tag/Category page
// Author page
// View comment/Create comment
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar pure-u-1-4 pure-u-md-1-4" >
      <div className="header">
        <a href={`/`}>
          <h1 className="brand-title">Ryu Blog</h1>
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="pure-button" href="/post">
                post{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
