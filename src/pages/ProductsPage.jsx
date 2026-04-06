import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { AppContext } from "../context/AppContext";
import axiosInstance from "../api/axiosInstance";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { language, darkMode } = useContext(AppContext);

  useEffect(() => {
    axiosInstance
      .get("/products?limit=10")
      .then((res) => setProducts(res.data.products || []))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={darkMode ? "bg-gray-900 text-white p-8" : "bg-gray-50 p-8"}>
      <h1 className="text-3xl font-bold text-center mb-10">
        {language === "ar" ? "منتجاتنا" : "Our Products"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={
              darkMode
                ? "bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-700"
                : "bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border"
            }
          >
            <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mb-2">
              HOT
            </span>

            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

            <h3 className="font-semibold text-lg text-center h-12 overflow-hidden">
              {product.title}
            </h3>

            <div className="flex justify-center text-yellow-400 my-2">★★★★★</div>

            <p className="text-xl font-bold mb-4 text-center">${product.price}</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-blue-800 text-white w-full py-2 rounded-lg hover:bg-blue-900 transition"
              >
                {language === "ar" ? "أضف إلى السلة" : "Add to Cart"}
              </button>

              <Link
                to={`/product/${product.id}`}
                className="bg-blue-700 text-white w-full py-2 rounded-lg text-center hover:bg-blue-800"
              >
                {language === "ar" ? "عرض التفاصيل" : "View Details"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}