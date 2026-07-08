import logoPDI from "@/assets/icons/icon.png";
import {
  formatPosterDate,
} from "@/utils/formatters";


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


      {/* IZQUIERDA */}

      <div
        className="
        flex
        items-center
        gap-6
        "
      >


        <img
          src={logoPDI}
          className="
          w-32
          object-contain
          "
        />



        <div
          className="
          h-16
          w-px
          bg-white
          "
        />



        <div>


          <h1
            className="
            text-3xl
            font-black
            "
          >

            BOLETÍN INFORMATIVO

          </h1>



          <p
            className="
            text-xl
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
        border-2
        border-yellow-400
        rounded-xl
        px-5
        py-3
        text-center
        "
      >


        <p
          className="
          text-xs
          font-black
          "
        >

          FECHA DEL BOLETÍN

        </p>


        <p
          className="
          text-yellow-400
          text-xl
          font-black
          "
        >

          {formatPosterDate(date)}

        </p>


      </div>


    </header>

  );

}


export default PosterHeader;