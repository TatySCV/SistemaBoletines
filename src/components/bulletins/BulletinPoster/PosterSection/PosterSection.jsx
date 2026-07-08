import {
  FaExclamationTriangle,
} from "react-icons/fa";


import {
  upper,
} from "@/utils/formatters";


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


      <div
        className="
        bg-red-600
        text-white
        px-5
        py-3
        flex
        gap-3
        items-center
        font-black
        "
      >


        <FaExclamationTriangle />


        {upper(title)}


      </div>




      <div
        className="
        p-5
        text-sm
        leading-relaxed
        "
      >


        {upper(children)}


      </div>


    </section>

  );

}


export default PosterSection;