"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/app/providers";
import { Order, ApiResponse, GetMyOrdersResponse } from "@/types";
import { getAuthHeaders } from "@/app/utils/getHeaders";
import Link from "next/link";

const MyOrdersPage = () => {
  const { user, isLoading: authLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"orders" | "payments">("orders");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;

      setLoading(true);
      try {
        const response = await fetch("/api/payments/my-orders", {
          headers: getAuthHeaders(),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data: ApiResponse<GetMyOrdersResponse> = await response.json();
        if (data.success && data.data) {
          setOrders(data.data.orders);
        }
      } catch (err: unknown) {
        setError("Failed to load orders");
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (authLoading) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="rounded bg-gray-50 text-gray-700 px-3 py-2">
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
          <p className="text-gray-600 mb-4">
            Please sign in to view your orders.
          </p>
          <Link
            href="/signin"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PAID":
        return "bg-green-100 text-green-800";
      case "ACTIVE":
        return "bg-yellow-100 text-yellow-800";
      case "EXPIRED":
        return "bg-red-100 text-red-800";
      case "TERMINATED":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "PAID":
        return "✅ Paid";
      case "ACTIVE":
        return "⏳ Active";
      case "EXPIRED":
        return "❌ Expired";
      case "TERMINATED":
        return "🚫 Terminated";
      default:
        return status;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Orders</h1>
        <Link
          href="/checkout"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Create New Order
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("orders")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "orders"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Orders ({Array.isArray(orders) ? orders.length : 0})
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === "payments"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Payments (
            {Array.isArray(orders)
              ? orders.reduce(
                  (acc, order) => acc + (order.payments?.length || 0),
                  0
                )
              : 0}
            )
          </button>
        </nav>
      </div>

      {loading && (
        <div className="rounded bg-blue-50 text-blue-700 px-3 py-2 mb-4">
          Loading your orders...
        </div>
      )}

      {error && (
        <div className="rounded bg-red-50 text-red-700 px-3 py-2 mb-4">
          {error}
        </div>
      )}

      {/* Orders Tab Content */}
      {activeTab === "orders" && (
        <>
          {!loading &&
            !error &&
            Array.isArray(orders) &&
            orders.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  You don&apos;t have any orders yet.
                </p>
                <Link
                  href="/checkout"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Create Your First Order
                </Link>
              </div>
            )}

          {!loading && !error && Array.isArray(orders) && orders.length > 0 && (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.orderId}
                  className="bg-white rounded-lg border p-6 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Order #{order.orderId.slice(-8)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Created:{" "}
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-semibold">
                        {order.orderAmount} {order.orderCurrency}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Program</p>
                      <p className="font-semibold">{order.programId}</p>
                    </div>
                    {order.payments && order.payments.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-600">Payment Session</p>
                        <p className="text-sm font-mono">
                          {order.payments[0]?.paymentSessionId}
                        </p>
                      </div>
                    )}
                    {order.expiresAt && (
                      <div>
                        <p className="text-sm text-gray-600">Expires</p>
                        <p className="text-sm">
                          {new Date(order.expiresAt).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>

                  {order.payments && order.payments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Payments ({order.payments.length})
                      </h4>
                      <div className="space-y-2">
                        {order.payments.map((payment, index) => (
                          <div
                            key={payment.paymentId}
                            className="bg-gray-50 rounded p-3 text-sm"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">
                                Payment #{index + 1}
                              </span>
                              <span
                                className={`px-2 py-1 rounded text-xs ${getStatusColor(
                                  payment.status
                                )}`}
                              >
                                {payment.status}
                              </span>
                            </div>
                            {payment.paymentMessage && (
                              <p className="text-gray-600 mt-1">
                                {payment.paymentMessage}
                              </p>
                            )}
                            {payment.paymentTime && (
                              <p className="text-gray-500 text-xs mt-1">
                                {new Date(payment.paymentTime).toLocaleString()}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {order.status === "ACTIVE" &&
                    order.payments &&
                    order.payments.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <Link
                          href={`/checkout?retry=${order.orderId}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
                        >
                          Retry Payment
                        </Link>
                        <button
                          onClick={async () => {
                            try {
                              const response = await fetch(
                                `/api/payments/verify`,
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                    ...getAuthHeaders(),
                                  },
                                  body: JSON.stringify({
                                    orderId: order.orderId,
                                  }),
                                }
                              );

                              if (response.ok) {
                                const data = await response.json();
                                if (data.success) {
                                  // Refresh the page to show updated status
                                  window.location.reload();
                                }
                              }
                            } catch (error) {
                              console.error(
                                "Payment verification failed:",
                                error
                              );
                            }
                          }}
                          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                        >
                          Verify Payment Status
                        </button>
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Payments Tab Content */}
      {activeTab === "payments" && (
        <>
          {!loading &&
            !error &&
            Array.isArray(orders) &&
            orders.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No payment attempts found.</p>
              </div>
            )}

          {!loading && !error && Array.isArray(orders) && orders.length > 0 && (
            <div className="space-y-4">
              {orders
                .filter((order) => order.payments && order.payments.length > 0)
                .map((order) => (
                  <div
                    key={order.orderId}
                    className="bg-white rounded-lg border p-6 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Order #{order.orderId.slice(-8)}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {order.orderAmount} {order.orderCurrency}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusText(order.status)}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-700">
                        Payments ({order.payments?.length || 0})
                      </h4>
                      {order.payments?.map((payment, index) => (
                        <div
                          key={payment.paymentId}
                          className="bg-gray-50 rounded p-4 border-l-4 border-blue-200"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-sm">
                                  Payment #{index + 1}
                                </span>
                                <span
                                  className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                                    payment.status
                                  )}`}
                                >
                                  {payment.status}
                                </span>
                                <span className="text-sm font-medium">
                                  {payment.amount} {payment.currency}
                                </span>
                              </div>

                              {payment.paymentMessage && (
                                <p className="text-gray-600 text-sm mb-1">
                                  {payment.paymentMessage}
                                </p>
                              )}

                              {payment.paymentTime && (
                                <p className="text-gray-500 text-xs">
                                  {new Date(
                                    payment.paymentTime
                                  ).toLocaleString()}
                                </p>
                              )}

                              {payment.paymentMessage && (
                                <div className="mt-2 p-2 bg-red-50 rounded text-xs">
                                  <p className="text-red-700 font-medium">
                                    Error Message:
                                  </p>
                                  <p>{payment.paymentMessage}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              {orders.every(
                (order) => !order.payments || order.payments.length === 0
              ) && (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    No payments found for any orders.
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyOrdersPage;
