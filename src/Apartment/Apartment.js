import "./Apartment.css";
import layout from "../assets/layout.png";

const Apartment = () => {
  return (
    <div className="ind-apartment">
      <div className="ind-apartment-top">
        <div className="ind-apartment-info">
          <h2>2 Bed, 1 Bath</h2>
          <h4>900 Sq. Ft.</h4>
        </div>
        <div className="ind-apartment-buttons">
          <button>Download Application</button>
          <button>Contact and Book a Tour</button>
        </div>
      </div>
      <div className="rent-price">
        <h4 className="header-rent-price">$600/month</h4>
      </div>
      <div className="ind-apartment-bottom">
        <img className="apartment-layout" src={layout} />
        <div className="ind-apartment-ammentities">
          <h4>Ammentities</h4>
          <div className="amentities-paragraphs">
            <p>Washer and dryer</p>
            <p>Classic Finish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;