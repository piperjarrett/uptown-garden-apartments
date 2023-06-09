import "./Apartment.css";
import { useEffect, useState } from "react";
import { apartmentRequest } from "../apiCalls/apiCalls";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import {
  Navigation,
  Keyboard,
  Scrollbar,
  Mousewheel,
  Pagination,
} from "swiper";
import { NavLink } from "react-router-dom";
import leftArrow from "../assets/left-arrow.png";

const Apartment = ({ apartmentMatch }) => {
  console.log(apartmentMatch);
  const [apartment, setApartment] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apartmentRequest(apartmentMatch.params.id)
      .then((data) => setApartment(data))
      .catch((err) => setError("There was an error"));

    window.scrollTo(0, 0);
  }, []);

  const openEmail = () => {
    window.open("mailto:uptowngardensabq@gmail.com?");
  };
  console.log(apartmentMatch);
  const apartmentAmentities = apartment.ameneties
    ?.split(".")
    .map((amentity) => {
      if (amentity) {
        return <li>{amentity}</li>;
      } else {
        return null;
      }
    });

  const apartmentsComplex = apartmentMatch.url.split("/")[1];

  return apartment.length === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : error ? (
    <div>
      <h2>Sorry an error occured, please try again later</h2>
    </div>
  ) : (
    <div className="ind-apartment">
      <NavLink
        to={`/complex/${apartmentsComplex}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <button className="back-click">
          <img src={leftArrow} alt="back arrow" className="back-arrow" />
          <p>Back To {apartmentsComplex} Complex</p>
        </button>
      </NavLink>
      <div className="ind-apartment-top">
        <div className="swiper-container">
          <div className="swiper-images">
            <Swiper
              className="swiper-slide"
              style={{
                "--swiper-navigation-size": "15px",
              }}
              modules={[
                Navigation,
                Mousewheel,
                Keyboard,
                Scrollbar,
                Pagination,
              ]}
              slidesPerView={1}
              navigation={true}
              keyboard={true}
              mousewheel={true}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
            >
              {Object.keys(apartment?.photos)
                .map((key) => {
                  return apartment.photos[key];
                })
                .map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="modal-swiper-div">
                      <img
                        className="apartment-image-swiper"
                        src={image}
                        alt={`Image ${index}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="ind-apartment-info">
          <h2>
            {apartment.bedrooms} Bedrooms | {apartment.bathrooms} Bathrooms
          </h2>
          <div className="apartment-details">
            <h4>{apartment.sqft} Sq. Ft.</h4>
            {apartment.floors === 1 ? (
              <h4>{apartment.floors} floor</h4>
            ) : (
              <h4>{apartment.floors} floors</h4>
            )}
            <h4>
              ${apartment.rent}/month{" "}
              {apartmentMatch.params.id <= 4
                ? " + utilities"
                : "(utilities included)"}
            </h4>
          </div>
          <div className="ind-apartment-buttons">
            <a href={process.env.PUBLIC_URL + "/New Application.pdf"} download>
              <button>Download Application</button>
            </a>
            <button onClick={openEmail}>Contact and Book a Tour</button>
          </div>
        </div>
      </div>
      <div className="ind-apartment-bottom">
        <h2>Ammentities</h2>
        {/* <div className="amentities-paragraphs"> */}
        <ul>{apartmentAmentities}</ul>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Apartment;
