import React from "react";
import {
  IoChevronBack,
  IoChevronForward,
  IoCheckmark,
  IoClose,
  IoCalendar,
} from "react-icons/io5";
import { FaDollarSign, FaHashtag } from "react-icons/fa6";
import { GoPackage } from "react-icons/go";
import { FaTruck } from "react-icons/fa";

function OrderTable() {
  const orders = [
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
      statusColor: "bg-blue-100 text-blue-800",
      icon: <GoPackage className="h-3 w-3" />,
      actions: ["cancel", "view"],
    },
    {
      id: "#FWB125467980",
      date: "11.12.2023",
      price: "$499",
      status: "In transit",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: <FaTruck className="h-3 w-3" />,
      actions: ["cancel", "view"],
    },
    {
      id: "#FWB139485607",
      date: "08.12.2023",
      price: "$85",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      icon: <IoCheckmark className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB137364371",
      date: "16.11.2023",
      price: "$119",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      icon: <IoCheckmark className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB134567890",
      date: "02.11.2023",
      price: "$2,056",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      icon: <IoCheckmark className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB146284623",
      date: "26.09.2023",
      price: "$180",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
      icon: <IoClose className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB145967376",
      date: "17.07.2023",
      price: "$756",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      icon: <IoCheckmark className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB148756352",
      date: "30.06.2023",
      price: "$235",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      icon: <IoCheckmark className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB159873546",
      date: "04.06.2023",
      price: "$90",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
      icon: <IoClose className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
    {
      id: "#FWB156475937",
      date: "11.02.2023",
      price: "$1,845",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      icon: <IoCheckmark className="h-3 w-3" />,
      actions: ["reorder", "view"],
    },
  ];

  return (
    <div className="bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              Orders Overview
            </h1>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                <option>All orders</option>
                <option value="pre-order">Pre-order</option>
                <option value="transit">In transit</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <span className="hidden text-gray-600 sm:block">•</span>

              <select className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>This year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="divide-y divide-gray-200">
            {orders.map((order, index) => (
              <div
                key={index}
                className="p-6 transition duration-150 hover:bg-gray-50"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                  {/* Order ID */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <FaHashtag className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Order ID</p>
                      <p className="font-medium text-gray-900">{order.id}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <IoCalendar className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="font-medium text-gray-900">{order.date}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <FaDollarSign className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Amount</p>
                      <p className="font-medium text-gray-900">{order.price}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center">
                    <div>
                      <p className="mb-2 text-xs text-gray-500">Status</p>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${order.statusColor}`}
                      >
                        {order.icon}
                        {order.status}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 xl:justify-end">
                    {order.actions.includes("cancel") && (
                      <button className="inline-flex items-center justify-center rounded-md border border-red-600 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
                        Cancel
                      </button>
                    )}
                    {order.actions.includes("reorder") && (
                      <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
                        Reorder
                      </button>
                    )}
                    <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              <IoChevronBack className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              1
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
              3
            </button>
            <span className="px-4 py-2 text-sm text-gray-700">...</span>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              12
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
              <IoChevronForward className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
