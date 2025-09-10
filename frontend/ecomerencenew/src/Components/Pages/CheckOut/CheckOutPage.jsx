import React, { useState } from "react";
import {
  AiOutlineLock,
  AiOutlineEnvironment,
  AiOutlineCheck,
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function CheckOutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Shipping Address
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Order Options
    shippingMethod: "standard",
  });

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      quantity: 1,
      image: "🎧",
    },
    {
      id: 2,
      name: "Smartphone Case",
      price: 24.99,
      quantity: 2,
      image: "📱",
    },
    {
      id: 3,
      name: "USB-C Cable",
      price: 12.99,
      quantity: 1,
      image: "🔌",
    },
  ]);

  const [errors, setErrors] = useState({});

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: 5.99,
      time: "5-7 business days",
    },
    {
      id: "express",
      name: "Express Shipping",
      price: 12.99,
      time: "2-3 business days",
    },
    {
      id: "overnight",
      name: "Overnight Shipping",
      price: 24.99,
      time: "1 business day",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    const selectedShipping = shippingOptions.find(
      (option) => option.id === formData.shippingMethod,
    );
    return selectedShipping ? selectedShipping.price : 0;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping() + calculateTax();
  };

  const validateStep = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsSuccess(true);
    setIsProcessing(false);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
            <AiOutlineCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-4 text-2xl font-semibold text-gray-800">
            Order Successful!
          </h1>
          <p className="mb-2 text-gray-600">Thank you for your order!</p>
          <p className="mb-6 text-sm text-gray-500">
            Order #12345 - You'll receive a confirmation email shortly.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full rounded-xl bg-red-500 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="text-gray-600">Complete your order</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-4">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep >= 1
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <div
              className={`h-0.5 w-12 ${currentStep >= 2 ? "bg-red-500" : "bg-gray-200"}`}
            ></div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep >= 2
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <AiOutlineEnvironment className="h-5 w-5 text-red-500" />
                    Shipping Information
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300 focus:border-red-500"
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300 focus:border-red-500"
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-300 focus:border-red-500"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                          errors.phone
                            ? "border-red-500"
                            : "border-gray-300 focus:border-red-500"
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Address *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                          errors.address
                            ? "border-red-500"
                            : "border-gray-300 focus:border-red-500"
                        }`}
                        placeholder="123 Main Street"
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                            errors.city
                              ? "border-red-500"
                              : "border-gray-300 focus:border-red-500"
                          }`}
                          placeholder="New York"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          State *
                        </label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) =>
                            handleInputChange("state", e.target.value)
                          }
                          className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                            errors.state
                              ? "border-red-500"
                              : "border-gray-300 focus:border-red-500"
                          }`}
                          placeholder="NY"
                        />
                        {errors.state && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.state}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) =>
                            handleInputChange("zipCode", e.target.value)
                          }
                          className={`w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                            errors.zipCode
                              ? "border-red-500"
                              : "border-gray-300 focus:border-red-500"
                          }`}
                          placeholder="10001"
                        />
                        {errors.zipCode && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Review Order */}
              {currentStep === 2 && (
                <div>
                  <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <AiOutlineShopping className="h-5 w-5 text-red-500" />
                    Review Your Order
                  </h2>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="mb-2 font-medium text-gray-800">
                        Shipping Address
                      </h3>
                      <p className="text-sm text-gray-600">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="mb-2 font-medium text-gray-800">
                        Contact Information
                      </h3>
                      <p className="text-sm text-gray-600">
                        {formData.email}
                        <br />
                        {formData.phone}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`rounded-lg px-6 py-2 font-medium transition-colors duration-200 ${
                    currentStep === 1
                      ? "cursor-not-allowed bg-gray-100 text-gray-400"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Back
                </button>

                {currentStep < 2 ? (
                  <button
                    onClick={handleNext}
                    className="rounded-lg bg-red-500 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className={`rounded-lg px-6 py-2 font-medium text-white transition-colors duration-200 ${
                      isProcessing
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                        Processing...
                      </div>
                    ) : (
                      "Place Order"
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Order Summary
              </h3>

              {/* Cart Items */}
              <div className="mb-4 space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                  >
                    <div className="text-2xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
                      >
                        <AiOutlineMinus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-6 w-6 items-center justify-center rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
                      >
                        <AiOutlinePlus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shipping Options */}
              <div className="mb-4">
                <h4 className="mb-2 text-sm font-medium text-gray-800">
                  Shipping Method
                </h4>
                <div className="space-y-2">
                  {shippingOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={option.id}
                        checked={formData.shippingMethod === option.id}
                        onChange={(e) =>
                          handleInputChange("shippingMethod", e.target.value)
                        }
                        className="text-red-500 focus:ring-red-500"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            {option.name}
                          </span>
                          <span className="text-sm text-gray-600">
                            ${option.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{option.time}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Order Totals */}
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>${calculateShipping().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-lg font-semibold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <AiOutlineLock className="h-4 w-4" />
                <span>Your information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
