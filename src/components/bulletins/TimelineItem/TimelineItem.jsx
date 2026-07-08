import Input from "@/components/ui/Input";

function TimelineItem({
  index,
  onRemove,
}) {
  return (
    <div className="
      rounded-xl
      border
      border-slate-200
      p-5
      space-y-5
    ">

      <div className="flex justify-between">

        <h3 className="font-semibold">
          Evento #{index + 1}
        </h3>


        <button
          type="button"
          onClick={onRemove}
          className="text-red-600"
        >
          Eliminar
        </button>

      </div>


      <div className="grid grid-cols-2 gap-5">

        <Input
          type="date"
          name={`timeline.${index}.date`}
          label="Fecha"
        />


        <Input
          name={`timeline.${index}.description`}
          label="Descripción"
        />

      </div>

    </div>
  );
}


export default TimelineItem;