import clsx from "clsx";

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Seleccione...",
  error,
  required = false,
  disabled = false,
  className,
}) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-slate-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-600">*</span>
          )}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          "h-11 rounded-xl border bg-white px-3 outline-none transition-all",
          error
            ? "border-red-500"
            : "border-slate-300 focus:border-[#003B70]",
          disabled && "bg-slate-100"
        )}
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <span className="text-sm text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default Select;