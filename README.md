# 🛒 MyStore - Modern Ecommerce Application

A feature-rich, high-performance e-commerce web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project demonstrates modern front-end development practices, including state management, professional routing, and elegant UI Design.

---

## 🌟 Key Features

- **🛍️ Complete Product Catalog:** Browse a wide range of products fetched from the [DummyJSON API](https://dummyjson.com).
- **🌗 Full-Screen Dark Mode:** A seamless, sleek dark theme that applies across all pages (Home, Products, Login, Register, Contact, and Cart).
- **🌍 Multi-language Support:** Support for both English (LTR) and Arabic (RTL) with dynamic layout switching.
- **🛒 Advanced Shopping Cart:** Add items, manage quantities, and see real-time price updates powered by Redux Toolkit.
- **🛡️ Protected Routes:** Secure user areas (like the Cart page) that require authentication to access.
- **⚡ Performance Optimized:** Implements lazy loading and code splitting for faster initial page loads.
- **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.

---

## 🚀 Tech Stack

- **Frontend:** [React (v19)](https://react.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Theme/Config:** Context API
- **Routing:** [React Router Dom (v7)](https://reactrouter.com/)
- **API Handling:** [Axios](https://axios-http.com/)
- **Styling:** [Tailwind CSS (v4)](https://tailwindcss.com/)
- **Form Management:** [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)
- **Build Tool:** [Vite](https://vitejs.dev/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd Ecommerce-react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add the following:
    ```env
    VITE_API_BASE_URL=https://dummyjson.com
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

---

## 🏗️ Project Structure

- `src/api/`: Axios instance configuration and interceptors.
- `src/components/`: Reusable UI components like Header, Footer, and ProtectedRoute.
- `src/context/`: Global AppContext for theme and language management.
- `src/pages/`: Main page components (Home, Products, Login, etc.).
- `src/store/`: Redux Toolkit store and slices (Cart management).
- `src/App.jsx`: Main routing and layout wrapper.
- `src/main.jsx`: Application entry point.

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR. |
| `npm run build` | Bundles the app for production. |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run preview` | Locally previews the production build. |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
