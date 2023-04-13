import "./AboutLocation.css";

const AboutLocation = () => {
  return (
    <div className="about-location">
      <div className="about-location-top">
        <h2>Nearby Uptown Garden Apartments</h2>
        <div className="location-education">
          <h3>Education</h3>
          <div className="college">
            <p>University of New Mexico</p>
            <p>Drive: 10 min</p>
            <p>4 mi.</p>
          </div>
          <div className="college">
            <p>Central New Mexico University</p>
            <p>Drive: 10 min</p>
            <p>4 mi.</p>
          </div>
        </div>
      </div>
      <div className="location-public-schools">
        <h3>Public Schools</h3>
        <div className="public-schools">
          <div className="school">
            <p>Mark Twain</p>
            <p>Public Elementry School</p>
            <p>Grades: PK-5th</p>
          </div>
          <div className="school">
            <p>Hayes Middle</p>
            <p>Public Middle School</p>
            <p>Grades: 6th-8th</p>
          </div>
          <div className="school">
            <p>Highlands High</p>
            <p>Public High School</p>
            <p>Grades: 9th-12thh</p>
          </div>
        </div>
      </div>
      <h3>On a Map</h3>
    </div>
  );
};

export default AboutLocation;
