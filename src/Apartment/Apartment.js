import "./Apartment.css";
import layout from "../assets/layout.png";
import images from "../assets/images.svg";
import { useEffect, useState } from "react";
import { apartmentRequest } from "../apiCalls/apiCalls";
import ReactModal from "react-modal";
import ModalContent from "../Modal/ModalContent";

const Apartment = ({ apartmentId }) => {
  const [apartment, setApartment] = useState([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    apartmentRequest(apartmentId)
      .then((data) => setApartment(data))
      .catch((err) => setError("There was an error"));

    window.scrollTo(0, 0);
  }, []);

  const openEmail = () => {
    window.open("mailto:uptowngardensabq@gmail.com?");
  };
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return apartment.length === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="ind-apartment">
      <div className="ind-apartment-top">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${apartment.photos.living})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="ind-apartment-info">
            <h2>
              {apartment.bedrooms} Bed, {apartment.bathrooms} Bath
            </h2>
            <h4>{apartment.sqft} Sq. Ft.</h4>
            {apartment.floors === 1 ? (
              <h4>{apartment.floors} floor</h4>
            ) : (
              <h4>{apartment.floors} floors</h4>
            )}
            <img
              src={images}
              onClick={handleImageClick}
              className="modal-image"
            />
            <ReactModal isOpen={isModalOpen} onRequestClose={handleModalClose}>
              <ModalContent
                apartmentImages={Object.keys(apartment.photos).map((key) => {
                  return apartment.photos[key];
                })}
              />
            </ReactModal>
          </div>
        </div>
        <div className="rent-price">
          <div className="price-and-modal">
            <h4 className="header-rent-price">${apartment.rent}/month</h4>
          </div>
          <div className="ind-apartment-buttons">
            <a href={process.env.PUBLIC_URL + "/New Application.pdf"} download>
              <button onClick={openEmail}>Download Application</button>
            </a>
            <button>Contact and Book a Tour</button>
          </div>
        </div>
      </div>
      <div className="ind-apartment-bottom">
        <img className="apartment-layout" src={layout} alt="apartment-layout" />
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
