import { FormProvider, useForm } from "react-hook-form";

import defaultValues from "@/forms/bulletin/defaultValues";

import BulletinForm from "../BulletinForm";

function BulletinEditor() {

  const methods = useForm({
    defaultValues,
    mode: "onBlur",
  });


  return (
    <FormProvider {...methods}>

      <div className="space-y-8">

        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Nuevo Boletín
          </h1>

          <p className="text-slate-500 mt-2">
            Complete la información para generar el boletín.
          </p>
        </div>


        {/* EDITOR */}

        <div className="
          grid
          grid-cols-1
          xl:grid-cols-[1fr_600px]
          gap-8
        ">

          {/* FORMULARIO */}

          <div>

            <BulletinForm />

          </div>


          {/* PREVIEW */}

          <div className="
            hidden
            xl:block
          ">

            <div className="
              sticky
              top-8
              rounded-2xl
              border
              bg-white
              p-5
              shadow-sm
            ">

              <h2 className="font-semibold mb-4">
                Vista previa
              </h2>


              <div className="
                flex
                h-[800px]
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-400
              ">

                Afiche aquí

              </div>


            </div>

          </div>


        </div>


      </div>


    </FormProvider>
  );
}


export default BulletinEditor;