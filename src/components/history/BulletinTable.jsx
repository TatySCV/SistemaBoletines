import BulletinRow from "./BulletinRow";

function BulletinTable({
  bulletins = [],
  loading,
  onView,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center shadow">
        <p className="text-slate-500">
          Cargando boletines...
        </p>
      </div>
    );
  }

  if (bulletins.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center shadow">
        <h3 className="text-xl font-semibold">
          No existen boletines
        </h3>

        <p className="mt-2 text-slate-500">
          Aún no se han registrado boletines.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-[#003B70] text-white">
          <tr>
            <th className="px-5 py-4 text-left">
              Fecha
            </th>

            <th className="px-5 py-4 text-left">
              Nombre
            </th>

            <th className="px-5 py-4 text-left">
              Nacionalidad
            </th>

            <th className="px-5 py-4 text-left">
              Estado
            </th>

            <th className="px-5 py-4 text-left">
              Resolución
            </th>

            <th className="px-5 py-4 text-center">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {bulletins.map((bulletin) => (
            <BulletinRow
              key={bulletin.id}
              bulletin={bulletin}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BulletinTable;