import Input from "@/components/ui/Input";

function ExpulsionItem({ index, onRemove }) {
  return (
    <div className="rounded-xl border border-slate-200 p-5 space-y-5">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold">
          Expulsión #{index + 1}
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
          name={`expulsions.${index}.type`}
          label="Tipo"
        />

        <Input
          type="date"
          name={`expulsions.${index}.date`}
          label="Fecha"
        />

        <Input
          name={`expulsions.${index}.decree`}
          label="Decreto"
        />

        <Input
          name={`expulsions.${index}.reason`}
          label="Motivo"
        />

      </div>

    </div>
  );
}

export default ExpulsionItem;