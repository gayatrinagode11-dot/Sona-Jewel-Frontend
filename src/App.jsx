import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/productDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import Collections from "./pages/Collections";
import OrderDetails from "./pages/OrderDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/rings"
          element={<Products />}
        />

        <Route
          path="/necklace"
          element={<Products />}
        />

        <Route
          path="/earrings"
          element={<Products />}
        />

        <Route
          path="/sale"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route path="/cart" element={<Cart/>} />

        <Route path="/wishlist" element={<Wishlist />} />

        ```jsx
<Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-orders"
  element={
    <ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>
  }
/>

<Route
  path="/order/:orderId"
  element={
    <ProtectedRoute>
      <OrderDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/order-success"
  element={<OrderSuccess/>}
/>
      
<Route path="/collections" element={<Collections/>} />

<Route
  path="/order/:orderId"
  element={<OrderDetails/>}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;