import React, { useState } from "react";
import {
  MdClose,
  MdStar,
  MdStarBorder,
  MdKeyboardArrowDown,
  MdLock,
} from "react-icons/md";

// Sample cart data
const cartItems = [
  {
    id: 1,
    brand: "Sangria",
    name: "A-Line Kurti With Sharara & Dupatta",
    price: 58.0,
    originalPrice: 58.0,
    discount: 55,
    rating: 4,
    maxRating: 5,
    size: "S",
    quantity: 10,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    brand: "Sangria",
    name: "A-Line Kurti With Sharara & Dupatta",
    price: 58.0,
    originalPrice: 58.0,
    discount: 55,
    rating: 4,
    maxRating: 5,
    size: "M",
    quantity: 5,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop&crop=face",
  },
];

function StarRating({ rating, maxRating }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => (
        <div key={index}>
          {index < rating ? (
            <MdStar className="h-4 w-4 text-yellow-400" />
          ) : (
            <MdStarBorder className="h-4 w-4 text-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}

function CartItem({ item, onRemove, onUpdateQuantity, onUpdateSize }) {
  return (
    <div className="mb-4 rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <p className="mb-1 text-sm text-gray-500">{item.brand}</p>
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <MdClose className="h-5 w-5" />
            </button>
          </div>

          {/* Rating */}
          <div className="mb-3">
            <StarRating rating={item.rating} maxRating={item.maxRating} />
          </div>

          {/* Size and Quantity Controls */}
          <div className="mb-4 flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Size:</span>
              <div className="relative">
                <select
                  value={item.size}
                  onChange={(e) => onUpdateSize(item.id, e.target.value)}
                  className="appearance-none rounded border border-gray-300 bg-white px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <MdKeyboardArrowDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Qty:</span>
              <div className="relative">
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    onUpdateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="appearance-none rounded border border-gray-300 bg-white px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <MdKeyboardArrowDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-900">
              PKR {item.price.toFixed(2)}
            </span>
            <span className="text-lg text-gray-400 line-through">
              PKR {item.originalPrice.toFixed(2)}
            </span>
            <span className="rounded bg-red-50 px-2 py-1 text-sm font-medium text-red-500">
              {item.discount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartTotals({ items }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="sticky top-6 rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">Cart Totals</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-xl font-bold text-red-500">
            Rs {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-green-600">Free</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Estimate for</span>
          <span className="text-gray-900">United Kingdom</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-red-500">
              Rs {total.toFixed(2)}
            </span>
          </div>
        </div>

        <button className="mt-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-red-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-red-600">
          <MdLock className="h-5 w-5" />
          <span>CHECKOUT</span>
        </button>
      </div>
    </div>
  );
}

export default function FullPageCart() {
  const [items, setItems] = useState(cartItems);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleUpdateSize = (id, size) => {
    setItems(items.map((item) => (item.id === id ? { ...item, size } : item)));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="mb-2 text-2xl font-bold text-gray-900">
                Your Cart
              </h1>
              <p className="text-gray-600">
                There are{" "}
                <span className="font-medium text-red-500">{items.length}</span>{" "}
                products in your cart
              </p>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                  onUpdateSize={handleUpdateSize}
                />
              ))}
            </div>

            {items.length === 0 && (
              <div className="rounded-lg border bg-white p-12 text-center shadow-sm">
                <p className="text-lg text-gray-500">Your cart is empty</p>
                <button className="mt-4 rounded-lg bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Cart Totals Section */}
          <div className="lg:col-span-1">
            <CartTotals items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
