import {
  Download,
  Pencil,
  X,
  FileText,
} from "lucide-react";

function IconButton({
  title,
  onClick,
  children,
  color = "",
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        transition-colors
        hover:bg-slate-100
        ${color}
      `}
    >
      {children}
    </button>
  );
}

function PreviewHeader({
  bulletin,
  onClose,
  onDownload,
  onEdit,
}) {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        bg-white
        px-6
        py-4
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-[#003B70]
            text-white
          "
        >
          <FileText size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Vista previa del boletín
          </h2>

          <p className="text-sm text-slate-500">
            {bulletin.first_name} {bulletin.last_name}
          </p>

          <p className="text-xs text-slate-400">
            Documento: {bulletin.document_number || "-"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IconButton
          title="Descargar JPG"
          onClick={onDownload}
          color="text-emerald-600"
        >
          <Download size={20} />
        </IconButton>

        <IconButton
          title="Editar boletín"
          onClick={onEdit}
          color="text-amber-600"
        >
          <Pencil size={20} />
        </IconButton>

        <IconButton
          title="Cerrar"
          onClick={onClose}
          color="text-slate-600"
        >
          <X size={20} />
        </IconButton>
      </div>
    </header>
  );
}

export default PreviewHeader;