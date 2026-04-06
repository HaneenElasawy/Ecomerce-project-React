import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { AppContext } from "../context/AppContext";

export default function CartPage() {
  const { darkMode } = useContext(AppContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div
        className={
          darkMode
            ? "p-8 text-center text-xl bg-gray-900 text-white min-h-[60vh] flex items-center justify-center"
            : "p-8 text-center text-xl min-h-[60vh] flex items-center justify-center"
        }
      >
        Cart is Empty
      </div>
    );
  }

  return (
    <div className={darkMode ? "p-8 bg-gray-900 text-white min-h-screen" : "p-8 min-h-screen bg-white"}>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={
              darkMode
                ? "flex items-center justify-between border-gray-700 bg-gray-800 p-6 rounded-xl shadow-lg border"
                : "flex items-center justify-between border p-6 rounded-xl shadow-sm bg-white"
            }
          >
            <div className="flex items-center gap-6">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg shadow-sm"
              />
              <div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className={
                    darkMode
                      ? "px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white transition"
                      : "px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black transition"
                  }
                >
                  -
                </button>

                <span className={darkMode ? "px-4 font-semibold bg-gray-800" : "px-4 font-semibold bg-white"}>
                  {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className={
                    darkMode
                      ? "px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white transition"
                      : "px-4 py-2 bg-gray-100 hover:bg-gray-200 text-black transition"
                  }
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={darkMode ? "mt-10 p-6 bg-gray-800 rounded-xl border border-gray-700" : "mt-10 p-6 bg-gray-50 rounded-xl"}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-medium">Total Price:</span>
          <span className="text-3xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
        </div>

        <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition shadow-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}