import "./Footer.css";
import horizontalLogo from "../assets/IMG_5558.PNG";
import verticalLogo from "../assets/logo.PNG";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={horizontalLogo} alt="apartment-logo" className="footer-img" />
        <img src={verticalLogo} alt="apartment-logo" />
      </div>
      <div className="footer-info">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>uptowngardensabq@gmail.com</p>
          <p>(505)-948-8299</p>
        </div>
        <div>
          <h4>Leasing Office</h4>
          <p>1113 Pennslyvania NE</p>
          <p>Albuqueuerque, NM. 87110</p>
          <p>Mon - Friday: 10am - 5pm</p>
          <p>Sat: 2pm - 4pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
