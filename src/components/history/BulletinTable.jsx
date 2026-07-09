import { formatPosterDate } from "@/utils/formatters";

function BulletinTable({ bulletins = [] }) {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      border
      bg-white
      "
    >
      <table
        className="
        w-full
        text-left
        "
      >
        <thead
          className="
          bg-slate-100
          text-sm
          text-slate-600
          "
        >
          <tr>
            <th className="p-4">Fecha</th>

            <th className="p-4">Nombre</th>

            <th className="p-4">Tipo de Documento</th>

            <th className="p-4">Documento</th>

            <th className="p-4">Nacionalidad</th>

            <th className="p-4">Estado</th>

            <th className="p-4">Acción</th>
          </tr>
        </thead>

        <tbody>
          {bulletins.map((item) => (
            <tr
              key={item.id}
              className="
                  border-t
                  "
            >
              <td className="p-4">{formatPosterDate(item.bulletin_date)}</td>

              <td className="p-4 font-semibold">
                {item.first_name} {item.last_name}
              </td>

              <td className="p-4">{item.document_type}</td>

              <td className="p-4">{item.document_number}</td>

              <td className="p-4">{item.nationality}</td>

              <td className="p-4">{item.status}</td>

              <td className="p-4">
                <button
                  className="
                      rounded-lg
                      bg-[#003B70]
                      px-3
                      py-2
                      text-white
                      "
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BulletinTable;
