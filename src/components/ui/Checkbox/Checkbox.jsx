import { useFormContext } from "react-hook-form";

function Checkbox({
  name,
  label,
}) {
  const { register } = useFormContext();

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        {...register(name)}
        className="
          h-4
          w-4
          rounded
          border-slate-300
          text-[#003B70]
          focus:ring-[#003B70]
        "
      />

      <span className="font-medium text-slate-700">
        {label}
      </span>
    </label>
  );
}

export default Checkbox;