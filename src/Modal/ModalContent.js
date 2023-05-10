import React from "react";
// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "./ModalContent.css";
import {
  Navigation,
  Keyboard,
  Scrollbar,
  Mousewheel,
  Pagination,
} from "swiper";
import closeButton from "../assets/form-close.svg";

const ModalContent = ({ apartmentImages, handleModalClose }) => {
  return (
    <div className="swiper-container">
      <div className="close-img-div">
        <img
          className="close-img"
          src={closeButton}
          alt="close button svg"
          onClick={() => handleModalClose()}
        />
      </div>
      <div className="modal-images">
        <Swiper
          className="swiper-slide"
          modules={[Navigation, Mousewheel, Keyboard, Scrollbar, Pagination]}
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
          {apartmentImages.map((image, index) => (
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
  );
};

export default ModalContent;
