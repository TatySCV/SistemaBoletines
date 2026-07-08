
import { upper } from "@/utils/formatters";
function PosterSection({
  title,
  children,
}) {

  return (

    <section
      className="
      overflow-hidden
      rounded-xl
      border
      "
    >


      {/* HEADER ROJO */}

      <div
        className="
        bg-red-600
        text-white
        px-5
        py-2
        font-black
        "
      >

        ⚠ {title}

      </div>



      {/* CONTENIDO */}

      <div
        className="
        p-4
        text-sm
        leading-relaxed
        "
      >

        {upper(children) || "-"}

      </div>


    </section>

  );

}


export default PosterSection;