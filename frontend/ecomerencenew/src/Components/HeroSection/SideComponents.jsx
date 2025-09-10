import React from "react";

function SideComponents() {
  const array = [
    {
      image: "HeroSection/side10029.png",
      title: "Samsung Gear VR",
      price: 129.0,
    },
    {
      image: "HeroSection/side10030.jpg",
      title: "Samsung Gear VR Pro",
      price: 149.0,
    },
  ];

  return (
    <div className="my-6 flex w-2/5 flex-col items-center gap-6">
      {array.map((item, index) => (
        <div
          key={index}
          className="group relative w-7/12 transform overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Product Image */}
          <div className="relative h-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Product Info */}
          <div className="group absolute right-0 bottom-0 left-0 translate-y-4 transform cursor-pointer p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
            <div className="space-y-2">
              {/* Title */}
              <h1 className="text-xl font-bold text-black">{item.title}</h1>

              <p className="link text-gray-300">Camera</p>

              {/* Price */}
              <p className="text-2xl font-bold text-red-400">
                ${item.price.toFixed(2)}
              </p>

              {/* Button */}
              <button className="mt-4 transform rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-2 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 hover:shadow-xl">
                <span>SHOP NOW</span>
              </button>
            </div>
          </div>

          {/* Hover Effect Particles */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute top-10 left-10 h-2 w-2 animate-pulse rounded-full bg-white"></div>
            <div className="absolute top-16 right-16 h-1 w-1 animate-pulse rounded-full bg-white delay-100"></div>
            <div className="absolute bottom-20 left-20 h-1.5 w-1.5 animate-pulse rounded-full bg-white delay-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideComponents;
