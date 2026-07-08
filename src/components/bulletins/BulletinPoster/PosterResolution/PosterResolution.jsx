import {
  upper,
  formatPosterDate,
} from "@/utils/formatters";

function ResolutionItem({
  title,
  value,
}) {


  return (

    <div className="border-b pb-3">


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
        font-medium
        "
      >

        {upper(value) || "-"}

      </p>


    </div>

  );

}




function PosterResolution({ data }) {


  return (

    <section
      className="
      rounded-xl
      overflow-hidden
      border
      "
    >


      <div
        className="
        bg-[#001b4d]
        text-white
        font-black
        px-5
        py-3
        "
      >

        RESOLUCIÓN DE EXPULSIÓN

      </div>



      <div className="p-5 space-y-4">


        <ResolutionItem
          title="RESOLUCIÓN EXENTA N°"
          value={
            data.resolutionRectified
              ? `${data.resolutionNumber} (RECTIFICADA)`
              : data.resolutionNumber
          }
        />



        <ResolutionItem
  title="FECHA RESOLUCIÓN"
  value={
    formatPosterDate(
      data.resolutionDate
    )
  }
/>


        <ResolutionItem
          title="SERVICIO QUE DICTA"
          value={data.issuingService}
        />



        <ResolutionItem
          title="ESTADO"
          value={data.resolutionStatus}
        />


      </div>


    </section>

  );

}


export default PosterResolution;