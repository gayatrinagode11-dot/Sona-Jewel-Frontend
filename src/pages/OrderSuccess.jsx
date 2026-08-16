
import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();

  const orderId = location.state?.orderId;

  return (
    <div className="min-h-[70vh] bg-[#FFF8F0] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center">

        <div className="text-6xl mb-5">
          ✅
        </div>

        <h1 className="text-3xl font-bold text-[#8B4513] mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your order. Your order has been successfully placed.
        </p>

        {orderId && (
          <div className="bg-[#FFF8F0] rounded-lg p-4 mb-6">
            <p className="text-gray-600 text-sm">
              Your Order ID
            </p>

            <p className="font-bold text-[#8B4513] mt-1 break-all">
              {orderId}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Link
            to="/products"
            className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b3410]"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-[#8B4513] text-[#8B4513] px-6 py-3 rounded-lg font-semibold hover:bg-[#8B4513] hover:text-white"
          >
            Go to Home
          </Link>

        </div>

      </div>
    </div>
  );
}

