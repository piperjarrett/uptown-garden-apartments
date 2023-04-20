import { NavLink } from "react-router-dom";
import apartmentComplex from "../assets/complex-image.jpg";
import "./Complexes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navigation, Keyboard, Scrollbar } from "swiper";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Complexes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    // nextArrow: "../assets/arrow-left-334.svg",
    // prevArrow: "../assets/arrow-left-334.svg",
  };

  return (
    <section className="complexes">
      {/* <img src={apartmentComplex} alt="Penn Apartment Complex" /> */}
      <div
        className="heading-div"
        style={{
          backgroundImage: `url(${apartmentComplex})`,
          backgroundSize: "cover",
        }}
      >
        <h2>Pennsylvania</h2>
      </div>
      <div className="complex-info">
        <div className="complex-overview">
          <h4>Overview</h4>
        </div>
        <div className="apartment-features">
          <h4>Apartment Features</h4>
          <p>Pool</p>
          <p>Washer and dryer</p>
          <p>Coin Laundry</p>
        </div>
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
            <SwiperSlide className="swiper-slide">
              <div
                className="complex-apartment-div"
                style={{
                  backgroundImage: `url(${apartmentComplex})`,
                  backgroundSize: "cover",
                }}
              >
                <NavLink
                  to="/2bed/1bath"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <p>1 Bed, 1 Bath</p>
                </NavLink>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="complex-apartment-div"
                style={{
                  backgroundImage: `url(${apartmentComplex})`,
                  backgroundSize: "cover",
                }}
              >
                <NavLink
                  to="/2bed/1bath"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <p>3 Bed, 2 Bath</p>
                </NavLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <Slider {...settings}>
          <NavLink
            to="/2bed/1bath"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div
              className="complex-apartment-div"
              style={{
                backgroundImage: `url(${apartmentComplex})`,
                backgroundSize: "cover",
              }}
            >
              <p>2 Bed, 1 Bath</p>
            </div>
          </NavLink>
          {/* <div>
            <h1>Hello</h1>
          </div> */}
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Complexes;
