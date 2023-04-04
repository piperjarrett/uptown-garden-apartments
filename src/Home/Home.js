import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Uptown Garden Apartments</h1>
      <div className="homepage-content-container">
        <div className="homepage-contact">
          <div className="homepage-contact-info">
            <p>Visit our Office</p>
            <p>925 N Penn</p>
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
          <p>
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
