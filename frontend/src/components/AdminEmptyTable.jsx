/**
 * Empty table placeholder for the admin pages.
 * Shows the planned columns until data comes from the database.
 * @param {object} props
 * @param {string} props.title heading of the panel
 * @param {string[]} props.columns column headings
 * @param {string} props.message text shown when there are no rows
 */
const AdminEmptyTable = ({ title, columns, message }) => {
  return (
    <section className="admin-panel">
      <h2>{title}</h2>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="admin-empty">
                {message}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminEmptyTable;
