import { upper } from "@/utils/formatters";


function PosterStatus({
  status,
}) {


  const text =
    status ||
    "EXPULSIÓN VIGENTE";



  return (

    <div
      className="
      bg-red-600
      rounded-xl
      px-6
      py-4
      flex
      items-center
      gap-3
      text-white
      "
    >


      <span
        className="
        text-3xl
        font-black
        "
      >

        ⚠

      </span>



      <p
        className="
        text-3xl
        font-black
        "
      >

        {
          upper(text)
        }

      </p>


    </div>

  );

}


export default PosterStatus;