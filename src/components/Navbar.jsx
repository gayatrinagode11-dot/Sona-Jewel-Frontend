
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Logged-in user check
  const user = JSON.parse(localStorage.getItem("user"));

  // =========================
  // SEARCH
  // =========================
  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      navigate("/products");
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(
        search.trim()
      )}`
    );
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="w-full px-6 lg:px-10 py-4 flex items-center gap-6">

        {/* =========================
            LOGO
        ========================= */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-bold font-serif text-[#8B4513]"
          >
            Sona Jewel
          </Link>
        </div>


        {/* =========================
            CENTER NAVIGATION
        ========================= */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-[#8B4513] transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-[#8B4513] transition"
          >
            Shop
          </Link>

          <Link
            to="/collections"
            className="hover:text-[#8B4513] transition"
          >
            Collections
          </Link>

          <Link
            to="/about"
            className="hover:text-[#8B4513] transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#8B4513] transition"
          >
            Contact
          </Link>

        </nav>


        {/* =========================
            SEARCH
        ========================= */}
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
        >

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search jewellery..."
            className="px-4 py-2 w-48 xl:w-56 outline-none text-sm"
          />

          <button
            type="submit"
            className="px-4 py-2 text-[#8B4513] font-semibold hover:bg-[#FFF8F0] transition"
          >
            🔍
          </button>

        </form>


        {/* =========================
            RIGHT SIDE
        ========================= */}
        <div className="flex items-center justify-end gap-4 lg:gap-5">

          {/* CART */}
          <Link
            to="/cart"
            className="relative text-[#8B4513] font-semibold hover:text-[#6b3410]"
          >
            🛒 Cart

            {cart.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>


          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="relative text-[#8B4513] font-semibold hover:text-[#6b3410]"
          >
            ❤️ Wishlist

            {wishlist.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>


          {/* MY ORDERS */}
          {user && (
            <Link
              to="/my-orders"
              className="text-[#8B4513] font-semibold hover:text-[#6b3410] whitespace-nowrap"
            >
              📦 My Orders
            </Link>
          )}


          {/* LOGIN / LOGOUT */}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#8B4513] text-white px-5 lg:px-6 py-2 rounded-full hover:bg-[#6b3410] transition font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-[#8B4513] text-white px-5 lg:px-6 py-2 rounded-full hover:bg-[#6b3410] transition font-semibold"
            >
              Login
            </Link>
          )}

        </div>

      </div>

    </header>
  );
}

