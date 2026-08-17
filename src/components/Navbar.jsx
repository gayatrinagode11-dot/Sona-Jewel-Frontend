import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

    setMenuOpen(false);
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="w-full px-4 md:px-6 lg:px-10 py-4 flex items-center gap-4 lg:gap-6">

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
            DESKTOP NAVIGATION
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
            DESKTOP SEARCH
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
        <div className="flex items-center justify-end gap-3 lg:gap-5">

          {/* CART */}
          <Link
            to="/cart"
            className="relative text-[#8B4513] font-semibold hover:text-[#6b3410]"
          >
            <span className="hidden sm:inline">
              🛒 Cart
            </span>

            <span className="sm:hidden text-xl">
              🛒
            </span>

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
            <span className="hidden sm:inline">
              ❤️ Wishlist
            </span>

            <span className="sm:hidden text-xl">
              ❤️
            </span>

            {wishlist.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>


          {/* MY ORDERS - DESKTOP */}
          {user && (
            <Link
              to="/my-orders"
              className="hidden md:block text-[#8B4513] font-semibold hover:text-[#6b3410] whitespace-nowrap"
            >
              📦 My Orders
            </Link>
          )}


          {/* LOGIN / LOGOUT - DESKTOP */}
          <div className="hidden md:block">

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


          {/* =========================
              MOBILE MENU BUTTON
          ========================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-[#8B4513] ml-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* =========================
          MOBILE MENU
      ========================= */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">

          <nav className="flex flex-col px-6 py-4 gap-1">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium hover:text-[#8B4513]"
            >
              🏠 Home
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium hover:text-[#8B4513]"
            >
              🛍️ Shop
            </Link>

            <Link
              to="/collections"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium hover:text-[#8B4513]"
            >
              💎 Collections
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium hover:text-[#8B4513]"
            >
              ℹ️ About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-700 font-medium hover:text-[#8B4513]"
            >
              📞 Contact
            </Link>

            {user && (
              <Link
                to="/my-orders"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-gray-700 font-medium hover:text-[#8B4513]"
              >
                📦 My Orders
              </Link>
            )}

            {/* MOBILE SEARCH */}
            <form
              onSubmit={handleSearch}
              className="flex items-center border border-gray-300 rounded-full overflow-hidden mt-3 mb-2"
            >

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search jewellery..."
                className="px-4 py-2 flex-1 outline-none text-sm"
              />

              <button
                type="submit"
                className="px-4 py-2 text-[#8B4513] font-semibold"
              >
                🔍
              </button>

            </form>

            {/* MOBILE LOGIN / LOGOUT */}
            {user ? (
              <button
                onClick={handleLogout}
                className="mt-2 bg-[#8B4513] text-white py-2.5 rounded-full font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-[#8B4513] text-white py-2.5 rounded-full font-semibold text-center"
              >
                Login
              </Link>
            )}

          </nav>

        </div>
      )}

    </header>
  );
}