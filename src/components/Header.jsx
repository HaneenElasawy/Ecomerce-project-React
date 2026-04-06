import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { language, setLanguage, darkMode, toggleTheme } = useContext(AppContext);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={
        darkMode
          ? "border-b bg-gray-800 text-white"
          : "border-b bg-white text-black"
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">MyStore</h1>

        <nav className="flex items-center gap-6 flex-wrap">
          <Link to="/" className="hover:text-blue-700">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>

          <Link to="/products" className="hover:text-blue-700">
            {language === "ar" ? "المنتجات" : "Products"}
          </Link>

          <Link to="/contact" className="hover:text-blue-700">
            {language === "ar" ? "اتصل بنا" : "Contact"}
          </Link>

          <Link to="/register" className="hover:text-blue-700">
            {language === "ar" ? "تسجيل" : "Register"}
          </Link>

          <Link to="/login" className="hover:text-blue-700">
            {language === "ar" ? "دخول" : "Login"}
          </Link>

          <Link to="/cart" className="relative hover:text-blue-700">
            {language === "ar" ? "السلة" : "Cart"} 🛒
            {totalCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                {totalCount}
              </span>
            )}
          </Link>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1 text-black"
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>

          <button
            onClick={toggleTheme}
            className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}