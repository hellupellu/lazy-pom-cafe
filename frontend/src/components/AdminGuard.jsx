import { Navigate } from "react-router";
import { isAdminLoggedIn } from "../utils/adminAuth";

const AdminGuard = ({ children }) => {
  if (!isAdminLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default AdminGuard;
