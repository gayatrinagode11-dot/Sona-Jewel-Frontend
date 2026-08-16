import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { allProducts } from "../data/products";
import api from "../api/axios";

export default function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Backend products
        const response = await api.get("/get-products");

        const backendProducts = response.data.product;

        // First search in backend products
        const backendProduct = backendProducts.find(
          (p) => p._id === id
        );

        if (backendProduct) {
          setProduct(backendProduct);
          return;
        }

        // If not found in backend,
        // search in old frontend products
        const frontendProduct = allProducts.find(
          (p) => String(p.id) === String(id)
        );

        setProduct(frontendProduct || null);

      } catch (error) {
        console.error(
          "Failed to fetch product:",
          error
        );

        // Backend failed → try frontend products
        const frontendProduct = allProducts.find(
          (p) => String(p.id) === String(id)
        );

        setProduct(frontendProduct || null);

      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl">
          Loading product...
        </p>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="p-10 text-center">
        <p className="text-2xl font-bold text-gray-800">
          Product not found
        </p>
      </div>
    );
  }

  // Support both backend and frontend data
  const productImage =
    product.imageURL || product.image;

  const productDescription =
    product.description || product.desc;

  const productPrice =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : product.price;

  // Add to Cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div>

          <img
            src={productImage}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
          />

        </div>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {product.name}
          </h2>

          <p className="text-3xl text-[#8B4513] font-bold mb-5">
            {productPrice}
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {productDescription}
          </p>

          {/* Category */}
          {product.category && (
            <p className="mb-3">
              <span className="font-semibold">
                Category:
              </span>{" "}
              {product.category}
            </p>
          )}

          {/* Stock */}
          {product.stock !== undefined && (
            <p className="mb-6">
              <span className="font-semibold">
                Stock:
              </span>{" "}
              {product.stock}
            </p>
          )}

          {/* Benefits */}
          <div className="space-y-2 mb-8">

            <p>
              ✓ 100% BIS Hallmarked
            </p>

            <p>
              ✓ Free Shipping
            </p>

            <p>
              ✓ 7 Day Return
            </p>

          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-[#8B4513] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#6b3410] transition"
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}