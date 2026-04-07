import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { darkMode } = useContext(AppContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setServerError("");

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      localStorage.setItem("token", "demo-token");
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: formData.username,
        })
      );

      navigate("/products");
    } catch  {
      setServerError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={
        darkMode
          ? "min-h-[80vh] flex items-center justify-center bg-gray-900 p-6"
          : "min-h-[80vh] flex items-center justify-center bg-gray-50 p-6"
      }
    >
      <div
        className={
          darkMode
            ? "w-full max-w-md bg-gray-800 text-white rounded-2xl shadow p-8"
            : "w-full max-w-md bg-white rounded-2xl shadow p-8"
        }
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {serverError && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
            {serverError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-5 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-400 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}