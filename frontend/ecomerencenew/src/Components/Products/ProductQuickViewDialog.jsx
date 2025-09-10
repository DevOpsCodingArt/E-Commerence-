import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  Rating,
} from "@mui/material";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
  FaRegHeart,
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";

const ProductQuickViewDialog = ({ open, onClose, product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const images = [product.image, product.hoverImage];
  const sizes = ["Small", "Large", "XL", "XXL"];

  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (operation === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle className="px-4 pb-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Quick View</h2>
          <IconButton onClick={onClose}>
            <IoCloseCircleSharp />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent className="p-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-6">
          {/* Left: Product Images */}
          <div className="p-4 md:border-r md:border-gray-200">
            <div className="relative mb-4 h-[300px] overflow-hidden rounded-md bg-gray-100 md:h-[400px]">
              {/* Discount Badge */}
              <span className="absolute top-4 left-4 z-10 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {product.discountPercentage}% OFF
              </span>
              {product.isNew && (
                <span className="absolute top-12 left-4 z-10 rounded bg-green-600 px-2 py-1 text-xs font-bold text-white">
                  NEW
                </span>
              )}
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`h-16 w-16 cursor-pointer overflow-hidden rounded border bg-gray-100 md:h-20 md:w-20 ${
                    selectedImage === i
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                >
                  <img src={img} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="p-4 md:p-6">
            <h1 className="mb-2 text-xl font-bold md:text-2xl">
              {product.name}
            </h1>
            <div className="mb-2 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Brand: Pro Tech Gear</span>
              <span>Condition: Refurbished</span>
            </div>

            <p className="mb-2 text-sm text-gray-600">Reference: Products</p>
            <p className="mb-2 text-sm text-green-600">
              Available In Stock: 147 Items
            </p>

            <p className="mb-4 text-sm text-gray-700">{product.description}</p>

            <div className="mb-4 flex items-center gap-2">
              <Rating
                value={product.rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <span className="text-xl font-bold text-red-600 md:text-2xl">
                Rs {Math.round(parseFloat(product.price))}
              </span>
              <span className="text-gray-500 line-through">
                Rs {product.originalPrice}
              </span>
            </div>

            <p className="mb-4 text-sm text-green-600">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            {/* Sizes */}
            <div className="mb-4">
              <p className="mb-2 text-sm text-gray-700">Size: {selectedSize}</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`rounded border px-3 py-1 text-sm font-medium md:px-4 ${
                      selectedSize === size
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-red-500 text-red-500"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-4">
              <p className="mb-2 text-sm text-gray-700">
                Color: {selectedColor}
              </p>
              <div className="flex gap-2">
                <div
                  className={`h-8 w-8 cursor-pointer rounded-full bg-gray-500 ${
                    selectedColor === "Gray"
                      ? "ring-2 ring-red-500"
                      : "ring-1 ring-gray-300"
                  }`}
                  onClick={() => setSelectedColor("Gray")}
                />
                <div
                  className={`h-8 w-8 cursor-pointer rounded-full bg-black ${
                    selectedColor === "Black"
                      ? "ring-2 ring-red-500"
                      : "ring-1 ring-gray-300"
                  }`}
                  onClick={() => setSelectedColor("Black")}
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm text-gray-700">Quantity:</span>
              <div className="flex overflow-hidden rounded border border-gray-300 text-sm">
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <div className="bg-gray-100 px-3 py-1">{quantity}</div>
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mb-4 w-full rounded bg-gradient-to-r from-red-500 to-red-300 py-2 font-semibold text-white hover:from-red-600 hover:to-red-400">
              ADD TO CART
            </button>

            {/* Wishlist & Compare */}
            <div className="mb-4 flex flex-wrap gap-2">
              <button
                className={`flex items-center gap-2 rounded border px-3 py-2 text-sm md:px-4 ${
                  isWishlisted
                    ? "border-red-500 text-red-500"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>

              <button className="flex items-center gap-2 rounded border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 md:px-4">
                <PiArrowsCounterClockwiseFill />
                Add To Compare
              </button>
            </div>

            <span className="mb-4 inline-block rounded bg-green-600 px-2 py-1 text-xs text-white">
              In Stock
            </span>

            {/* Social Icons */}
            <div className="flex gap-3">
              <button className="text-xl text-blue-700 hover:text-blue-800">
                <FaFacebook />
              </button>
              <button className="text-xl text-blue-400 hover:text-blue-500">
                <FaTwitter />
              </button>
              <button className="text-xl text-red-600 hover:text-red-700">
                <FaPinterest />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickViewDialog;
