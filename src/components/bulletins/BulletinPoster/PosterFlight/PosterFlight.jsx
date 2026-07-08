import { upper,
  formatPosterDate,
} from "@/utils/formatters";

function FlightItem({
  title,
  value,
}) {

  return (

    <div
      className="
      flex-1
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
        "
      >

        {upper(value) || "-"}

      </p>


    </div>

  );

}


function formatDateTime(value) {


  if (!value) {
    return "-";
  }


  const date =
    new Date(value);



  const hour =
    date.toLocaleTimeString(
      "es-CL",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );



  return (

    `${formatPosterDate(value)}
     ${hour}`

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
        font-black
        "
      >

        ✈ INFORMACIÓN DEL VUELO

      </div>




      {/* BODY */}

      <div
        className="
        flex
        bg-white
        p-4
        "
      >


        <FlightItem
          title="Aerolínea"
          value={data.airline}
        />


        <FlightItem
          title="Número de vuelo"
          value={data.flightNumber}
        />


        <FlightItem
          title="Origen"
          value={data.origin}
        />


        <FlightItem
          title="Destino"
          value={data.destination}
        />


        <FlightItem
          title="Salida"
          value={
            formatDateTime(
              data.departure
            )
          }
        />


        <FlightItem
          title="Llegada"
          value={
            formatDateTime(
              data.arrival
            )
          }
        />


      </div>


    </section>

  );

}



export default PosterFlight;