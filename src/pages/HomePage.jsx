import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function HomePage() {
  const { language, darkMode } = useContext(AppContext);

  return (
    <section
      className={
        darkMode
          ? "bg-gray-900 text-white py-24 px-6 text-center"
          : "bg-blue-900 text-white py-24 px-6 text-center"
      }
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        {language === "ar" ? "مرحبًا بك في متجرنا" : "Welcome to MyStore"}
      </h1>

      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
        {language === "ar"
          ? "اكتشف أحدث المنتجات، وتصفح التفاصيل، وأضف مفضلاتك إلى السلة."
          : "Discover the latest products, explore details, and add your favorites to cart."}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/products"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          {language === "ar" ? "تسوق الآن" : "Shop Now"}
        </Link>

        <Link
          to="/cart"
          className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition"
        >
          {language === "ar" ? "عرض السلة" : "View Cart"}
        </Link>
      </div>
    </section>
  );
}