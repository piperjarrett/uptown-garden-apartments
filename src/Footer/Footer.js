import "./Footer.css";
import horizontalLogo from "../assets/LogoColorTextBelow.jpeg";
const Footer = () => {
  return (
    <footer>
      <img src={horizontalLogo} alt="apartment-logo" />
      <div className="footer-info">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>uptowngardensabq@gmail.com</p>
          <p>(505)-948-8299</p>
        </div>
        <div>
          <h4>Leasing Office</h4>
          <p>935 N Penn</p>
          <p>Mon - Friday: 9am - 6pm</p>
          <p>Sat & Sun: 11:00am - 5pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
