import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { AppContext } from "../context/AppContext";
import axiosInstance from "../api/axiosInstance";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { darkMode, language } = useContext(AppContext);

  useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Loading...</div>;
  }

  return (
    <div
      className={
        darkMode
          ? "container mx-auto p-10 flex flex-col md:flex-row gap-12 items-center bg-gray-900 text-white"
          : "container mx-auto p-10 flex flex-col md:flex-row gap-12 items-center"
      }
    >
      <div className="w-full md:w-1/2">
        <img
          src={product.images?.[0] || product.thumbnail}
          alt={product.title}
          className="w-full rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">{product.title}</h1>

        <p className="text-3xl font-bold text-green-700">${product.price}</p>

        <p
          className={
            darkMode
              ? "text-gray-300 leading-relaxed text-lg"
              : "text-gray-600 leading-relaxed text-lg"
          }
        >
          {product.description}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-800 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition"
          >
            {language === "ar" ? "أضف إلى السلة" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}