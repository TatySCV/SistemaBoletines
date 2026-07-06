import clsx from "clsx";

function Card({
  children,
  title,
  subtitle,
  padding = "md",
  className,
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-xl",
        "border border-slate-200",
        "bg-white",
        "shadow-sm",
        paddings[padding],
        className
      )}
    >
      {(title || subtitle) && (
        <div className="mb-5">
          {title && (
            <h2 className="text-lg font-semibold text-slate-800">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

export default Card;