import React from "react";
// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "./ModalContent.css";
import { Navigation, Keyboard, Scrollbar } from "swiper";
import { Mousewheel } from "swiper";

const ModalContent = ({ apartmentImages }) => {
  console.log(apartmentImages);
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className="swiper-container">
      <div className="modal-images">
        <Swiper
          className="swiper-slide"
          modules={[Navigation, Mousewheel, Keyboard, Scrollbar]}
          slidesPerView={1}
          navigation={true}
          scrollbar={{ draggable: true }}
          keyboard={true}
          mousewheel={true}
        >
          {apartmentImages.map((image, index) => (
            <SwiperSlide>
              <div key={index} className="modal-swiper-div">
                <img
                  className="apartment-image-swiper"
                  src={image}
                  alt={`Image ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="swiper-pagination"></div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalContent;
