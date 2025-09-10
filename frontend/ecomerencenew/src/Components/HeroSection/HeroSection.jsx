// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function HeroSection() {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper !overflow-visible !py-4"
      >
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image1.png"
            alt="Hero Image 1"
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image2.png"
            alt="Hero Image 2"
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image3.png"
            alt="Hero Image 3"
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image4.png"
            alt="Hero Image 4"
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image5.png"
            alt="Hero Image 5"
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image6.png"
            alt="Hero Image 6"
          />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src="/HeroSection/image7.png"
            alt="Hero Image 7"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
