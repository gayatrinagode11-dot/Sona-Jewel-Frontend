
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {

  // =========================
  // LOAD WISHLIST
  // =========================
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });


  // =========================
  // SAVE TO LOCAL STORAGE
  // =========================
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);


  // =========================
  // GET PRODUCT ID
  // =========================
  const getProductId = (product) => {
    return product?._id || product?.id;
  };


  // =========================
  // ADD TO WISHLIST
  // =========================
  const addToWishlist = (product) => {

    const productId =
      getProductId(product);

    if (!productId) {
      console.log(
        "Product ID not found"
      );
      return;
    }

    setWishlist((prevWishlist) => {

      const alreadyExists =
        prevWishlist.some(
          (item) =>
            getProductId(item) ===
            productId
        );

      if (alreadyExists) {
        return prevWishlist;
      }

      return [
        ...prevWishlist,
        product,
      ];
    });
  };


  // =========================
  // REMOVE FROM WISHLIST
  // =========================
  const removeFromWishlist = (
    productId
  ) => {

    setWishlist((prevWishlist) =>
      prevWishlist.filter(
        (item) =>
          getProductId(item) !==
          productId
      )
    );
  };


  // =========================
  // CHECK WISHLIST
  // =========================
  const isInWishlist = (
    productId
  ) => {

    return wishlist.some(
      (item) =>
        getProductId(item) ===
        productId
    );
  };


  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}


// =========================
// CUSTOM HOOK
// =========================
export function useWishlist() {

  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}

