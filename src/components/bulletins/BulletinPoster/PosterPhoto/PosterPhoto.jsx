function PosterPhoto({ photo }) {


  const image =
    photo instanceof File
      ? URL.createObjectURL(photo)
      : null;


  return (

    <div
      className="
      rounded-xl
      border
      overflow-hidden
      bg-white
      "
    >

      <div
        className="
        h-[360px]
        bg-slate-200
        flex
        items-center
        justify-center
        "
      >

        {
          image ? (

            <img
              src={image}
              className="
              h-full
              w-full
              object-cover
              "
            />

          ) : (

            <span className="text-slate-400">

              Fotografía

            </span>

          )
        }

      </div>


      <div
        className="
        bg-[#001b4d]
        text-white
        text-xs
        text-center
        font-black
        p-3
        "
      >

        SUJETO A EXPULSIÓN DEL TERRITORIO NACIONAL

      </div>


    </div>

  );

}


export default PosterPhoto;