import clsx from "clsx";

function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  required = false,
  rows = 5,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </label>
      )}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-xl border p-3 text-sm outline-none transition-all",
          error
            ? "border-red-500 focus:border-red-500"
            : "border-slate-300 focus:border-[#003B70]"
        )}
      />

      {error ? (
        <span className="text-sm text-red-600">{error}</span>
      ) : (
        helperText && (
          <span className="text-sm text-slate-500">{helperText}</span>
        )
      )}
    </div>
  );
}

export default Textarea;