// Erza - Admin weekly specials (add, edit and delete will be added with the database)
import AdminEmptyTable from "../components/AdminEmptyTable";

const AdminSpecials = () => {
  return (
    <AdminEmptyTable
      title="Weekly specials"
      columns={["Special", "Valid", "Price"]}
      message="No weekly specials yet."
    />
  );
};

export default AdminSpecials;
