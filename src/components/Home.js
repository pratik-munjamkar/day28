import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-text">Sidebar </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <Link to="/">
          <li className="nav-item active">
            <span className="nav-link">User List</span>
          </li>
        </Link>
        <hr className="sidebar-divider" />
        <Link to="/adduser">
          <li className="nav-item active">
            <span className="nav-link">Add User</span>
          </li>
        </Link>
        <hr className="sidebar-divider" />
      </ul>
    </>
  );
};

export default Home;