import React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapComponent = () => {
  const center = {
    lat: 35.09035229225651,
    lng: -106.55981704428112,
  };
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 35.09035229225651, lng: -106.55981704428112 },
      map,
      title: "1113 Pennsylvania NE",
    });
    return marker;
  };

  return (
    <div style={{ height: "50vh", width: "80vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {/* <AnyReactComponent
          lat={35.09035229225651}
          lng={-106.55981704428112}
          text="1113 Pennsylvania"
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
