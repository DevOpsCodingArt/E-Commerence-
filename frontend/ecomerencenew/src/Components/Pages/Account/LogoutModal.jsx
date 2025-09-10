import React from "react";

export default function LogoutModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded bg-white p-6 shadow-xl">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Confirm Logout
        </h3>
        <p className="mb-4 text-sm text-gray-600">
          Are you sure you want to logout from your account?
        </p>
        <div className="flex justify-end gap-3">
          <button
            className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
