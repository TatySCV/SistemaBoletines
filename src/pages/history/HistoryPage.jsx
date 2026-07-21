import BulletinHistory from "@/components/history";

function HistoryPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Historial de Boletines
        </h1>

        <p className="text-slate-500 mt-2">
          Consulta, administra y descarga los boletines registrados.
        </p>
      </div>

      <BulletinHistory />

    </div>
  );
}

export default HistoryPage;