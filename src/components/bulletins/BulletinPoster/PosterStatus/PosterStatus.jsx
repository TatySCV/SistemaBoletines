import { upper } from "@/utils/formatters";

function PosterStatus({ status }) {

  return (

    <div
      className="
      bg-red-600
      text-white
      rounded-lg
      px-5
      py-4
      text-2xl
      font-black
      "
    >

      ⚠ {upper(status) || "EXPULSIÓN VIGENTE"}

    </div>

  );

}


export default PosterStatus;