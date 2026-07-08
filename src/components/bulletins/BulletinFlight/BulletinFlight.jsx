import { useFormContext } from "react-hook-form";

import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import SearchSelect from "@/components/ui/SearchSelect";

import airlines from "@/data/airlines";
import yesNo from "@/data/yesNo";


function BulletinFlight() {

  const { watch } = useFormContext();


  const hasFlight = watch("hasFlight");


  return (

    <Section
      title="Información del Vuelo"
      subtitle="Datos asociados al traslado aéreo."
    >

      <div className="grid grid-cols-2 gap-5">


        <Select
          name="hasFlight"
          label="¿Posee información de vuelo?"
          options={yesNo}
        />


        {
          hasFlight && (

            <>

              <SearchSelect
                name="airline"
                label="Aerolínea"
                options={airlines}
              />


              <Input
                name="flightNumber"
                label="Número de vuelo"
              />


              <Input
                name="origin"
                label="Origen"
              />


              <Input
                name="destination"
                label="Destino"
              />


              <Input
                type="datetime-local"
                name="departure"
                label="Salida"
              />


              <Input
                type="datetime-local"
                name="arrival"
                label="Llegada"
              />


            </>

          )
        }


      </div>


    </Section>

  );

}


export default BulletinFlight;