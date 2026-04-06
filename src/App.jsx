import React, { Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";

const HomePage = React.lazy(() => import("./pages/HomePage.jsx"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage.jsx"));
const ProductDetailsPage = React.lazy(() => import("./pages/ProductDetailsPage.jsx"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage.jsx"));
const LoginPage = React.lazy(() => import("./pages/LoginPage.jsx"));
const ContactPage = React.lazy(() => import("./pages/ContactPage.jsx"));
const CartPage = React.lazy(() => import("./pages/CartPage.jsx"));


export default function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "flex flex-col min-h-screen bg-gray-900 text-white"
            : "flex flex-col min-h-screen bg-white text-black"
        }
      >
        <Header />

        <Suspense
          fallback={
            <div className="text-center py-20 text-2xl">Loading...</div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
}