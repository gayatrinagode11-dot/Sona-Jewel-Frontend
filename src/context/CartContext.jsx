import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // =========================
  // GET USER
  // =========================
  const getUser = () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    return user;
  };


  // =========================
  // FETCH CART
  // =========================
  const fetchCart = async () => {
    try {
      const user = getUser();

      if (!user) {
        setCart([]);
        return;
      }

      const userId = user.id || user._id;

      if (!userId) {
        console.log("User ID not found");
        setCart([]);
        return;
      }

      const response = await api.get(
        `/cart/${userId}`
      );

      console.log(
        "Cart response:",
        response.data
      );

      setCart(
        response.data.cart?.products || []
      );
    } catch (error) {
      // New user साठी cart नसणे normal आहे
      if (error.response?.status === 404) {
        setCart([]);
        return;
      }

      console.error(
        "Failed to fetch cart:",
        error.response?.data ||
          error.message
      );
    }
  };


  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {
    fetchCart();
  }, []);


  // =========================
  // ADD TO CART
  // =========================
  const addToCart = async (product) => {
    try {
      const user = getUser();

      if (!user) {
        alert("Please login first");
        return;
      }

      const userId = user.id || user._id;

      // Backend MongoDB ID
      const productId =
        product._id || product.id;

      console.log(
        "Adding product:",
        product
      );

      console.log(
        "Product ID:",
        productId
      );

      console.log(
        "User ID:",
        userId
      );

      if (!userId) {
        alert("User ID not found");
        return;
      }

      if (!productId) {
        alert("Product ID not found");
        return;
      }

      const response = await api.post(
        "/cart/add",
        {
          userId,
          productId,
          quantity: 1,
        }
      );

      console.log(
        "Add to cart response:",
        response.data
      );

      setCart(
        response.data.cart?.products || []
      );

      alert(
        "Product added to cart successfully"
      );
    } catch (error) {
      console.error(
        "Add to cart failed:",
        error.response?.data ||
          error.message
      );
    }
  };


  // =========================
  // REMOVE FROM CART
  // =========================
  const removeFromCart = async (productId) => {
    try {
      const user = getUser();

      if (!user) {
        alert("Please login first");
        return;
      }

      const userId = user.id || user._id;

      if (!userId || !productId) {
        console.log(
          "User ID or Product ID missing"
        );
        return;
      }

      console.log(
        "Removing product:",
        productId
      );

      const response = await api.delete(
        "/cart/remove",
        {
          data: {
            userId,
            productId,
          },
        }
      );

      console.log(
        "Remove cart response:",
        response.data
      );

      setCart(
        response.data.cart?.products || []
      );
    } catch (error) {
      console.error(
        "Remove from cart failed:",
        error.response?.data ||
          error.message
      );
    }
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


// =========================
// CUSTOM HOOK
// =========================
export function useCart() {
  return useContext(CartContext);
}