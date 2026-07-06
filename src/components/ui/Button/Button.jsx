import clsx from "clsx";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
}) {
  const variants = {
    primary:
      "bg-[#003B70] text-white hover:bg-[#002E59] focus:ring-[#003B70]",

    secondary:
      "bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    success:
      "bg-green-600 text-white hover:bg-green-700",

    ghost:
      "bg-transparent text-[#003B70] hover:bg-slate-100",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",

    md: "h-11 px-5",

    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl",
        "font-medium",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        fullWidth && "w-full"
      )}
    >
      {loading ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
          />

          Cargando...
        </>
      ) : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
    </button>
  );
}

export default Button;