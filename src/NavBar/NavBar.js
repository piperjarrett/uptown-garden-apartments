import { NavLink } from "react-router-dom";
import horizontalLogo from "../assets/IMG_5558.PNG";
import verticalLogo from "../assets/logo.PNG";
import "./NavBar.css";
import phoneIcon from "../assets/phone-svgrepo-com.svg";
import emailIcon from "../assets/mail-svgrepo-com.svg";
import calenderClock from "../assets/calendar-clock.svg";
import { useState } from "react";

const NavBar = () => {
  const [checked, setChecked] = useState(false);

  const openEmail = () => {
    window.open("mailto:uptowngardensabq@gmail.com?");
  };

  const changeCheck = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <nav className="nav-bar">
      <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <div className="logo">
          <img
            className="horizontal-logo"
            src={horizontalLogo}
            alt="uptown apartments logo"
          />
          <img
            className="vertical-logo"
            alt="uptown apartments logo"
            src={verticalLogo}
          />
        </div>
      </NavLink>
      <label for="toggle">&#9776;</label>
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={() => changeCheck()}
      />
      <div className="menu">
        <div className="dropdown">
          <p className="complex">Complexes</p>
          <div className="dropdown-content">
            <NavLink
              to="/complex/Pennsylvania"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p onClick={checked ? () => changeCheck() : null}>Pennsylvania</p>
            </NavLink>
            <NavLink
              to="/complex/Dallas"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p onClick={checked ? () => changeCheck() : null}>Dallas</p>
            </NavLink>
            <NavLink
              to="/complex/Marble"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p onClick={checked ? () => changeCheck() : null}>Marble</p>
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/location"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p
            className="about-location-p"
            onClick={checked ? () => changeCheck() : null}
          >
            About The Location
          </p>
        </NavLink>
        <div className="dropdown">
          <p>Contact Us</p>
          <div className="dropdown-content-contact">
            <div className="nav-contact-info">
              <img src={phoneIcon} alt="phone icon" className="phone-icon" />
              <a
                href="tel:5059488299"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <p>(505)-948-8299</p>
              </a>
            </div>
            <div className="nav-contact-info">
              <img src={emailIcon} alt="email icon" className="email-icon" />
              <p className="email-paragraph" onClick={openEmail}>
                uptowngardensabq@gmail.com
              </p>
            </div>
            <div className="nav-contact-info">
              <img
                src={calenderClock}
                alt="calendar and clock icon"
                className="calendar-clock-icon"
              />
              <p className="hours-paragraph">Mon - Fri: 10am - 5pm</p>
              <p className="hours-paragraph">Sat: 2pm - 4pm</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
