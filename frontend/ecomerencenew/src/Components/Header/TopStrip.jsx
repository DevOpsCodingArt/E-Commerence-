import React from "react";
import { Link } from "react-router-dom";

function TopStrip() {
  return (
    <>
      <div className="col1 w-[50%] ">
        <p className="link text-[14px] font-[500]  ">
          Get up to 50% off new season style. limited time only
        </p>
      </div>
      <div className="col2 flex w-full items-center justify-end">
        <ul>
          <li className="list-none flex gap-4">
            <Link
              to="/help-center"
              className="text-[12px] link font-[500] transition border-r pr-4"
            >
              Help Center
            </Link>
            <Link
              to="/order-tracking"
              className="text-[12px] link font-[500] transition border-r pr-4"
            >
              Order Tracking
            </Link>
            <Link
              to="/order-tracking"
              className="text-[12px] link font-[500] transition border-r pr-4"
            >
              Order Tracking
            </Link>
            <Link
              to="/order-tracking"
              className="text-[12px] link font-[500] transition"
            >
              Order Tracking
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopStrip;
