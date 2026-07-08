import { useEffect, useState } from "react";


function PosterPhoto({
  photo,
}) {


  const [preview, setPreview] =
    useState(null);



  useEffect(() => {


    if (!photo) {

      setPreview(null);
      return;

    }



    // cuando viene desde input file
    if (photo instanceof File) {


      const url =
        URL.createObjectURL(
          photo
        );


      setPreview(url);



      return () =>
        URL.revokeObjectURL(
          url
        );

    }



    // cuando ya es URL
    setPreview(photo);


  }, [photo]);




  return (

    <div
      className="
      h-full
      overflow-hidden
      rounded-xl
      border
      flex
      flex-col
      "
    >


      <div
        className="
        flex-1
        bg-slate-200
        "
      >

        {
          preview ? (

            <img
              src={preview}
              alt="Fotografía"
              className="
              h-full
              w-full
              object-cover
              object-top
              "
            />

          ) : (

            <div
              className="
              h-full
              flex
              items-center
              justify-center
              text-slate-400
              "
            >

              Fotografía


            </div>

          )

        }


      </div>



      <div
        className="
        bg-[#001b4d]
        text-white
        text-center
        text-sm
        font-black
        py-3
        px-2
        "
      >

        SUJETO A EXPULSIÓN DEL TERRITORIO NACIONAL


      </div>


    </div>

  );

}


export default PosterPhoto;