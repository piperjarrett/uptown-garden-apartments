import { NavLink } from "react-router-dom";
import verticalLogo from "../assets/LogoColorTextRight.jpeg";
import "./NavBar.css";

const NavBar = () => {
  const openEmail = () => {
    window.open("mailto:uptowngardensabq@gmail.com?");
  };
  return (
    <nav className="nav-bar">
      <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <img
          className="vertical-logo"
          alt="uptown apartments logo"
          src={verticalLogo}
        />
      </NavLink>
      <div className="dropdown">
        <p className="complex">Complexes</p>
        <div className="dropdown-content">
          <NavLink
            to="/Pennsylvania"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>penn</p>
          </NavLink>
          <NavLink
            to="/Dallas"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Dallas</p>
          </NavLink>
          <NavLink
            to="/Marble"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Marble</p>
          </NavLink>
        </div>
      </div>

      <NavLink
        to="/location"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <p>About The Location</p>
      </NavLink>
      <div className="dropdown">
        <p>Contact Us</p>
        <div className="dropdown-content">
          <img src="" />
          <p>(505)-948-8299</p>

          <img src="" />
          <p onClick={openEmail}>uptowngardensabq@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
