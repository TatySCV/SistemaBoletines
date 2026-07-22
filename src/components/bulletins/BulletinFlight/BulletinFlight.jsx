import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import SearchSelect from "@/components/ui/SearchSelect";

import airlines from "@/data/airlines";

function BulletinFlight() {
  return (
    <Section
      title="Información del Vuelo"
      subtitle="Complete los datos sólo si existe información de vuelo."
    >
      <div className="grid grid-cols-2 gap-5">

        <SearchSelect
          name="flight.airline"
          label="Aerolínea"
          options={airlines}
        />

        <Input
          name="flight.flightNumber"
          label="Número de vuelo"
        />

        <Input
          name="flight.origin"
          label="Origen"
        />

        <Input
          name="flight.destination"
          label="Destino"
        />

        <Input
          type="datetime-local"
          name="flight.departure"
          label="Salida"
        />

        <Input
          type="datetime-local"
          name="flight.arrival"
          label="Llegada"
        />

      </div>
    </Section>
  );
}

export default BulletinFlight;