import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function WishlistSection({ wishlist, removeFromWishlist }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => (
          <div key={item.id} className="rounded border bg-white p-4 shadow-sm">
            <div className="flex justify-between">
              <div className="text-3xl">{item.image}</div>
              <button onClick={() => removeFromWishlist(item.id)}>
                <AiOutlineDelete className="text-red-500 hover:text-red-700" />
              </button>
            </div>
            <h4 className="mt-2 font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
            <p className="mt-1 text-sm">
              {item.inStock ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
