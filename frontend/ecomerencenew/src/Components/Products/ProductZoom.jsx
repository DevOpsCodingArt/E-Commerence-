import { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import FeaturesBar from "../Blog/FeaturesBar";
import Rating from "@mui/material/Rating";
import ProductsSlider from "./ProductsSlider";

function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const container = true;
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("description");
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const sizes = ["S", "M", "L", "XL"];
  const images = [
    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1448230/pexels-photo-1448230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };

  const handleReviewSubmit = () => {
    // Handle review submission logic here
    console.log("Review submitted:", {
      rating: userRating,
      review: reviewText,
    });
    // Reset form
    setUserRating(0);
    setReviewText("");
  };

  const tabContent = {
    description: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product Description</h3>
        <p className="leading-relaxed text-gray-700">
          This elegant A-Line Kurti with Sharara & Dupatta is perfect for any
          occasion. Made from premium quality fabric, it features beautiful
          embroidery and comfortable fit. The set includes a stylish kurti,
          matching sharara pants, and a coordinating dupatta that adds grace to
          your overall look.
        </p>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>Premium quality fabric</li>
          <li>Comfortable A-line fit</li>
          <li>Beautiful embroidery work</li>
          <li>Complete set with kurti, sharara, and dupatta</li>
          <li>Perfect for festivals and special occasions</li>
        </ul>
      </div>
    ),
    details: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <p className="mb-1 text-sm text-gray-600">Fabric</p>
            <p className="font-medium">Cotton Blend</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Pattern</p>
            <p className="font-medium">Embroidered</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Sleeve Type</p>
            <p className="font-medium">Sleeveless</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Neckline</p>
            <p className="font-medium">Round Neck</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Length</p>
            <p className="font-medium">Knee Length</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-600">Occasion</p>
            <p className="font-medium">Festive, Party</p>
          </div>
        </div>
      </div>
    ),
    reviews: (
      <div className="space-y-6">
        {/* Existing Review */}
        <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
          <div className="flex items-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Reviewer"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">Rinku Verma</p>
                  <p className="text-sm text-gray-500">2024-12-01</p>
                </div>
                <Rating name="read-only" value={4} readOnly size="small" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        {/* Add Review Form */}
        <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Add a review
          </h3>
          <textarea
            rows="4"
            placeholder="Write a review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:outline-none"
          ></textarea>

          <div className="mt-3 flex items-center justify-between">
            <Rating
              name="user-rating"
              value={userRating}
              onChange={handleRatingChange}
              size="large"
            />
            <button
              onClick={handleReviewSubmit}
              className="rounded-md bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              SUBMIT REVIEW
            </button>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen space-y-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Images */}
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-20 rounded-lg border-2 transition-all ${
                    selectedImage === image
                      ? "border-red-500 shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                <div
                  className="relative h-96 w-full cursor-crosshair overflow-hidden lg:h-[500px]"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsZoomed(true)}
                  onMouseLeave={() => setIsZoomed(false)}
                >
                  <img
                    src={selectedImage}
                    alt="Main Product"
                    className={`h-full w-full object-cover transition-transform duration-300 ${
                      isZoomed ? "scale-150" : "scale-100"
                    }`}
                    style={{
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              A-Line Kurti With Sharara & Dupatta
            </h1>

            <div className="flex items-center space-x-4">
              <Rating name="product-rating" value={4} readOnly />
              <span className="ml-1 text-sm text-gray-600">4 Reviews</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 line-through">
                Rs: 1450
              </span>
              <span className="text-2xl font-bold text-red-600">Rs: 1300</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                IN STOCK
              </span>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Size:</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 w-10 rounded-md border-2 font-semibold transition ${
                      selectedSize === size
                        ? "border-red-500 bg-red-100 text-red-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center rounded-md border border-gray-300">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <AiOutlineMinus className="h-4 w-4" />
                </button>
                <span className="min-w-[40px] px-4 py-2 text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <AiOutlinePlus className="h-4 w-4" />
                </button>
              </div>

              <button className="flex items-center space-x-2 rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600">
                <AiOutlineShoppingCart />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 rounded-lg bg-white shadow">
          <nav className="flex space-x-6 border-b px-6 py-4 text-sm font-medium">
            {[
              { id: "description", label: "Description" },
              { id: "details", label: "Product Details" },
              { id: "reviews", label: "Reviews (5)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 pb-2 ${
                  activeTab === tab.id
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="p-6">{tabContent[activeTab]}</div>
        </div>
      </div>
      <div className="relatedProducts">
        <p className="container text-2xl font-bold tracking-wider uppercase">
          Related Products
        </p>
        <ProductsSlider container={container}></ProductsSlider>
      </div>
      <FeaturesBar />
    </div>
  );
}

export default ProductPage;
