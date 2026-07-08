import { upper, formatGender, formatPosterDate } from "@/utils/formatters";

import {
  FaUser,
  FaGlobeAmericas,
  FaCalendarAlt,
  FaIdCard,
  FaVenusMars,
} from "react-icons/fa";

import PosterIcon from "../PosterIcon";

function DataItem({ icon, label, value }) {
  return (
    <div
      className="
      flex
      gap-3
      border-b
      border-slate-300
      pb-3
      "
    >
      {icon && <PosterIcon icon={icon} />}

      <div>
        <p
          className="
          text-sm
          font-black
          text-[#001b4d]
          "
        >
          {label}
        </p>

        <p
          className="
          text-lg
          font-bold
          "
        >
          {upper(value)}
        </p>
      </div>
    </div>
  );
}
function PosterPersonalData({ data }) {
  return (
    <section
      className="
      rounded-xl
      overflow-hidden
      border
      bg-white
      "
    >
      {/* HEADER */}

      <div
        className="
        bg-[#001b4d]
        text-white
        px-5
        py-3
        font-black
        "
      >
        DATOS PERSONALES
      </div>

      {/* BODY */}

      <div
        className="
        grid
        grid-cols-2
        gap-5
        p-5
        "
      >
        <DataItem icon={FaUser} label="NOMBRES" value={data.firstName} />

        <DataItem icon={FaUser} label="APELLIDOS" value={data.lastName} />

        <DataItem
          icon={FaGlobeAmericas}
          label="NACIONALIDAD"
          value={data.nationality}
        />

        <DataItem
          icon={FaCalendarAlt}
          label="FECHA NACIMIENTO"
          value={formatPosterDate(data.birthDate)}
        />

        <DataItem
          icon={FaIdCard}
          label="TIPO DOCUMENTO"
          value={data.documentType}
        />

        <DataItem
          icon={FaIdCard}
          label="NÚMERO DOCUMENTO"
          value={data.documentNumber}
        />

        <DataItem
          icon={FaVenusMars}
          label="GÉNERO"
          value={formatGender(data.gender)}
        />
      </div>
    </section>
  );
}

export default PosterPersonalData;
