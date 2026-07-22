import { useFormContext } from "react-hook-form";

import BulletinGeneral from "../BulletinGeneral";
import BulletinPersonalData from "../BulletinPersonalData";
import BulletinRecords from "../BulletinRecords";
import BulletinResolution from "../BulletinResolution";
import BulletinTimeline from "../BulletinTimeline";
import BulletinFlight from "../BulletinFlight";
import BulletinObservations from "../BulletinObservations";
import Checkbox from "@/components/ui/Checkbox";

import Button from "@/components/ui/Button";

function BulletinForm() {
  const methods = useFormContext();
  const { watch } = methods;

  const onSubmit = (data) => {
    console.clear();

    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
      <BulletinGeneral />

      <BulletinPersonalData />

      <Checkbox name="showRecords" label="Agregar antecedentes" />

      {watch("showRecords") && <BulletinRecords />}

      <BulletinResolution />

      <BulletinTimeline />

      <Checkbox name="showFlight" label="Información de vuelo" />

      {watch("showFlight") && <BulletinFlight />}

      <BulletinObservations />

      <div
        className="
        flex
        justify-end
        gap-4
        border-t
        pt-6
      "
      ></div>
    </form>
  );
}

export default BulletinForm;
