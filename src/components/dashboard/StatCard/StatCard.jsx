import Card from "@/components/ui/Card";

function StatCard({ title, value }) {
  return (
    <Card>
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-slate-800">
        {value}
      </h2>
    </Card>
  );
}

export default StatCard;