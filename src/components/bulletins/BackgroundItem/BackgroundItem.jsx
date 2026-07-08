import Input from "@/components/ui/Input";

function BackgroundItem({ index, onRemove }) {
  return (
    <div className="space-y-5 rounded-xl border border-slate-200 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Antecedente #{index + 1}
        </h3>

        <button
          type="button"
          onClick={onRemove}
          className="text-red-600 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Input
          name={`antecedentes.${index}.type`}
          label="Tipo"
        />

        <Input
          type="date"
          name={`antecedentes.${index}.date`}
          label="Fecha"
        />

        <Input
          className="col-span-2"
          name={`antecedentes.${index}.description`}
          label="Descripción"
        />
      </div>
    </div>
  );
}

export default BackgroundItem;