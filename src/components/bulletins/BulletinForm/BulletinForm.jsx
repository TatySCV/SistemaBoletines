import { FormProvider, useForm } from "react-hook-form";

import defaultValues from "@/forms/bulletin/defaultValues";

import BulletinPersonalData from "@/components/bulletins/BulletinPersonalData";
import BulletinPhoto from "@/components/bulletins/BulletinPhoto";
import BulletinExpulsion from "@/components/bulletins/BulletinExpulsions";
import BulletinBackground from "@/components/bulletins/BulletinBackground";
import BulletinObservations from "@/components/bulletins/BulletinObservations";

import Button from "@/components/ui/Button";

function BulletinForm() {
  const methods = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <BulletinPersonalData />

        <BulletinPhoto />

        <BulletinExpulsion />

        <BulletinBackground />

        <BulletinObservations />

        <div className="flex justify-end">
          <Button type="submit">
            Generar Boletín
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default BulletinForm;