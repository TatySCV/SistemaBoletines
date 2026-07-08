import {
  FaClipboardList,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

import PosterIcon from "../PosterIcon";

import {
  upper,
  formatPosterDate,
} from "@/utils/formatters";


function ResolutionItem({
  icon,
  title,
  value,
}) {


  return (

    <div
      className="
      flex
      gap-3
      border-b
      pb-4
      "
    >


      <PosterIcon
        icon={icon}
      />


      <div>


        <p
          className="
          text-xs
          font-black
          text-[#001b4d]
          "
        >

          {title}

        </p>


        <p
          className="
          text-sm
          font-bold
          "
        >

          {upper(value)}

        </p>


      </div>


    </div>

  );

}




function PosterResolution({
  data,
}) {


  return (

    <section
      className="
      overflow-hidden
      rounded-xl
      border
      "
    >


      <div
        className="
        bg-[#001b4d]
        text-white
        px-5
        py-3
        font-black
        "
      >

        ⚖ RESOLUCIÓN DE EXPULSIÓN

      </div>



      <div
        className="
        p-5
        space-y-5
        "
      >


        <ResolutionItem
          icon={FaClipboardList}
          title="RESOLUCIÓN EXENTA N°"
          value={data.resolutionNumber}
        />


        <ResolutionItem
          icon={FaCalendarAlt}
          title="FECHA RESOLUCIÓN"
          value={
            formatPosterDate(
              data.resolutionDate
            )
          }
        />



        <ResolutionItem
          icon={FaBuilding}
          title="SERVICIO QUE DICTA"
          value={
            data.issuingService
          }
        />



        <ResolutionItem
          icon={FaCheckCircle}
          title="ESTADO"
          value={
            data.resolutionStatus
          }
        />


      </div>


    </section>

  );

}


export default PosterResolution;