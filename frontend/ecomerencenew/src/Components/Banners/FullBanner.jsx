import React from "react";
import { FaShippingFast } from "react-icons/fa";

function FullBanner() {
  return (
    <div className="border-primary container mx-auto flex w-10/12 items-center justify-between rounded-md border-2 p-8 text-2xl">
      <div className="w-1/5">
        <div className="flex items-center gap-2">
          <FaShippingFast className="-scale-x-100" size={35} />
          <span className="font-semibold uppercase">Free Shipping</span>
        </div>
      </div>

      <div className="w-1/2 text-center text-lg">
        <span>Free Delivery Now On Your First Order and over $200</span>
      </div>

      <div className="w-1/5 text-center font-bold">
        <span>- ONLY $200*</span>
      </div>
    </div>
  );
}

export default FullBanner;
