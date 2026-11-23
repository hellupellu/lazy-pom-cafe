import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import AdminGuard from "./components/AdminGuard";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminSpecials from "./pages/AdminSpecials";

const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route
        path="/shop"
        element={
          <PublicLayout>
            <h1>Shop</h1>
          </PublicLayout>
        }
      />

      <Route
        path="/cart"
        element={
          <PublicLayout>
            <h1>Cart</h1>
          </PublicLayout>
        }
      />

      <Route
        path="/login"
        element={
          <PublicLayout>
            <h1>Login</h1>
          </PublicLayout>
        }
      />

      <Route
        path="/register"
        element={
          <PublicLayout>
            <h1>Register</h1>
          </PublicLayout>
        }
      />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <AdminGuard>
            <Admin />
          </AdminGuard>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="specials" element={<AdminSpecials />} />
      </Route>
    </Routes>
  );
}

export default App;
