import clsx from "clsx";
import { useFormContext } from "react-hook-form";

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  leftIcon,
  rightIcon,
  className,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;

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

      <div
        className={clsx(
          "flex h-11 items-center rounded-xl border bg-white px-3 transition-all",
          error
            ? "border-red-500"
            : "border-slate-300 focus-within:border-[#003B70]",
          disabled && "bg-slate-100"
        )}
      >
        {leftIcon && (
          <span className="mr-2 text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className="w-full bg-transparent outline-none"
          {...register(name)}
        />

        {rightIcon && (
          <span className="ml-2 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <span className="text-sm text-red-600">
          {error}
        </span>
      ) : (
        helperText && (
          <span className="text-sm text-slate-500">
            {helperText}
          </span>
        )
      )}
    </div>
  );
}

export default Input;