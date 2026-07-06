import { useRef } from "react";
import Button from "@/components/ui/Button";

function FileUpload({
  label,
  onChange,
  preview,
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="flex h-72 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">
        
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="h-full w-full object-cover rounded-xl"
          />
        ) : (
          <>
            <p className="mb-4 text-slate-500">
              No hay fotografía seleccionada
            </p>

            <Button onClick={handleClick}>
              Seleccionar fotografía
            </Button>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default FileUpload;