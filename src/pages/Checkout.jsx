
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import api from "../api/axios";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);

  // Only valid cart products
  const validCart = cart.filter(
    (item) => item.productId
  );

  // Total
  const total = validCart.reduce((sum, item) => {
    const product = item.productId;

    const price = Number(product?.price) || 0;
    const quantity = Number(item.quantity) || 1;

    return sum + price * quantity;
  }, 0);

  // Input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Place order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      return;
    }

    if (validCart.length === 0) {
      alert("Your cart has no valid products");
      return;
    }

    try {
      setLoading(true);

      const userId = user.id || user._id;

      if (!userId) {
        alert("User ID not found");
        return;
      }

      // Prepare products
      const products = validCart
        .filter(
          (item) =>
            item.productId?._id
        )
        .map((item) => ({
          productId: item.productId._id,
          quantity: Number(item.quantity) || 1,
          price: Number(item.productId.price) || 0,
        }));

      if (products.length === 0) {
        alert("No valid products found in cart");
        return;
      }

      console.log("Order products:", products);

      const response = await api.post(
        "/orders/create",
        {
          userId,
          products,
          totalAmount: total,
          address: `${form.name}, ${form.phone}, ${form.address}, ${form.city}, ${form.state} - ${form.pincode}`,
        }
      );

      console.log(
        "Order created:",
        response.data
      );

      navigate("/order-success", {
        state: {
          orderId:
            response.data.orderId ||
            response.data.order?._id,
        },
      });

    } catch (error) {
      console.error(
        "Order failed:",
        error.response?.data ||
          error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to place order"
      );

    } finally {
      setLoading(false);
    }
  };

  // Empty / invalid cart
  if (validCart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFF8F0] px-4">

        <h1 className="text-3xl font-bold text-[#8B4513] mb-4">
          Your Cart is Empty
        </h1>

        <Link
          to="/products"
          className="bg-[#8B4513] text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#8B4513] mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* =========================
              DELIVERY FORM
          ========================= */}

          <form
            onSubmit={handlePlaceOrder}
            className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6"
          >

            <h2 className="text-2xl font-bold mb-6">
              Delivery Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {/* Name */}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border p-3 rounded-lg"
              />

              {/* Phone */}
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="border p-3 rounded-lg"
              />

              {/* City */}
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="border p-3 rounded-lg"
              />

              {/* State */}
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="border p-3 rounded-lg"
              />

              {/* Pincode */}
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
                className="border p-3 rounded-lg"
              />

              {/* Address */}
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Full Address"
                required
                className="border p-3 rounded-lg md:col-span-2"
              />

            </div>

            {/* Place Order */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-[#8B4513] text-white py-3 rounded-lg font-semibold hover:bg-[#6b3410] disabled:opacity-50"
            >
              {loading
                ? "Placing Order..."
                : "Place Order"}
            </button>

          </form>


          {/* =========================
              ORDER SUMMARY
          ========================= */}

          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {validCart.map((item) => {

              const product =
                item.productId;

              const productId =
                product?._id;

              const price =
                Number(product?.price) || 0;

              const quantity =
                Number(item.quantity) || 1;

              return (
                <div
                  key={productId}
                  className="flex justify-between items-start gap-4 mb-4"
                >

                  <div>
                    <p className="font-semibold text-gray-800">
                      {product?.name ||
                        "Product"}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {quantity}
                    </p>
                  </div>

                  <span className="font-semibold text-[#8B4513]">
                    ₹
                    {(
                      price * quantity
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>
              );
            })}

            {/* Total */}
            <div className="border-t pt-4 flex justify-between text-xl font-bold">

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

        </div>
      </div>
    </div>
  );
}

