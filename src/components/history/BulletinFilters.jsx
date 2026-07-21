import { Search } from "lucide-react";

function BulletinFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  nationality,
  onNationalityChange,
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-6
        shadow
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-3
        "
      >
        {/* BUSCADOR */}

        <div className="relative">
          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nombre o documento..."
            className="
              w-full
              rounded-lg
              border
              border-slate-300
              py-2
              pl-10
              pr-3
              outline-none
              transition
              focus:border-[#003B70]
              focus:ring-2
              focus:ring-[#003B70]/20
            "
          />
        </div>

        {/* ESTADO */}

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="
            rounded-lg
            border
            border-slate-300
            px-3
            py-2
            outline-none
            transition
            focus:border-[#003B70]
            focus:ring-2
            focus:ring-[#003B70]/20
          "
        >
          <option value="">Todos los estados</option>

          <option value="EXPULSION VIGENTE">
            Expulsión Vigente
          </option>

          <option value="EXPULSION RECTIFICADA">
            Expulsión Rectificada
          </option>

          <option value="EXPULSION MATERIALIZADA">
            Expulsión Materializada
          </option>
        </select>

        {/* NACIONALIDAD */}

        <input
          type="text"
          value={nationality}
          onChange={(e) =>
            onNationalityChange(e.target.value)
          }
          placeholder="Nacionalidad..."
          className="
            rounded-lg
            border
            border-slate-300
            px-3
            py-2
            outline-none
            transition
            focus:border-[#003B70]
            focus:ring-2
            focus:ring-[#003B70]/20
          "
        />
      </div>
    </div>
  );
}

export default BulletinFilters;