import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";

function Select({
  label,
  name,
  options = [],
  placeholder = "Seleccione...",
  required = false,
  disabled = false,
  className,
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;

  const parseValue = (value) => {
    if (value === "true") return true;
    if (value === "false") return false;

    return value;
  };

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

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            id={name}
            value={field.value ?? ""}
            disabled={disabled}
            onChange={(e) =>
              field.onChange(parseValue(e.target.value))
            }
            className={clsx(
              "h-11 rounded-xl border bg-white px-3 outline-none transition-all",
              error
                ? "border-red-500"
                : "border-slate-300 focus:border-[#003B70]"
            )}
          >
            <option value="">
              {placeholder}
            </option>

            {options.map((option) => (
              <option
                key={String(option.value)}
                value={String(option.value)}
              >
                {option.label}
              </option>
            ))}
          </select>
        )}
      />

      {error && (
        <span className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}

export default Select;