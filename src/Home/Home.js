import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Uptown Garden Apartments</h1>
      <div className="homepage-content-container">
        <div className="homepage-contact">
          <div className="homepage-contact-info">
            <h3>Visit our Office</h3>
            <p>1113 Pennslyvania NE</p>
            <p>Albuqueuerque, NM. 87110</p>
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
