import React from "react";

function SquareBannerAds({
  banners = [],
  containerClassName = "w-full  p-8",
  gridClassName = "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4",
  bannerClassName = "relative hover:scale-110 overflow-hidden rounded-lg shadow-md shadow-black transition-all duration-300 hover:shadow-xl",
  imageClassName = "h-48 w-full object-cover hover:scale-110 transition duration-1000",
}) {
  const defaultBanners = [
    { src: "/Banner/banner1.jpg", alt: "Banner 1" },
    { src: "/Banner/banner2.jpg", alt: "Banner 2" },
    { src: "/Banner/banner3.png", alt: "Banner 3" },
    { src: "/Banner/banner.jpg", alt: "Banner 4" },
  ];

  const bannersToRender = banners.length > 0 ? banners : defaultBanners;

  return (
    <div className={containerClassName}>
      <div className={gridClassName}>
        {bannersToRender.map((banner, index) => (
          <div
            key={index}
            className={`${bannerClassName} ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}`}
          >
            <img src={banner.src} alt={banner.alt} className={imageClassName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SquareBannerAds;
