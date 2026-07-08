import { formatPosterDate } from "@/utils/formatters";

function PosterHeader({ date }) {
  return (
    <header
      className="
      h-28
      bg-[#001b4d]
      text-white
      flex
      items-center
      justify-between
      px-8
      "
    >

      {/* LOGO */}

      <div className="flex items-center gap-5">

        <div>

          <h1
            className="
            text-5xl
            font-black
            text-yellow-400
            leading-none
            "
          >
            PDI
          </h1>

          <p className="font-bold text-sm">
            JENAMIG
          </p>

        </div>


        <div className="h-16 w-px bg-white" />


        <div>

          <h2
            className="
            text-2xl
            font-black
            "
          >
            BOLETÍN INFORMATIVO
          </h2>

          <p
            className="
            text-yellow-400
            font-black
            "
          >
            DE EXTRANJEROS EXPULSADOS
          </p>

        </div>


      </div>


      {/* FECHA */}

      <div
        className="
        border
        border-yellow-400
        rounded-xl
        px-5
        py-3
        text-center
        "
      >

        <p className="text-xs font-bold">
          FECHA DEL BOLETÍN
        </p>

        <p
          className="
          text-yellow-400
          text-xl
          font-black
          "
        >
{formatPosterDate(date)}        </p>

      </div>


    </header>
  );
}

export default PosterHeader;