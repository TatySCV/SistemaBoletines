import { FormProvider, useForm } from "react-hook-form";

import defaultValues from "@/forms/bulletin/defaultValues";

import BulletinForm from "../BulletinForm";
import BulletinPoster from "../BulletinPoster";


function BulletinEditor() {

  const methods = useForm({
    defaultValues,
    mode: "onBlur",
  });


  const bulletinData = methods.watch();


  return (

    <FormProvider {...methods}>


      <div className="space-y-8">


        {/* HEADER */}

        <div>

          <h1 className="text-3xl font-bold text-slate-800">

            Nuevo Boletín

          </h1>


          <p className="mt-2 text-slate-500">

            Complete la información para generar el boletín.

          </p>


        </div>




        {/* EDITOR */}

        <div
          className="
          grid
          grid-cols-1
          gap-8
          xl:grid-cols-[1fr_600px]
        "
        >



          {/* FORM */}

          <div>

            <BulletinForm />

          </div>





          {/* POSTER */}

          <div className="hidden xl:block">


            <div
              className="
              sticky
              top-8
              rounded-2xl
              border
              bg-white
              p-5
              shadow-sm
            "
            >


              <div className="mb-4">


                <h2 className="font-semibold">

                  Vista previa

                </h2>


                <p className="text-sm text-slate-500">

                  El boletín se actualiza automáticamente.

                </p>


              </div>




              <div
                className="
                flex
                justify-center
                overflow-auto
                rounded-xl
                bg-slate-100
                p-5
              "
              >

                <BulletinPoster
                  data={bulletinData}
                />


              </div>



            </div>


          </div>


        </div>


      </div>


    </FormProvider>

  );

}


export default BulletinEditor;