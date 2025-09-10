import React from "react";
import {
  FaTruck,
  FaUndo,
  FaCreditCard,
  FaGift,
  FaHeadset,
} from "react-icons/fa";

const FeaturesBar = () => {
  const features = [
    {
      icon: <FaTruck className="text-primary h-8 w-8" />,
      title: "Free Shipping",
      subtitle: "For all Orders Over $100",
    },
    {
      icon: <FaUndo className="text-primary h-8 w-8" />,
      title: "30 Days Returns",
      subtitle: "For an Exchange Product",
    },
    {
      icon: <FaCreditCard className="text-primary h-8 w-8" />,
      title: "Secured Payment",
      subtitle: "Payment Cards Accepted",
    },
    {
      icon: <FaGift className="text-primary h-8 w-8" />,
      title: "Special Gifts",
      subtitle: "Our First Product Order",
    },
    {
      icon: <FaHeadset className="text-primary h-8 w-8" />,
      title: "Support 24/7",
      subtitle: "Contact us Anytime",
    },
  ];

  return (
    <div className="w-full bg-white py-12 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 p-4 text-center transition-transform hover:scale-105"
            >
              <div className="bg-primary/10 rounded-full p-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;
