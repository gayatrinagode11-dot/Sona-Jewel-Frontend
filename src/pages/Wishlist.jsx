import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Wishlist() {

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  // Empty Wishlist
  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFF8F0] px-4">

        <h1 className="text-3xl font-bold text-[#8B4513] mb-3">
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-600 mb-6">
          Save your favourite jewellery here.
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

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-10 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8">
          My Wishlist ❤️
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {wishlist.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              {/* Image */}
              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

              </Link>

              {/* Details */}
              <div className="p-4">

                <h2 className="font-semibold text-lg mb-2">
                  {product.name}
                </h2>

                <p className="text-[#8B4513] font-bold text-xl mb-4">
                  {product.price}
                </p>

                {/* Add To Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#8B4513] text-white py-2 rounded-lg font-semibold mb-2 hover:bg-[#6b3410]"
                >
                  🛒 Add to Cart
                </button>

                {/* Remove */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="w-full border border-red-500 text-red-500 py-2 rounded-lg font-semibold hover:bg-red-500 hover:text-white"
                >
                  ❤️ Remove from Wishlist
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}