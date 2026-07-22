import { FormProvider, useForm } from "react-hook-form";

import { useRef } from "react";

import { createBulletin } from "@/services/bulletins";

import { exportPosterJPG } from "@/utils/export/posterExport";

import defaultValues from "@/forms/bulletin/defaultValues";

import BulletinForm from "../BulletinForm";
import BulletinPoster from "../BulletinPoster";

function BulletinEditor() {
  const exportRef = useRef(null);

  const methods = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const bulletinData = methods.watch();

  async function handleDownload() {
    try {
      const values = methods.getValues();

      // 1. GUARDAR BD

      const saved = await createBulletin(values);

      console.log("BOLETÍN GUARDADO:", saved);

      // 2. DESCARGAR JPG GRANDE

      await exportPosterJPG(
  exportRef.current,
  `${values.firstName}-${values.lastName}`
);

      alert("Boletín generado correctamente");
    } catch (error) {
      console.error(error);

      alert("Error al generar boletín");
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Nuevo Boletín</h1>

          <p className="mt-2 text-slate-500">
            Complete la información para generar el boletín.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          gap-8
          xl:grid-cols-[1fr_600px]
          "
        >
          {/* FORM */}

          <BulletinForm />

          {/* PREVIEW */}

          <div className="hidden xl:block">
            <div
              className="
              sticky
              top-8
              rounded-2xl
              bg-white
              p-5
              shadow
              "
            >
              <h2 className="font-bold">Vista previa</h2>

              <div className="flex gap-3 my-4">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="
                  bg-[#003B70]
                  text-white
                  rounded-xl
                  px-4
                  py-2
                  "
                >
                  Descargar JPG
                </button>
              </div>

              <div
                className="
                overflow-y-auto
                overflow-x-hidden
                max-h-[80vh]
                bg-slate-100
                rounded-xl
                p-5
                "
              >
                <div
                  className="
                  scale-[0.55]
                  origin-top-left
                  "
                >
                  <BulletinPoster data={bulletinData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPORT JPG OCULTO */}

        <div
          className="
          fixed
          -left-[9999px]
          top-0
          "
        >
          <BulletinPoster ref={exportRef} data={bulletinData} exportMode />
        </div>
      </div>
    </FormProvider>
  );
}

export default BulletinEditor;
