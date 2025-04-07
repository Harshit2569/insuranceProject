import React from "react";
import Atena from "../Images/aetna.jpg";
import Enocompass from "../Images/Enocompass.jpg";
import JackSon from "../Images/jackson.jpg";
import Mutual from "../Images/mutual.jpg";
import Prudential from "../Images/prudential.jpg";
import America from "../Images/Transamerica.jpg";
import Travel from "../Images/travel.jpg";
import Zurich from "../Images/zurich.jpg";
function CardsSwiper() {
  return (
    <>
      <div className="bg-body-secondary pt-3 pb-3 overflow-hidden">
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-md-12 mt-3 mb-3">
              <h2 className="text-center text-primary fw-light fs-3">
                Companies we represent
              </h2>
              <div id="carouselExample" className="carousel slide pt-5 pb-5">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-center gap-3">
                      <div className="card carding p-3">
                        <img src={Atena} alt="" />
                      </div>
                      <div className="card carding p-3">
                        <img src={Enocompass} alt="" />
                      </div>
                      <div className="card carding p-3">
                        <img src={JackSon} alt="" />
                      </div>
                    </div>
                  </div>
                  {/* 2 */}

                  <div className="carousel-item">
                    <div className="d-flex justify-content-center gap-3">
                      <div className="card carding p-3">
                        <img src={Mutual} alt="" />
                      </div>
                      <div className="card carding p-3">
                        <img src={Prudential} alt="" />
                      </div>
                      <div className="card carding p-3">
                        <img src={America} alt="" />
                      </div>
                    </div>
                  </div>

                  {/* 3 */}

                  <div className="carousel-item">
                    <div className="d-flex justify-content-center gap-3">
                      <div className="card carding p-3">
                        <img src={Travel} alt="" />
                      </div>
                      <div className="card carding p-3">
                        <img src={Zurich} alt="" />
                      </div>
                      <div className="card carding p-3">
                        <img src={Atena} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true" />
  <span className="visually-hidden">Previous</span>
</button>


                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardsSwiper;

// export default function App() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <div>
//           <div className="container">
//             <div>
//               <SwiperSlide>
//                 <img src={Mutual} alt="" />
//                 <img src={Jackson} alt="" />
//                 <img src={Prudential} alt="" />
//                 <img src={Atena} alt="" />
//                 <img src={Enocompass} alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={Mutual} alt="" />
//                 <img src={Jackson} alt="" />
//                 <img src={America} alt="" />
//                 <img src={Travel} alt="" />
//                 <img src={Mutual} alt="" />

//               </SwiperSlide>
//             </div>

//             {/* <SwiperSlide>Slide 6</SwiperSlide>
//             <SwiperSlide>Slide 7</SwiperSlide>
//             <SwiperSlide>Slide 8</SwiperSlide>
//             <SwiperSlide>Slide 9</SwiperSlide> */}
//           </div>
//         </div>
//       </Swiper>
//     </>
//   );
// }
