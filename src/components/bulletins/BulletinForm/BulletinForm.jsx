import { useFormContext } from "react-hook-form";


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


  const methods = useFormContext();


  const onSubmit = (data) => {

    console.clear();

    console.log(data);

  };


  return (

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


      <div className="
        flex
        justify-end
        gap-4
        border-t
        pt-6
      ">


        <Button
          variant="secondary"
          type="button"
        >

          Cancelar

        </Button>


        <Button type="submit">

          Guardar Boletín

        </Button>


      </div>


    </form>

  );

}


export default BulletinForm;