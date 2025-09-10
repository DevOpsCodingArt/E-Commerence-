import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";

function SlidePerView() {
  const categories = [
    {
      name: "Fashion",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
    },
    {
      name: "Electronics",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
    },
    {
      name: "Bags",
      image:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    },
    {
      name: "Footwear",
      image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
    },
    {
      name: "Groceries",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
    },
    {
      name: "Beauty",
      image:
        "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg",
    },
    {
      name: "Wellness",
      image:
        "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg",
    },
    {
      name: "Jewellery",
      image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg",
    },
    {
      name: "Accessories",
      image:
        "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    },
    {
      name: "Home Decor",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="item flex flex-col items-center justify-center rounded-lg bg-white p-3 text-center shadow-md hover:shadow-lg">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-sm font-medium text-gray-800 md:text-base">
                  {category.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlidePerView;
