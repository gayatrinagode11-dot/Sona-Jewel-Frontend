
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH MY ORDERS
  // =========================
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(
          localStorage.getItem("user")
        );

        if (!user) {
          setOrders([]);
          setLoading(false);
          return;
        }

        const userId = user.id || user._id;

        if (!userId) {
          console.log("User ID not found");
          setOrders([]);
          setLoading(false);
          return;
        }

        console.log("Fetching orders for:", userId);

        const response = await api.get(
          `/orders/${userId}`
        );

        console.log(
          "My Orders response:",
          response.data
        );

        setOrders(
          response.data.orders || []
        );

      } catch (error) {
        console.error(
          "Failed to fetch orders:",
          error.response?.data ||
            error.message
        );

        setOrders([]);

      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF8F0]">

        <p className="text-xl font-semibold text-[#8B4513]">
          Loading your orders...
        </p>

      </div>
    );
  }


  // =========================
  // NO ORDERS
  // =========================
  if (orders.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFF8F0] px-4">

        <h1 className="text-3xl font-bold text-[#8B4513] mb-3">
          No Orders Yet
        </h1>

        <p className="text-gray-600 mb-6">
          You haven't placed any orders yet.
        </p>

        <Link
          to="/products"
          className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Start Shopping
        </Link>

      </div>
    );
  }


  // =========================
  // ORDERS
  // =========================
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8">
          My Orders
        </h1>


        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-2xl shadow-md p-6"
            >

              {/* =========================
                  ORDER HEADER
              ========================= */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-5">

                {/* Order ID */}
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID
                  </p>

                  <p className="font-bold text-gray-800 break-all">
                    {order._id}
                  </p>
                </div>


                {/* Date */}
                <div>
                  <p className="text-sm text-gray-500">
                    Order Date
                  </p>

                  <p className="font-semibold text-gray-800">
                    {order.createdAt
                      ? new Date(
                          order.createdAt
                        ).toLocaleDateString(
                          "en-IN"
                        )
                      : "N/A"}
                  </p>
                </div>


                {/* Total */}
                <div>
                  <p className="text-sm text-gray-500">
                    Total Amount
                  </p>

                  <p className="font-bold text-[#8B4513]">
                    ₹
                    {Number(
                      order.totalAmount || 0
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </p>
                </div>


                {/* Status */}
                <span
                  className={`px-4 py-2 rounded-full font-semibold text-sm w-fit ${
                    order.status ===
                    "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : order.status ===
                        "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status || "Pending"}
                </span>

              </div>


              {/* =========================
                  PRODUCTS
              ========================= */}

              <div className="mt-5 space-y-4">

                {order.products?.map(
                  (item, index) => {

                    const product =
                      item.productId;

                    // जर product populate झाला नसेल
                    if (
                      !product ||
                      typeof product !==
                        "object"
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
                        className="flex items-center gap-4"
                      >

                        {/* Image */}
                        {image ? (
                          <img
                            src={image}
                            alt={
                              product.name ||
                              "Product"
                            }
                            className="w-20 h-20 object-cover rounded-xl"
                          />
                        ) : (
                          <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center">
                            💎
                          </div>
                        )}


                        {/* Details */}
                        <div className="flex-1">

                          <h3 className="font-semibold text-gray-800">
                            {product.name ||
                              "Product"}
                          </h3>

                          <p className="text-gray-500 text-sm">
                            Quantity:{" "}
                            {quantity}
                          </p>

                          <p className="text-[#8B4513] font-semibold">
                            ₹
                            {price.toLocaleString(
                              "en-IN"
                            )}
                          </p>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>


              {/* =========================
                  TRACK ORDER
              ========================= */}

              <div className="mt-6">

                <Link
                  to={`/order/${order._id}`}
                  className="inline-block bg-[#8B4513] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#6b3410]"
                >
                  Track Order
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
