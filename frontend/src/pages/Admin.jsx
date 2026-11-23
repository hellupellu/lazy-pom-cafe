// Erza - Admin sivu (layout: sidebar + content)
import { NavLink, Outlet, useNavigate, Link } from "react-router";
import { logoutAdmin } from "../utils/adminAuth";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login");
  };

  return (
    <div className="admin">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <Link to="/" className="admin-logo-link">
            <img
              src="/lazypomlogo.png"
              alt="Lazy Pom Cafe"
              className="admin-logo"
            />
          </Link>
        </div>

        <NavLink to="/admin" end className="admin-link">
          Dashboard
        </NavLink>
        <NavLink to="/admin/products" className="admin-link">
          Products
        </NavLink>
        <NavLink to="/admin/orders" className="admin-link">
          Orders
        </NavLink>
        <NavLink to="/admin/specials" className="admin-link">
          Weekly specials
        </NavLink>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <h1>Dashboard</h1>
          <div className="admin-user">
            <span>admin</span>
            <button
              type="button"
              className="admin-button secondary"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
