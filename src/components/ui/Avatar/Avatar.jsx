function Avatar({
  src,
  alt,
  size = "md",
}) {
  const sizes = {
    sm: "h-8 w-8",

    md: "h-10 w-10",

    lg: "h-14 w-14",

    xl: "h-20 w-20",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`
        rounded-full
        object-cover
        border
        border-slate-300
        ${sizes[size]}
      `}
    />
  );
}

export default Avatar;