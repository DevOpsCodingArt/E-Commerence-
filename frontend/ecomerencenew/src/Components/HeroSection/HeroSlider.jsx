import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Button } from "@mui/material";

function HeroSlider() {
  const slider = [
    {
      name: "Women Solid Round Green T-Shirt",
      image: "/HeroSection/10026.jpg",
      price: 59.0,
    },
    {
      name: "Buy Modern Chair In Black Color",
      image: "/HeroSection/10027.jpg",
      price: 99.0,
    },
  ];
  return (
    <div className="w-[60%] place-content-center overflow-hidden p-6">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper rounded-2xl"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <img src={item.image} className="h-full w-full object-cover" />
            <div className="info animate-fade-left animate-once animate-duration-1000 animate-ease-in absolute top-1/4 right-0 h-2/4 w-[50%] px-4 text-lg font-medium text-black">
              <p className="animate-fade-left animate-delay-300 animate-once">
                Big Saving Days Sale
              </p>
              <h2 className="animate-fade-left animate-delay-500 animate-once text-4xl leading-12 font-bold">
                {item.name}
              </h2>

              <p className="animate-fade-left animate-delay-700 animate-once inline-flex gap-2">
                Starting At Only Price:
                <span className="text-primary animate-delay-1000 animate-bounce text-3xl">
                  ${item.price.toFixed(2)}
                </span>
              </p>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff5252",
                  "&:hover": {
                    backgroundColor: "#000",
                  },
                  mt: 2,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                className="animate-fade-left animate-delay-1000 animate-once"
              >
                Shop Now
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
