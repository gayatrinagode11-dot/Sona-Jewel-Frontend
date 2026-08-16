import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await api.post("/users/register", {
        name,
        email,
        password,
      });

      console.log("Register response:", response.data);

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.log("Registration failed:", error);

      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] px-4 py-10">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-[#8B4513] mb-2">
          Sona Jewel
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Create Your Account
        </p>

        <form onSubmit={handleRegister}>

          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <label className="block font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <label className="block font-medium mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg p-3 mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-lg font-semibold hover:bg-[#6b3410]"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-[#8B4513] font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}