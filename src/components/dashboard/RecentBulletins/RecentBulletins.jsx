const data = [
  {
    id: 1,
    name: "Juan Pérez",
    date: "05/07/2026",
  },
  {
    id: 2,
    name: "María Soto",
    date: "05/07/2026",
  },
  {
    id: 3,
    name: "Pedro López",
    date: "04/07/2026",
  },
];

function RecentBulletins() {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-semibold">
        Últimos boletines
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Nombre</th>
            <th className="text-left">Fecha</th>
          </tr>
        </thead>

        <tbody>
          {data.map((bulletin) => (
            <tr
              key={bulletin.id}
              className="border-b"
            >
              <td className="py-3">{bulletin.name}</td>

              <td>{bulletin.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentBulletins;