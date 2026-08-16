
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/axios";

export default function OrderDetails() {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH ORDER
  // =========================
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        console.log("Order ID:", orderId);

        const response = await api.get(
          `/orders/details/${orderId}`
        );

        console.log(
          "Order details:",
          response.data
        );

        setOrder(response.data.order);

      } catch (error) {
        console.error(
          "Failed to fetch order:",
          error.response?.data ||
            error.message
        );
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);


  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF8F0]">
        <p className="text-xl font-semibold text-[#8B4513]">
          Loading order...
        </p>
      </div>
    );
  }


  // =========================
  // ORDER NOT FOUND
  // =========================
  if (!order) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFF8F0] px-4">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Order Not Found
        </h1>

        <Link
          to="/my-orders"
          className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Back to My Orders
        </Link>

      </div>
    );
  }


  // =========================
  // TOTAL
  // =========================
  const total = Number(
    order.totalAmount || 0
  );


  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513]">
              Order Details
            </h1>

            <p className="text-gray-600 mt-2">
              Order ID: {order._id}
            </p>
          </div>

          <span
            className={`px-5 py-2 rounded-full font-semibold w-fit ${
              order.status === "Cancelled"
                ? "bg-red-100 text-red-700"
                : order.status === "Delivered"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order.status || "Pending"}
          </span>

        </div>


        {/* =========================
            ORDER INFO
        ========================= */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Order Information
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div>
              <p className="text-sm text-gray-500">
                Order Date
              </p>

              <p className="font-semibold mt-1">
                {order.createdAt
                  ? new Date(
                      order.createdAt
                    ).toLocaleDateString(
                      "en-IN"
                    )
                  : "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Amount
              </p>

              <p className="font-bold text-[#8B4513] mt-1">
                ₹
                {total.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Status
              </p>

              <p className="font-semibold mt-1">
                {order.status || "Pending"}
              </p>
            </div>

          </div>

        </div>


        {/* =========================
            DELIVERY ADDRESS
        ========================= */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Delivery Address
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {order.address || "Address not available"}
          </p>

        </div>


        {/* =========================
            PRODUCTS
        ========================= */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Ordered Products
          </h2>

          <div className="space-y-5">

            {order.products?.map(
              (item, index) => {

                const product =
                  item.productId;

                if (
                  !product ||
                  typeof product !== "object"
                ) {
                  return null;
                }

                const image =
                  product.imageURL ||
                  product.image ||
                  "";

                const price =
                  Number(
                    item.price ||
                      product.price ||
                      0
                  );

                const quantity =
                  Number(
                    item.quantity
                  ) || 1;

                return (
                  <div
                    key={
                      product._id ||
                      index
                    }
                    className="flex gap-5 items-center border-b pb-5 last:border-b-0 last:pb-0"
                  >

                    {/* IMAGE */}

                    {image ? (
                      <img
                        src={image}
                        alt={
                          product.name ||
                          "Product"
                        }
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-xl bg-gray-200 flex items-center justify-center">
                        💎
                      </div>
                    )}


                    {/* DETAILS */}

                    <div className="flex-1">

                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name ||
                          "Product"}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Quantity: {quantity}
                      </p>

                      <p className="text-[#8B4513] font-bold mt-1">
                        ₹
                        {price.toLocaleString(
                          "en-IN"
                        )}
                      </p>

                    </div>

                    <div className="font-semibold text-gray-800">

                      ₹
                      {(
                        price *
                        quantity
                      ).toLocaleString(
                        "en-IN"
                      )}

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>


        {/* =========================
            TOTAL
        ========================= */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

          <div className="flex justify-between items-center text-2xl font-bold">

            <span>
              Total
            </span>

            <span className="text-[#8B4513]">
              ₹
              {total.toLocaleString(
                "en-IN"
              )}
            </span>

          </div>

        </div>


        {/* =========================
            BACK BUTTON
        ========================= */}

        <Link
          to="/my-orders"
          className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b3410]"
        >
          ← Back to My Orders
        </Link>

      </div>

    </div>
  );
}

