function BulletinPoster({ data }) {


  return (

    <div
      className="
      w-[500px]
      min-h-[750px]
      bg-white
      border
      shadow
      p-6
      "
    >


      {/* TITULO */}

      <h1
        className="
        text-center
        text-xl
        font-black
        text-[#003B70]
      "
      >

        EXPULSIÓN DE EXTRANJERO

      </h1>





      {/* DATOS PERSONALES */}

      <section className="mt-6">


        <h2 className="font-bold text-sm">

          DATOS PERSONALES

        </h2>


        <p className="mt-2">

          {
            data.firstName ||
            "Nombres"
          }

          {" "}

          {
            data.lastName ||
            "Apellidos"
          }

        </p>


        <p className="text-sm">

          Nacionalidad:{" "}

          {
            data.nationality ||
            "-"
          }

        </p>


        <p className="text-sm">

          Documento:{" "}

          {
            data.documentNumber ||
            "-"
          }

        </p>


      </section>





      {/* INTERNACIONAL */}

      {
        data.hasInternationalRecord && (

          <section className="mt-6">


            <h2 className="font-bold text-sm">

              ANTECEDENTES EN{" "}

              {
                data.internationalCountry
                  ?.toUpperCase()
              }


            </h2>


            <p className="text-sm mt-2">

              {data.internationalRecord}

            </p>


          </section>

        )
      }





      {/* CHILE */}

      {
        data.hasChileRecord && (

          <section className="mt-6">


            <h2 className="font-bold text-sm">

              ANTECEDENTE PENAL EN CHILE

            </h2>


            <p className="text-sm mt-2">

              {data.chileRecord}

            </p>


          </section>

        )
      }


    </div>

  );

}


export default BulletinPoster;