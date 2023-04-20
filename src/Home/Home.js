import "./Home.css";
import horizontalLogo from "../assets/IMG_5558.PNG";
import verticalLogo from "../assets/logo.PNG";

const Home = () => {
  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/place/1113+Pennsylvania+St+NE,+Albuquerque,+NM+87110/@35.0899596,-106.5596542,17z/data=!3m1!4b1!4m6!3m5!1s0x87220aeac3a8918d:0x4a52193d676cae5f!8m2!3d35.0899596!4d-106.5596542!16s%2Fg%2F11h2p857b4"
    );
  };
  return (
    <div className="home">
      <div className="home-header">
        {/* <img src={horizontalLogo} alt="apartment-logo" />
        <img src={verticalLogo} alt="apartment-logo" /> */}
        <h1>Uptown Garden Apartments</h1>
      </div>
      <div className="homepage-content-container">
        <div className="homepage-contact">
          <div className="homepage-contact-info">
            <h3>Visit our Office</h3>
            <p onClick={openMaps} className="address">
              1113 Pennslyvania NE
            </p>
            <p onClick={openMaps} className="address">
              Albuqueuerque, NM. 87110
            </p>
          </div>
          <div className="homepage-contact-info">
            <h3>Let's Talk</h3>
            <p>(505)-948-8299</p>
          </div>
          <div className="homepage-contact-info">
            <h3>Email Us</h3>
            <p>uptowngardensabq@gmail.com</p>
          </div>
        </div>
        <div className="about-info">
          <h2>About Uptown Garden Apartments</h2>
          <p className="about-paragraph">
            Welcome to Uptown Apartments Complex that is located in the Uptown
            area of Albuqueuerque, New Mexico. Our complex boasts 78 spacious
            units with private backyards that are perfect for singles, couples,
            and families looking for a comfortable and convenient living space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
