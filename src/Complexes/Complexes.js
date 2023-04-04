import apartmentComplex from "../assets/complex-image.jpg";
import "./Complexes.css";

const Complexes = () => {
  return (
    <section className="complexes">
      <img src={apartmentComplex} alt="Penn Apartment Complex" />
      <h2>Pennsylvania</h2>
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
        <div
          className="complex-apartment-div"
          style={{
            backgroundImage: `url(${apartmentComplex})`,
            backgroundSize: "cover",
          }}
        >
          <p>2 Bed, 1 Bath</p>
        </div>
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
