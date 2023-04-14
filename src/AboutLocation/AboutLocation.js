import GoogleMap from "../GoogleMap/GoogleMap";
import "./AboutLocation.css";

const AboutLocation = () => {
  return (
    <div className="about-location">
      <div className="about-location-top">
        <h2>Nearby Uptown Garden Apartments</h2>
        <div className="location-education">
          <h3>Education</h3>
          <div className="college">
            <h4>University of New Mexico</h4>
            <p>Drive: 10 min</p>
            <p>4.2 mi.</p>
          </div>
          <div className="college">
            <h4>Central New Mexico University, Albuquerque</h4>
            <p>Drive: 11 min</p>
            <p>4.8 mi.</p>
          </div>
        </div>
      </div>
      <div className="location-public-schools">
        <h3>Public Schools</h3>
        <div className="public-schools-container">
          <div className="school">
            <h4>Mark Twain</h4>
            <p>Public Elementry School</p>
            <p>Grades: PK-5th</p>
          </div>
          <div className="school">
            <h4>Hayes Middle</h4>
            <p>Public Middle School</p>
            <p>Grades: 6th-8th</p>
          </div>
          <div className="school">
            <h4>Highlands High</h4>
            <p>Public High School</p>
            <p>Grades: 9th-12thh</p>
          </div>
        </div>
      </div>
      <div className="location-attractions">
        <h3>Attractions Nearby</h3>
        <div className="attractions-container">
          <div className="attraction">
            <h4>ABQ Uptown</h4>
            <p>Drive: 4 min</p>
            <p>1.4 mi</p>
          </div>
          <div className="attraction">
            <h4>Expo New Mexico</h4>
            <p>Drive: 4 min</p>
            <p>1.5 mi</p>
          </div>
          <div className="attraction">
            <h4>ABQ Internattional Airport</h4>
            <p>Drive: 14 min</p>
            <p>5.9 mi</p>
          </div>
        </div>
      </div>
      <div className="location-get-to">
        <h3>Easy To Get To</h3>
        <div className="get-to-container">
          <div className="get-to">
            <h4>Jerry Cline Park</h4>
            <p>Walk: 12 min</p>
            <p>0.5 mi</p>
          </div>
          <div className="get-to">
            <h4>1-40 Entrance</h4>
            <p>Drive: 6 min</p>
            <p>0.8 mi.</p>
          </div>
        </div>
      </div>
      <div className="google-map">
        <h3>On a Map</h3>
        <GoogleMap />
      </div>
    </div>
  );
};

export default AboutLocation;
