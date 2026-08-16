import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });

      console.log("Login response:", response.data);

      // Backend कडून मिळालेला user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // JWT token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Login status
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      navigate("/");
    } catch (error) {
      console.log("Login failed:", error);

      alert(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <div className="bg-[#FFF8F0] min-h-[80vh] flex items-center justify-center px-4 py-12">

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Login to continue shopping
        </p>

        <form onSubmit={handleLogin}>

          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-4"
            required
          />

          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-lg font-semibold hover:bg-[#6b3410]"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-700">
          New here?{" "}

          <Link
            to="/register"
            className="text-[#8B4513] font-semibold"
          >
            Create an Account
          </Link>
        </p>

      </div>

    </div>
  );
}