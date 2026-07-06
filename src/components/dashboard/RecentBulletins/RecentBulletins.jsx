import Badge from "@/components/ui/Badge";

const data = [
  {
    id: 1,
    name: "Juan Pérez",
    date: "05/07/2026",
    status: "Activo",
  },
  {
    id: 2,
    name: "María Soto",
    date: "05/07/2026",
    status: "Pendiente",
  },
  {
    id: 3,
    name: "Pedro López",
    date: "04/07/2026",
    status: "Activo",
  },
];

function RecentBulletins() {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-slate-200">
          <th className="py-3 text-left">Nombre</th>
          <th className="text-left">Fecha</th>
          <th className="text-left">Estado</th>
        </tr>
      </thead>

      <tbody>
        {data.map((bulletin) => (
          <tr
            key={bulletin.id}
            className="border-b border-slate-100"
          >
            <td className="py-4">{bulletin.name}</td>

            <td>{bulletin.date}</td>

            <td>
              <Badge
                variant={
                  bulletin.status === "Activo"
                    ? "success"
                    : "warning"
                }
              >
                {bulletin.status}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecentBulletins;