import { NavLink } from "react-router-dom";
import "./Complexes.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Keyboard, Scrollbar } from "swiper";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { complexRequest } from "../apiCalls/apiCalls";

const Complexes = ({ complexName }) => {
  console.log(complexName);
  const [complex, setComplex] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    if (complexName === "Pennsylvania") {
      complexRequest(1)
        .then((data) => setComplex(data))
        .catch((err) => setError("There was an error"));
    } else if (complexName === "Marble") {
      complexRequest(2)
        .then((data) => setComplex(data))
        .catch((err) => setError("There was an error"));
    } else {
      complexRequest(3)
        .then((data) => setComplex(data))
        .catch((err) => setError("There was an error"));
    }
  }, [complexName]);
  console.log(complex);
  const apartmentAmmentities = complex.ameneties
    ?.split(".")
    .map((ammentity) => {
      console.log(ammentity);
      return <p>{ammentity}</p>;
    });
  const apartments = complex ? (
    complex.apartments?.map((apartment) => {
      return (
        <SwiperSlide className="swiper-slide">
          <div
            key={`${apartment.bathrooms}, ${apartment.bedrooms}`}
            className="complex-apartment-div"
            style={{
              backgroundImage: `url(${apartment.photos.bedroom})`,
              backgroundSize: "cover",
            }}
          >
            <NavLink
              to={`/${apartment.bedrooms}Bed/${apartment.bathrooms}Bath/${apartment.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p className="swiper-paragraph">
                {apartment.bedrooms} Bed, {apartment.bathrooms} Bath
              </p>
            </NavLink>
          </div>
        </SwiperSlide>
      );
    })
  ) : (
    <p>one sec</p>
  );

  return error ? (
    <div className="error-message">
      <h3>Sorry an issue has occured</h3>
    </div>
  ) : (
    <section className="complexes">
      {/* <img src={apartmentComplex} alt="Penn Apartment Complex" /> */}
      <div
        className="heading-div"
        style={{
          backgroundImage: `url(${complex.preview_photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <h2>Pennsylvania</h2> */}
        <h2>{complex.address}</h2>
      </div>
      <div className="complex-info">
        <div className="complex-overview">
          <h4>Overview</h4>
          <p>{complex.description}</p>
        </div>
        <div className="apartment-features">
          <h4>Apartment Features</h4>
          {apartmentAmmentities}
        </div>
      <div className="complex-apartments-wrapper">
        <div className="complex-apartments">
          <Swiper
            modules={[Navigation, Mousewheel, Keyboard, Scrollbar]}
            slidesPerView={1}
            navigation={true}
            scrollbar={{ draggable: true }}
            keyboard={true}
            mousewheel={true}
            className="all-swiper-movies"
          >
            {apartments}
            
          </Swiper>
        </div>

    
      </div>
      </div>

    </section>
  );
};

export default Complexes;
