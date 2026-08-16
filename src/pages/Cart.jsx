import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
  } = useCart();


  // =========================
  // EMPTY CART
  // =========================
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFF8F0] px-4">

        <h1 className="text-3xl font-bold text-[#8B4513] mb-3">
          Your Cart is Empty
        </h1>

        <p className="text-gray-600 mb-6">
          You haven't added any products yet.
        </p>

        <Link
          to="/products"
          className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }


  // =========================
  // TOTAL
  // =========================
  const total = cart.reduce(
    (sum, item) => {

      const product = item.productId;

      const price =
        Number(product?.price) || 0;

      const quantity =
        Number(item.quantity) || 1;

      return (
        sum + price * quantity
      );
    },
    0
  );


  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8">
          My Cart
        </h1>


        <div className="grid md:grid-cols-3 gap-8">

          {/* =========================
              PRODUCTS
          ========================= */}
          <div className="md:col-span-2 space-y-5">

            {cart.map((item) => {

              // Actual product
              const product =
                item.productId;


              // Product ID
              const productId =
                product?._id ||
                product?.id;


              // Product image
              const image =
                product?.imageURL ||
                product?.image ||
                "";


              // Product price
              const price =
                Number(product?.price) || 0;


              // Product quantity
              const quantity =
                Number(item.quantity) || 1;


              return (
                <div
                  key={productId}
                  className="bg-white rounded-2xl shadow-md p-4 flex gap-5"
                >

                  {/* =========================
                      IMAGE
                  ========================= */}
                  <div className="flex-shrink-0">

                    {image ? (
                      <img
                        src={image}
                        alt={
                          product?.name ||
                          "Product"
                        }
                        className="w-28 h-28 object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-28 h-28 rounded-xl bg-gray-200 flex items-center justify-center">
                        💎
                      </div>
                    )}

                  </div>


                  {/* =========================
                      DETAILS
                  ========================= */}
                  <div className="flex-1">

                    {/* Name */}
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                      {product?.name ||
                        "Product"}
                    </h2>


                    {/* Description */}
                    {product?.description && (
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {product.description}
                      </p>
                    )}


                    {/* Price */}
                    <p className="text-[#8B4513] font-bold text-lg mt-2">
                      ₹
                      {price.toLocaleString(
                        "en-IN"
                      )}
                    </p>


                    {/* Quantity */}
                    <p className="text-gray-600 mt-1">
                      Quantity:{" "}
                      {quantity}
                    </p>


                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromCart(
                          productId
                        )
                      }
                      className="mt-3 text-red-600 font-semibold hover:underline"
                    >
                      Remove from Cart
                    </button>

                  </div>

                </div>
              );
            })}

          </div>


          {/* =========================
              ORDER SUMMARY
          ========================= */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h2>


            <div className="flex justify-between mb-4 text-gray-600">

              <span>
                Total Items
              </span>

              <span>
                {cart.reduce(
                  (total, item) =>
                    total +
                    (Number(
                      item.quantity
                    ) || 1),
                  0
                )}
              </span>

            </div>


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


            <Link
              to="/checkout"
              className="block w-full mt-6 bg-[#8B4513] text-white py-3 rounded-lg font-semibold hover:bg-[#6b3410] text-center"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}