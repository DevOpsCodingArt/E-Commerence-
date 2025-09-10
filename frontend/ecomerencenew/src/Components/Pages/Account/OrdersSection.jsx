import { Fragment, useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlineEye,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

export default function OrdersSection({ orders }) {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <AiOutlineCheck className="h-4 w-4" />;
      case "shipped":
        return <AiOutlineEnvironment className="h-4 w-4" />;
      case "processing":
        return <AiOutlineClockCircle className="h-4 w-4" />;
      default:
        return <AiOutlineClockCircle className="h-4 w-4" />;
    }
  };

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>

      {orders.length === 0 ? (
        <div className="py-8 text-center text-gray-500">
          <p>No orders found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg border border-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders.map((order) => (
                <Fragment key={order.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {order.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(order.status)}`}
                      >
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {order.items.length} item
                        {order.items.length > 1 ? "s" : ""}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${order.total.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleOrderDetails(order.id)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-700"
                        >
                          <AiOutlineEye className="h-4 w-4" />
                          View Details
                          {expandedOrder === order.id ? (
                            <AiOutlineUp className="h-4 w-4" />
                          ) : (
                            <AiOutlineDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded Order Details */}
                  {expandedOrder === order.id && (
                    <tr>
                      <td colSpan="6" className="px-6 py-0">
                        <div className="border-t bg-gray-50 p-4">
                          <h4 className="mb-3 font-medium text-gray-900">
                            Order Items
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Item
                                  </th>
                                  <th className="py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Price
                                  </th>
                                  <th className="py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Quantity
                                  </th>
                                  <th className="py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Subtotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {order.items.map((item, index) => (
                                  <tr
                                    key={index}
                                    className="border-b border-gray-100 last:border-b-0"
                                  >
                                    <td className="py-3">
                                      <div className="flex items-center gap-3">
                                        <div className="text-2xl">
                                          {item.image}
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="py-3">
                                      <div className="text-sm text-gray-900">
                                        ${item.price.toFixed(2)}
                                      </div>
                                    </td>
                                    <td className="py-3">
                                      <div className="text-sm text-gray-900">
                                        {item.quantity}
                                      </div>
                                    </td>
                                    <td className="py-3">
                                      <div className="text-sm font-medium text-gray-900">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                          2,
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Order Summary */}
                          <div className="mt-4 border-t border-gray-200 pt-4">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                <p>
                                  Order Date:{" "}
                                  {new Date(order.date).toLocaleDateString()}
                                </p>
                                <p>
                                  Total Items:{" "}
                                  {order.items.reduce(
                                    (sum, item) => sum + item.quantity,
                                    0,
                                  )}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-600">
                                  Subtotal: $
                                  {order.items
                                    .reduce(
                                      (sum, item) =>
                                        sum + item.price * item.quantity,
                                      0,
                                    )
                                    .toFixed(2)}
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                  Total: ${order.total.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
