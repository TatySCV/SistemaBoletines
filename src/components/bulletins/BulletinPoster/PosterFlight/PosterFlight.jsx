import { upper, formatPosterDateTime } from "@/utils/formatters";

import { FaPlane } from "react-icons/fa";

function FlightItem({ title, value }) {
  return (
    <div
      className="
      border-r
      last:border-r-0
      px-3
      "
    >
      <p
        className="
        text-[11px]
        font-black
        text-[#001b4d]
        uppercase
        "
      >
        {title}
      </p>

      <p
        className="
        mt-2
        text-xs
        leading-relaxed
        whitespace-pre-line
        "
      >
        {upper(value)}
      </p>
    </div>
  );
}

function PosterFlight({ data }) {
  return (
    <section
      className="
      overflow-hidden
      rounded-xl
      border
      border-yellow-400
      "
    >
      {/* HEADER */}

      <div
        className="
 bg-[#001b4d]
 text-white
 px-5
 py-3
 flex
 items-center
 gap-3
 font-black
 "
      >
        <FaPlane />
        INFORMACIÓN DEL VUELO
      </div>

      {/* BODY */}

      <div
        className="
        grid
        grid-cols-[1fr_1fr_2fr_2fr_1fr_1fr]
        bg-white
        p-4
        "
      >
        <FlightItem title="Aerolínea" value={data.airline} />

        <FlightItem title="Número de vuelo" value={data.flightNumber} />

        <FlightItem title="Origen" value={data.origin} />

        <FlightItem title="Destino" value={data.destination} />

        <FlightItem
          title="Salida"
          value={formatPosterDateTime(data.departure)}
        />

        <FlightItem
          title="Llegada"
          value={formatPosterDateTime(data.arrival)}
        />
      </div>
    </section>
  );
}

export default PosterFlight;
