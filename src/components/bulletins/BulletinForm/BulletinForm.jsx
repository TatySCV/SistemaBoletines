import { FormProvider, useForm } from "react-hook-form";

import defaultValues from "@/forms/bulletin/defaultValues";

import BulletinGeneral from "../BulletinGeneral";
import BulletinPersonalData from "../BulletinPersonalData";
import BulletinInternationalRecord from "../BulletinInternationalRecord";
import BulletinChileRecord from "../BulletinChileRecord";
import BulletinResolution from "../BulletinResolution";
import BulletinTimeline from "../BulletinTimeline";
import BulletinFlight from "../BulletinFlight";
import BulletinObservations from "../BulletinObservations";

import Button from "@/components/ui/Button";

function BulletinForm() {
  const methods = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.clear();
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <BulletinGeneral />

        <BulletinPersonalData />

        <BulletinInternationalRecord />

        <BulletinChileRecord />

        <BulletinResolution />

        <BulletinTimeline />

        <BulletinFlight />

        <BulletinObservations />

        <div className="flex justify-end gap-4 pt-4 border-t border-slate-200">
          <Button variant="secondary" type="button">
            Vista previa
          </Button>

          <Button variant="secondary" type="button">
            Guardar borrador
          </Button>

          <Button type="submit">
            Generar boletín
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default BulletinForm;