import React, { useState, useEffect } from "react";
import { MdClose, MdDelete, MdAdd, MdRemove } from "react-icons/md";

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "A-Line Kurti With Sharara & Dupatta",
    price: 25,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Printed Cotton Suit Set",
    price: 30,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=120&h=120&fit=crop&crop=face",
  },
];

export default function CartDrawer({ open, setOpen }) {
  const [items, setItems] = useState(cartItems);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) return removeItem(id);
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 8.0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Shopping Cart ({items.length})
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <MdClose className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 rounded-lg bg-gray-50 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
                  {item.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Qty:</span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded p-1 hover:bg-gray-200"
                      >
                        <MdRemove className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="rounded border bg-white px-2 py-1 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded p-1 hover:bg-gray-200"
                      >
                        <MdAdd className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-red-500">
                      ${item.price}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded p-1 text-red-500 hover:bg-red-100"
                    >
                      <MdDelete className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="space-y-3 border-t p-4">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Subtotal</span>
            <span className="font-semibold text-red-500">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Shipping</span>
            <span className="font-semibold text-red-500">
              ${shipping.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-t pt-3 text-lg font-bold">
            <span>Total</span>
            <span className="text-red-500">${total.toFixed(2)}</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="rounded-lg bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600">
              VIEW CART
            </button>
            <button className="rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
