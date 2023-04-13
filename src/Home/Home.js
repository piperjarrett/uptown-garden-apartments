import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Uptown Garden Apartments</h1>
      <div className="homepage-content-container">
        <div className="homepage-contact">
          <div className="homepage-contact-info">
            <p>Visit our Office</p>
            <p>1113 Pennslyvania NE</p>
            <p>Albuqueuerque, NM. 87110</p>
          </div>
          <div className="homepage-contact-info">
            <p>Let's Talk</p>
            <p>(505)-948-8299</p>
          </div>
          <div className="homepage-contact-info">
            <p>Email Us</p>
            <p>uptowngardensabq@gmail.com</p>
          </div>
        </div>
        <div className="about-info">
          <h2>About Uptown Garden Apartments</h2>
          <p className="about-paragraph">
            Welcome to Uptown Apartments Complex that is located in the heart of
            Albuqueuerque, New Mexico. Our complex boasts 78 spacious units that
            are perfect for singles, couples, and families looking for a
            comfortable and convenient living space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
