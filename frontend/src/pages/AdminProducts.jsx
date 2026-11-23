// Erza - Admin products (add, edit and delete will be added with the database)
import AdminEmptyTable from "../components/AdminEmptyTable";

const AdminProducts = () => {
  return (
    <AdminEmptyTable
      title="Products"
      columns={["Product", "Category", "Price", "Diets"]}
      message="No products yet."
    />
  );
};

export default AdminProducts;
