import "./Apartment.css";
import layout from "../assets/layout.png";
import images from "../assets/images.svg";
import { useEffect, useState } from "react";
import { apartmentRequest } from "../apiCalls/apiCalls";
import ReactModal from "react-modal";
import imagesIcon from "../assets/imagesIcon.png";

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
import closeButton from "../assets/form-close.svg";

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

  // const apartmentImages = Object.keys(apartment?.photos).map((key) => {
  //   return apartment.photos[key];
  // });
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
        <div className="swiper-container">
          <div className="modal-images">
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
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // }}
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
        {/* <div
          className="background-image"
          style={{
            backgroundImage: `url(${apartment.community_preview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        > */}
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
              ${apartment.rent}/month {apartmentId <= 4 ? " + utilities" : ""}
            </h4>
          </div>
          <div className="ind-apartment-buttons">
            <a href={process.env.PUBLIC_URL + "/New Application.pdf"} download>
              <button onClick={openEmail}>Download Application</button>
            </a>
            <button>Contact and Book a Tour</button>
          </div>
        </div>
        {/* <div>
            <img
              src={imagesIcon}
              onClick={handleImageClick}
              className="modal-image"
            />
            <ReactModal
              className="react-modal"
              isOpen={isModalOpen}
              onRequestClose={handleModalClose}
              ariaHideApp={false}
            >
              <ModalContent
                handleModalClose={handleModalClose}
                apartmentImages={Object.keys(apartment.photos).map((key) => {
                  return apartment.photos[key];
                })}
              />
            </ReactModal>
          </div> */}
        {/* </div> */}
        {/* <div className="rent-price"> */}
        {/* <div className="price-and-modal"> */}
        {/* <h4 className="header-rent-price">
              ${apartment.rent}/month {apartmentId <= 4 ? " + utilities" : ""}
            </h4>
          </div> */}
        {/* <div className="ind-apartment-buttons">
            <a href={process.env.PUBLIC_URL + "/New Application.pdf"} download>
              <button onClick={openEmail}>Download Application</button>
            </a>
            <button>Contact and Book a Tour</button>
          </div> */}
        {/* </div> */}
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
