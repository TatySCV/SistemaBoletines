function Table({
  columns = [],
  data = [],
  emptyMessage = "No existen registros.",
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="min-w-full">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-700"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr
                key={row.id}
                className="transition hover:bg-slate-50"
              >
                {columns.map((column) => (
                  <td
                    key={column.header}
                    className="border-b border-slate-100 px-6 py-4 text-sm text-slate-700"
                  >
                    {column.render
                      ? column.render(row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="py-8 text-center text-slate-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;