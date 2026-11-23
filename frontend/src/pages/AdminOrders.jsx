// Erza - Admin orders (status changes will be added with the database)
import AdminEmptyTable from "../components/AdminEmptyTable";

const AdminOrders = () => {
  return (
    <AdminEmptyTable
      title="Orders"
      columns={["No.", "Order", "Pickup", "Total", "Status"]}
      message="No orders yet."
    />
  );
};

export default AdminOrders;
