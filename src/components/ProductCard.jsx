import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  // Frontend + Backend दोन्ही data साठी
  const productId = product._id || product.id;
  const productImage = product.imageURL || product.image;
  const productDescription = product.description || product.desc;

  // Add to Cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);
  };

  // Wishlist
  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(product);
    }
  };

  const liked = isInWishlist(productId);

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <Link to={`/product/${productId}`}>
          <img
            src={productImage}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 left-3 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-xl hover:scale-110 transition"
        >
          {liked ? "❤️" : "♡"}
        </button>

      </div>

      {/* Product Details */}
      <div className="p-4">

        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">

          <p className="text-[#8B4513] font-bold text-xl">
            {typeof product.price === "number"
              ? `₹${product.price.toLocaleString("en-IN")}`
              : product.price}
          </p>

        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-[#8B4513] text-white py-2 rounded-lg hover:bg-[#6b3410] font-semibold mb-2 transition"
        >
          🛒 Add to Cart
        </button>

        {/* View Details */}
        <Link
          to={`/product/${productId}`}
          className="block text-center w-full border border-[#8B4513] text-[#8B4513] py-2 rounded-lg hover:bg-[#8B4513] hover:text-white font-semibold transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}