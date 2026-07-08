import {
  upper,
  formatPosterDate,
} from "@/utils/formatters";

function PosterTimeline({
  items = [],
}) {


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

        LÍNEA DE TIEMPO RELEVANTE

      </div>




      <div className="p-5 space-y-5">


        {
          items.length === 0 && (

            <p className="text-sm text-slate-400">

              Sin eventos

            </p>

          )
        }



        {
          items.map((item, index) => (

            <div
              key={index}
              className="
              flex
              gap-4
              "
            >


              {/* PUNTO AZUL */}

              <div
                className="
                flex
                flex-col
                items-center
                "
              >

                <div
                  className="
                  h-3
                  w-3
                  rounded-full
                  bg-blue-600
                  "
                />


                <div
                  className="
                  flex-1
                  w-px
                  bg-blue-600
                  "
                />

              </div>



              {/* TEXTO */}

              <div>


                <p
                  className="
                  text-xs
                  font-black
                  text-blue-700
                  "
                >

                {
 formatPosterDate(
   item.date
 ) || "-"
}

                </p>


                <p className="text-xs">

                  {upper(item.description) || "-"}

                </p>


              </div>


            </div>

          ))
        }


      </div>


    </section>

  );

}


export default PosterTimeline;