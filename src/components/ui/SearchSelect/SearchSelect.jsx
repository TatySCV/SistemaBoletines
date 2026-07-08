import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

function SearchSelect({
  name,
  label,
  options = [],
  placeholder = "Buscar...",
}) {
  const { setValue, watch } = useFormContext();

  const value = watch(name);

  const [search, setSearch] = useState(value || "");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return options;

    return options.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, options]);

  const handleSelect = (item) => {
    setSearch(item);
    setValue(name, item);
    setOpen(false);
  };

  return (
    <div className="relative flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        value={search}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        className="h-11 rounded-xl border border-slate-300 px-3 outline-none focus:border-[#003B70]"
      />

      {open && (
        <div className="absolute top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
          {filtered.length === 0 ? (
            <div className="p-3 text-sm text-slate-500">
              Sin resultados
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleSelect(item)}
                className="block w-full px-4 py-3 text-left hover:bg-slate-100"
              >
                {item}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchSelect;