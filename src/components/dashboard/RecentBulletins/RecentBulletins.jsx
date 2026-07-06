import Badge from "@/components/ui/Badge";
import Table from "@/components/ui/Table";

const columns = [
  {
    header: "Nombre",
    accessor: "name",
  },
  {
    header: "Fecha",
    accessor: "date",
  },
  {
    header: "Estado",
    accessor: "status",
    render: (row) => (
      <Badge
        variant={
          row.status === "Activo"
            ? "success"
            : "warning"
        }
      >
        {row.status}
      </Badge>
    ),
  },
];

function RecentBulletins({ data }) {
  return (
    <Table
      columns={columns}
      data={data}
      emptyMessage="No existen boletines registrados."
    />
  );
}

export default RecentBulletins;