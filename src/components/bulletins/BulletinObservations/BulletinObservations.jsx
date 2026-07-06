import Card from "@/components/ui/Card";

function BulletinObservations() {
  return (
    <Card
      title="Observaciones"
      subtitle="Información adicional."
    >
      <textarea
        rows={5}
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-[#003B70]"
        placeholder="Ingrese observaciones..."
      />
    </Card>
  );
}

export default BulletinObservations;