
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import api from "../api/axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search") || "";

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/get-products");
        console.log("FULL BACKEND RESPONSE:", response.data);
console.log("FIRST PRODUCT:", response.data.product[0]);
console.log("MONGODB ID:", response.data.product[0]?._id);

        console.log("Products from backend:", response.data.product);

        setProducts(response.data.product);
      } catch (error) {
        console.error(
          "Failed to fetch products:",
          error.response?.data || error.message
        );
      }
    };

    fetchProducts();
  }, []);

  // Categories
  const categories = [
    { name: "All", value: "" },
    { name: "Rings", value: "rings" },
    { name: "Necklace", value: "necklace" },
    { name: "Earrings", value: "earrings" },
    { name: "Bangles", value: "bangles" },
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    !category ||
    product.category?.toLowerCase() ===
      category.toLowerCase();

  const matchesSearch =
    !search ||
    product.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});
  // Category button
  const handleCategory = (value) => {
    if (value === "") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: value,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#8B4513] mb-3">
            Our Jewellery
          </h1>

          <p className="text-gray-600">
            Discover jewellery designed for every special moment.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => {
            const isActive =
              category === item.value ||
              (!category && item.value === "");

            return (
              <button
                key={item.name}
                onClick={() => handleCategory(item.value)}
                className={`px-6 py-2.5 rounded-full font-semibold transition duration-200 ${
                  isActive
                    ? "bg-[#8B4513] text-white"
                    : "bg-white text-[#8B4513] border border-[#8B4513] hover:bg-[#8B4513] hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Result Information */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <h2 className="text-xl font-semibold text-gray-800">
            {category || "All Jewellery"}
          </h2>

          <p className="text-gray-600">
            {filteredProducts.length} Products
          </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="text-5xl mb-4">
              💎
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Products Found
            </h2>

            <p className="text-gray-600 mb-6">
              This category currently has no products.
            </p>

            <button
              onClick={() => setSearchParams({})}
              className="bg-[#8B4513] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b3410]"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

