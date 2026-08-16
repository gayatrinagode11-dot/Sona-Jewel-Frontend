import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { allProducts } from "../data/products";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("category") || "all";

  // Category filtering
  const categoryProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter(
          (product) => product.category === filter
        );

  // Home page वर फक्त 8 products
  const featuredProducts = categoryProducts.slice(0, 8);

  const handleFilter = (category) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="bg-[#FFF8F0]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 py-20 px-4 text-center">

        <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#8B4513] mb-4">
          Festive Gold Collection 2026
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Certified 22K & 18K Gold | BIS Hallmarked
        </p>

        <Link
          to="/products"
          className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6b3410] transition"
        >
          Shop Now
        </Link>

      </section>

      {/* ================= SHOP BY CATEGORY ================= */}
      <section className="py-16 px-4 bg-white">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-[#8B4513] mb-10">
            Shop By Category
          </h2>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">

            <button
              onClick={() => handleFilter("all")}
              className={`px-6 py-2.5 rounded-full font-semibold transition ${
                filter === "all"
                  ? "bg-[#8B4513] text-white"
                  : "border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              All
            </button>

            <button
              onClick={() => handleFilter("rings")}
              className={`px-6 py-2.5 rounded-full font-semibold transition ${
                filter === "rings"
                  ? "bg-[#8B4513] text-white"
                  : "border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              Rings
            </button>

            <button
              onClick={() => handleFilter("necklace")}
              className={`px-6 py-2.5 rounded-full font-semibold transition ${
                filter === "necklace"
                  ? "bg-[#8B4513] text-white"
                  : "border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              Necklace
            </button>

            <button
              onClick={() => handleFilter("earrings")}
              className={`px-6 py-2.5 rounded-full font-semibold transition ${
                filter === "earrings"
                  ? "bg-[#8B4513] text-white"
                  : "border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              Earrings
            </button>

            <button
              onClick={() => handleFilter("bangles")}
              className={`px-6 py-2.5 rounded-full font-semibold transition ${
                filter === "bangles"
                  ? "bg-[#8B4513] text-white"
                  : "border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
              }`}
            >
              Bangles
            </button>

          </div>

          {/* ================= FEATURED PRODUCTS ================= */}
          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              Featured Jewellery
            </h2>

            <p className="text-gray-500">
              Showing {featuredProducts.length} products
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          {/* VIEW ALL PRODUCTS */}
          <div className="text-center mt-12">

            <Link
              to="/products"
              className="inline-block border-2 border-[#8B4513] text-[#8B4513] px-8 py-3 rounded-full font-semibold hover:bg-[#8B4513] hover:text-white transition"
            >
              View All Products →
            </Link>

          </div>

        </div>

      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-14 bg-[#8B4513] text-white text-center">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">

          <div>
            <div className="text-3xl mb-2">💎</div>

            <h3 className="text-xl font-bold mb-2">
              100% Certified Gold
            </h3>

            <p>
              BIS Hallmarked Jewellery
            </p>
          </div>

          <div>
            <div className="text-3xl mb-2">🚚</div>

            <h3 className="text-xl font-bold mb-2">
              Free Shipping
            </h3>

            <p>
              On orders above ₹20,000
            </p>
          </div>

          <div>
            <div className="text-3xl mb-2">🔄</div>

            <h3 className="text-xl font-bold mb-2">
              Easy Returns
            </h3>

            <p>
              7 Days Return Policy
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}