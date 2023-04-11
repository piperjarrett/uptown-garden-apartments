import { NavLink } from "react-router-dom";
import apartmentComplex from "../assets/complex-image.jpg";
import "./Complexes.css";

const Complexes = () => {
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
        <div
          className="complex-apartment-div"
          style={{
            backgroundImage: `url(${apartmentComplex})`,
            backgroundSize: "cover",
          }}
        >
          <p>1 Bed, 1 Bath</p>
        </div>
      </div>
    </section>
  );
};

export default Complexes;
