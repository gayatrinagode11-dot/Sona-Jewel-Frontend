import { Link, useParams } from "react-router-dom";

export default function OrderTracking() {
  const { orderId } = useParams();

  // Temporary status
  const status = "Pending";

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8 text-center">
          Track Your Order
        </h1>

        {/* Order Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="text-center mb-8">

            <p className="text-gray-500 mb-2">
              Order ID
            </p>

            <h2 className="text-xl font-bold text-gray-800">
              {orderId}
            </h2>

          </div>

          {/* Status */}
          <div className="text-center mb-10">

            <p className="text-gray-500 mb-2">
              Current Status
            </p>

            <span className="inline-block bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-bold">
              {status}
            </span>

          </div>

          {/* Order Progress */}
          <div className="space-y-6">

            {/* Pending */}
            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center">
                ✓
              </div>

              <div>
                <h3 className="font-bold text-gray-800">
                  Order Placed
                </h3>

                <p className="text-gray-500 text-sm">
                  Your order has been placed successfully.
                </p>
              </div>

            </div>

            {/* Confirmed */}
            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                2
              </div>

              <div>
                <h3 className="font-bold text-gray-400">
                  Confirmed
                </h3>

                <p className="text-gray-400 text-sm">
                  Waiting for order confirmation.
                </p>
              </div>

            </div>

            {/* Shipped */}
            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                3
              </div>

              <div>
                <h3 className="font-bold text-gray-400">
                  Shipped
                </h3>

                <p className="text-gray-400 text-sm">
                  Your order will be shipped soon.
                </p>
              </div>

            </div>

            {/* Delivered */}
            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                4
              </div>

              <div>
                <h3 className="font-bold text-gray-400">
                  Delivered
                </h3>

                <p className="text-gray-400 text-sm">
                  Your order will be delivered soon.
                </p>
              </div>

            </div>

          </div>

          {/* Back Button */}
          <div className="text-center mt-10">

            <Link
              to="/my-orders"
              className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b3410]"
            >
              Back to My Orders
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}