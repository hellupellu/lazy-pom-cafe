// Erza - Admin dashboard (summary cards, numbers come from the database later)
import { Link } from "react-router";

const AdminDashboard = () => {
  return (
    <>
      <div className="admin-cards">
        <Link to="/admin/orders" className="admin-card">
          <span>Pending Orders</span>
          <strong>–</strong>
        </Link>

        <Link to="/admin/orders" className="admin-card">
          <span>Ready for Pickup</span>
          <strong>–</strong>
        </Link>

        <Link to="/admin/products" className="admin-card">
          <span>Active Products</span>
          <strong>–</strong>
        </Link>
      </div>

      <div className="admin-panel">
        <h2>Dashboard Overview</h2>
        <p className="admin-description">
          päivittyy sit kun kun saadaan tietokanta ja backend toimimaan, nyt on
          vaan tyhjä dashboard
        </p>
      </div>
    </>
  );
};

export default AdminDashboard;
