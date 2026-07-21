import {
  Eye,
  Pencil,
  Download,
  Trash2,
} from "lucide-react";

function ActionButton({
  title,
  children,
  color = "text-slate-600",
  hover = "hover:bg-slate-100",
  onClick,
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        transition-all
        ${color}
        ${hover}
      `}
    >
      {children}
    </button>
  );
}

function BulletinActions({
  bulletin,
  onView,
  onEdit,
  onDownload,
  onDelete,
}) {
  function handleView() {
    onView?.(bulletin.id);
  }

  function handleEdit() {
    onEdit?.(bulletin.id);
  }

  function handleDownload() {
    onDownload?.(bulletin.id);
  }

  function handleDelete() {
    onDelete?.(bulletin.id);
  }

  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
      "
    >
      <ActionButton
        title="Ver boletín"
        onClick={handleView}
        color="text-sky-700"
        hover="hover:bg-sky-100"
      >
        <Eye size={18} />
      </ActionButton>

      <ActionButton
        title="Editar"
        onClick={handleEdit}
        color="text-amber-700"
        hover="hover:bg-amber-100"
      >
        <Pencil size={18} />
      </ActionButton>

      <ActionButton
        title="Descargar JPG"
        onClick={handleDownload}
        color="text-emerald-700"
        hover="hover:bg-emerald-100"
      >
        <Download size={18} />
      </ActionButton>

      <ActionButton
        title="Eliminar"
        onClick={handleDelete}
        color="text-red-700"
        hover="hover:bg-red-100"
      >
        <Trash2 size={18} />
      </ActionButton>
    </div>
  );
}

export default BulletinActions;