import MapComponent from "../MapComponent/MapComponent";
import "./AboutLocation.css";
import LocationCard from "../LocationCard/LocationCard";
import { useEffect } from "react";
import { aboutLocationRequest } from "../apiCalls/apiCalls";
import { useState } from "react";

const AboutLocation = () => {
  const [aboutLocation, setAboutLocation] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    aboutLocationRequest()
      .then((data) => setAboutLocation(data))
      .catch((err) => setError("There was an error"));
  }, []);

  const aboutLocationCards = Object.keys(aboutLocation).map(
    (aboutLocationKey, index) => {
      let keyToUpperCase;
      if (aboutLocationKey.includes("_")) {
        const keySplit = aboutLocationKey.split("_").map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        keyToUpperCase = keySplit.join(" ");
      } else {
        keyToUpperCase =
          aboutLocationKey.charAt(0).toUpperCase() + aboutLocationKey.slice(1);
      }
      const locationCards = aboutLocation[aboutLocationKey].map(
        (detail, index) => {
          return <LocationCard details={detail} key={index} />;
        }
      );
      return (
        <div className="near-by-attraction" key={index}>
          <h4>{keyToUpperCase}</h4>
          <div className="university-location-cards">{locationCards}</div>
        </div>
      );
    }
  );

  return aboutLocation === {} ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : error ? (
    <div>
      <h2>Sorry an error occured, please try again later</h2>
    </div>
  ) : (
    <div className="about-location">
      <div className="about-location-top">
        <h2>Explore the Neighboorhood</h2>
        <div className="about-location-top-div">
          <p className="about-location-top-p">
            The Uptown Garden Apartments are located in a prime location in
            Albuquerque's desirable Uptown area, just blocks from the 'Q',
            Winrock and Cornado shopping and business centers. Take a stroll
            through the charming neighborhood to reach the Jerry Cline park and
            tennis Center. Several bus lines are conveniently located on Lomas,
            Wyoming, and Louisiana Streets.
          </p>
        </div>
      </div>
      {aboutLocationCards}
      <div className="google-map">
        <h3>On a Map</h3>
        <MapComponent />
      </div>
    </div>
  );
};

export default AboutLocation;
