import React from "react";
import image from "../assets/about19.webp";
import image_1 from "../assets/about20.webp";
import image_2 from "../assets/about21.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Review = () => {
  return (
    <div className="px-5 lg:px-[8%] bg-[#fafbfc] py-24">
      <div className="review">
        <div className="review-wrapper">
          <div className="text-section">
            <h1 className="text-3xl lg:text-5xl text-center heading font-semibold mb-10">
              Testimonials & Success Stories
            </h1>
            <p className=" text-center lg:px-62   md:px-32 sm:px-10 mb-10">
              Hear from users and partners who have made the most of Detty
              December HQ! From unforgettable events to thriving businesses,
              these testimonials showcase the impact of our platform. Ready to
              create your own success story?
            </p>
          </div>
          <div className="review-slide lg:px-32 relative">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                768: {
                  slidePerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidePerView: 3,
                  spaceBetween: 20,
                },
              }}
              navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="px-10 py-10 border-1 border-gray-600 rounded-3xl text-center h-[400px]">
                  <img src={image} alt="" className="block m-auto" />
                  <h1 className="text-1xl font-semibold mb-3">
                    Daniel Kennedy
                  </h1>
                  <div className="icons-stars text-yellow-400 flex gap-3 items-center justify-center mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    “From booking rides to securing my hotel stay, everything
                    was smooth and convenient. I didn’t have to juggle multiple
                    apps—Detty December HQ had it all in one place!”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-10 py-10 border-1 border-gray-600 rounded-3xl text-center h-[400px]">
                  <img src={image} alt="" className="block m-auto" />

                  <h1 className="font-semibold my-3">Olumuyiwa Yosola</h1>
                  <div className="icons-stars icons-stars text-yellow-400 flex gap-3 items-center justify-center mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    “As a Partner, getting visibility used to be a struggle, but
                    Detty December HQ changed everything. My bookings
                    skyrocketed, and I now reach more customers than ever”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-10 py-10 border-1 border-gray-600 rounded-3xl text-center h-[400px]">
                  <img src={image} alt="" className="block m-auto" />

                  <h1 className="font-semibold my-3">Bolanle Jacobs</h1>
                  <div className="icons-stars icons-stars text-yellow-400 flex gap-3 items-center justify-center mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    “From booking rides to securing my hotel stay, everything
                    was smooth and convenient. I didn’t have to juggle multiple
                    apps—Detty December HQ had it all in one place!”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="px-10 py-10 border-1 border-gray-600 rounded-3xl text-center h-[400px]">
                  <img src={image} alt="" className="block m-auto" />

                  <h1 className="font-semibold my-3">Daniel Kennedy</h1>
                  <div className="icons-stars icons-stars text-yellow-400 flex gap-3 items-center justify-center mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    “Detty December HQ made it super easy to find and book
                    events with my friends. The seamless ticketing process and
                    real-time updates made our experience stress-free. Can’t
                    wait to use it again!”
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
