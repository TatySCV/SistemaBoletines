import Card from "@/components/ui/Card";

function Section({ title, subtitle, children }) {
  return (
    <Card>
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>

        {subtitle && (
          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </Card>
  );
}

export default Section;