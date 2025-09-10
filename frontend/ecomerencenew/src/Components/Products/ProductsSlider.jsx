// ProductsSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "@mui/material/Pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import ProductQuickViewDialog from "./ProductQuickViewDialog";

function ProductsSlider({ container, view }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productDetails = [
    {
      id: 1,
      name: "Cotton Summer Dress",
      originalPrice: "2500",
      discountPercentage: 20,
      price: 2500 * (1 - 0.2),
      image:
        "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.7,
      description:
        "Lightweight cotton dress perfect for summer days with a flattering A-line silhouette and breathable fabric.",
      isNew: true,
    },
    {
      id: 2,
      name: "Denim Jacket",
      originalPrice: "3200",
      discountPercentage: 15,
      price: 3200 * (1 - 0.15),
      image:
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.5,
      description:
        "Classic denim jacket with vintage wash and comfortable fit. Perfect for layering in any season.",
      isNew: false,
    },
    {
      id: 3,
      name: "Leather Handbag",
      originalPrice: "4500",
      discountPercentage: 25,
      price: 4500 * (1 - 0.25),
      image:
        "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.9,
      description:
        "Genuine leather handbag with multiple compartments and adjustable strap. Elegant design for everyday use.",
      isNew: true,
    },
    {
      id: 4,
      name: "High-Waisted Jeans",
      originalPrice: "2800",
      discountPercentage: 18,
      price: 2800 * (1 - 0.18),
      image:
        "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.6,
      description:
        "Flattering high-waisted jeans with stretch denim for comfort and style. Perfect fit for all body types.",
      isNew: false,
    },
    {
      id: 5,
      name: "Silk Scarf",
      originalPrice: "1200",
      discountPercentage: 30,
      price: 1200 * (1 - 0.3),
      image:
        "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1148959/pexels-photo-1148959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.3,
      description:
        "Luxurious silk scarf with elegant floral pattern. Versatile accessory for any outfit.",
      isNew: true,
    },
    {
      id: 6,
      name: "Sneakers",
      originalPrice: "3500",
      discountPercentage: 22,
      price: 3500 * (1 - 0.22),
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.8,
      description:
        "Comfortable athletic sneakers with premium materials and cushioned sole for all-day wear.",
      isNew: false,
    },
    {
      id: 7,
      name: "Blazer",
      originalPrice: "5200",
      discountPercentage: 28,
      price: 5200 * (1 - 0.28),
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.4,
      description:
        "Tailored blazer with modern cut and premium fabric. Perfect for business or casual wear.",
      isNew: true,
    },
    {
      id: 8,
      name: "Sunglasses",
      originalPrice: "850",
      discountPercentage: 35,
      price: 850 * (1 - 0.35),
      image:
        "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.2,
      description:
        "Stylish sunglasses with UV protection and polarized lenses. Classic design meets modern technology.",
      isNew: false,
    },
    {
      id: 9,
      name: "Ankle Boots",
      originalPrice: "4200",
      discountPercentage: 20,
      price: 4200 * (1 - 0.2),
      image:
        "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.7,
      description:
        "Versatile ankle boots with genuine leather upper and comfortable heel. Perfect for any season.",
      isNew: true,
    },
    {
      id: 10,
      name: "Crossbody Bag",
      originalPrice: "1800",
      discountPercentage: 26,
      price: 1800 * (1 - 0.26),
      image:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.5,
      description:
        "Compact crossbody bag with adjustable strap and multiple pockets. Perfect for hands-free convenience.",
      isNew: false,
    },
    {
      id: 11,
      name: "Cardigan",
      originalPrice: "2200",
      discountPercentage: 24,
      price: 2200 * (1 - 0.24),
      image:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.3,
      description:
        "Soft knit cardigan with button closure and cozy fit. Perfect layering piece for any wardrobe.",
      isNew: true,
    },
    {
      id: 12,
      name: "Watch",
      originalPrice: "3800",
      discountPercentage: 32,
      price: 3800 * (1 - 0.32),
      image:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.6,
      description:
        "Elegant timepiece with stainless steel band and water-resistant design. Classic style for any occasion.",
      isNew: false,
    },
    {
      id: 13,
      name: "Evening Gown",
      originalPrice: "6500",
      discountPercentage: 40,
      price: 6500 * (1 - 0.4),
      image:
        "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.9,
      description:
        "Stunning evening gown with elegant silhouette and luxurious fabric. Perfect for special occasions.",
      isNew: true,
    },
    {
      id: 14,
      name: "Baseball Cap",
      originalPrice: "450",
      discountPercentage: 28,
      price: 450 * (1 - 0.28),
      image:
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.1,
      description:
        "Classic baseball cap with adjustable strap and embroidered logo. Comfortable fit for everyday wear.",
      isNew: false,
    },
    {
      id: 15,
      name: "Trench Coat",
      originalPrice: "7200",
      discountPercentage: 33,
      price: 7200 * (1 - 0.33),
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.8,
      description:
        "Timeless trench coat with water-resistant fabric and classic double-breasted design.",
      isNew: true,
    },
    {
      id: 16,
      name: "High Heels",
      originalPrice: "2900",
      discountPercentage: 27,
      price: 2900 * (1 - 0.27),
      image:
        "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.4,
      description:
        "Elegant high heels with pointed toe and comfortable padding. Perfect for formal occasions.",
      isNew: false,
    },
  ];
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const GridProductCard = ({ item }) => (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10 rounded bg-red-500 px-2 py-1 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {item.discountPercentage}% OFF
      </div>

      {/* New Badge */}
      {item.isNew && (
        <div className="absolute top-12 left-3 z-10 rounded bg-green-500 px-2 py-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          NEW
        </div>
      )}

      {/* Side Icons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-50 hover:text-red-500">
          <FaRegHeart size={20} className="transition-colors duration-300" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-50 hover:text-blue-500">
          <PiArrowsCounterClockwiseFill
            size={22}
            className="transition-colors duration-300"
          />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-50 hover:text-green-500"
          onClick={() => handleQuickView(item)}
        >
          <MdZoomOutMap size={20} className="transition-colors duration-300" />
        </button>
      </div>

      {/* Product Image Container */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
        />
        <img
          src={item.hoverImage}
          alt={`${item.name} alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          <Link to={`/product/${item.id}`} className="link transition-colors">
            {item.name}
          </Link>
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
          {item.description}
        </p>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">
              Rs {Math.round(parseFloat(item.price))}
            </span>
            <span className="text-sm text-gray-500 line-through">
              Rs {item.originalPrice}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Rating
              name={`rating-${item.id}`}
              value={item.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <span className="ml-2 text-sm text-gray-600">{item.rating}</span>
          </div>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #ff5252 30%, #ff8080 90%)",
              borderRadius: "20px",
              textTransform: "none",
              boxShadow: "0 3px 5px 2px rgba(255, 82, 82, .3)",
              "&:hover": {
                background: "linear-gradient(45deg, #ff8080 30%, #ff5252 90%)",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );

  const ListProductCard = ({ item }) => (
    <div className="group relative flex cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Discount and New Badge */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        <div className="rounded bg-red-500 px-2 py-1 text-sm font-bold text-white">
          {item.discountPercentage}% OFF
        </div>
        {item.isNew && (
          <div className="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
            NEW
          </div>
        )}
      </div>

      {/* Product Image Container */}
      <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        <img
          src={item.hoverImage}
          alt={`${item.name} alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            <Link to={`/product/${item.id}`} className="link transition-colors">
              {item.name}
            </Link>
          </h3>
          <p className="mb-4 text-gray-600">{item.description}</p>
          <div className="flex items-center gap-4">
            <Rating
              name={`rating-${item.id}`}
              value={item.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <span className="text-sm text-gray-600">{item.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-green-600">
              Rs {Math.round(parseFloat(item.price))}
            </span>
            <span className="text-lg text-gray-500 line-through">
              Rs {item.originalPrice}
            </span>
          </div>

          <div className="flex gap-2">
            <button className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 hover:text-red-500">
              <FaRegHeart size={20} />
            </button>
            <button className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 hover:text-blue-500">
              <PiArrowsCounterClockwiseFill size={22} />
            </button>
            <button className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 hover:text-green-500">
              <MdZoomOutMap size={20} onClick={() => handleQuickView(item)} />
            </button>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #ff5252 30%, #ff8080 90%)",
                borderRadius: "20px",
                textTransform: "none",
                boxShadow: "0 3px 5px 2px rgba(255, 82, 82, .3)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #ff8080 30%, #ff5252 90%)",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={container ? "container mx-auto p-4" : "w-full px-2"}>
      {container ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {productDetails.map((item) => (
            <SwiperSlide key={item.id} className="py-4">
              <GridProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className={
            view === "list"
              ? "flex flex-col gap-4"
              : "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }
        >
          {productDetails.map((item) => (
            <div key={item.id} className="py-4">
              {view === "list" ? (
                <ListProductCard item={item} />
              ) : (
                <GridProductCard item={item} />
              )}
            </div>
          ))}
        </div>
      )}
      {container ? (
        ""
      ) : (
        <div className="flex w-full items-center justify-center py-4">
          <Pagination
            count={10}
            color="secondary"
            showFirstButton
            showLastButton
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#ff5252 !important",
                color: "#fff",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(255, 82, 82, 0.1)",
              },
            }}
          />
        </div>
      )}
      <ProductQuickViewDialog
        open={quickViewOpen}
        onClose={handleCloseQuickView}
        product={selectedProduct}
      />
    </div>
  );
}

export default ProductsSlider;
