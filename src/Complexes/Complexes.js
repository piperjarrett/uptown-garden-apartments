import { NavLink } from "react-router-dom";
import apartmentComplex from "../assets/complex-image.jpg";
import "./Complexes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Complexes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
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
      <div className="complex-apartments">
        <Slider {...settings}>
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
              <p>1 Bed, 1 Bath</p>
            </div>
          </NavLink>
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
              <p>3 Bed, 2 Bath</p>
            </div>
          </NavLink>
        </Slider>
      </div>
    </section>
  );
};

export default Complexes;
