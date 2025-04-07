import React from "react";
import Atena from "../Images/aetna.jpg";
import Enocompass from "../Images/Enocompass.jpg";
import JackSon from "../Images/jackson.jpg";
import Mutual from "../Images/mutual.jpg";
import Prudential from "../Images/prudential.jpg";
import America from "../Images/Transamerica.jpg";
import Travel from "../Images/travel.jpg";
import Zurich from "../Images/zurich.jpg";
// import {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="companiesSection">
        <div className="container pt-5">
          <h2 className="companiesHeading">COMPANIES WE REPRESENT</h2>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="card">
                <img src={Atena} alt="" />{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Enocompass} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={JackSon} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Mutual} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Prudential} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={America} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Travel} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Zurich} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={Atena} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
