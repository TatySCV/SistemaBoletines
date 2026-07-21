import BulletinActions from "./BulletinActions";

import {
  formatPosterDate,
  upper,
} from "@/utils/formatters";

function StatusBadge({ status }) {
  const current = upper(status);

  const styles = {
    "EXPULSION VIGENTE":
      "bg-red-100 text-red-700",

    "EXPULSION RECTIFICADA":
      "bg-yellow-100 text-yellow-700",

    "EXPULSION MATERIALIZADA":
      "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-3
        py-1
        text-xs
        font-bold
        ${
          styles[current] ??
          "bg-slate-100 text-slate-700"
        }
      `}
    >
      {current || "-"}
    </span>
  );
}

function BulletinRow({
  bulletin,
}) {
  return (
    <tr
      className="
      border-b
      last:border-b-0
      hover:bg-slate-50
      transition
      "
    >
      {/* FECHA */}

      <td className="px-5 py-4">
        {formatPosterDate(
          bulletin.bulletin_date
        )}
      </td>

      {/* NOMBRE */}

      <td className="px-5 py-4">
        <div className="font-semibold">
          {upper(
            `${bulletin.first_name ?? ""}
             ${bulletin.last_name ?? ""}`
          )}
        </div>

        <div className="text-xs text-slate-500 mt-1">
          {bulletin.document_number || "-"}
        </div>
      </td>

      {/* NACIONALIDAD */}

      <td className="px-5 py-4">
        {upper(
          bulletin.nationality
        )}
      </td>

      {/* ESTADO */}

      <td className="px-5 py-4">
        <StatusBadge
          status={bulletin.status}
        />
      </td>

      {/* RESOLUCIÓN */}

      <td className="px-5 py-4">
        {bulletin.resolution_number || "-"}
      </td>

      {/* ACCIONES */}

      <td className="px-5 py-4 text-center">
        <BulletinActions
          bulletin={bulletin}
        />
      </td>
    </tr>
  );
}

export default BulletinRow;