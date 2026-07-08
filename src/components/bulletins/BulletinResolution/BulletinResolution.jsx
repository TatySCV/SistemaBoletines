import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import SearchSelect from "@/components/ui/SearchSelect";

import yesNo from "@/data/yesNo";
import bulletinStatus from "@/data/bulletinStatus";
import migrationServices from "@/data/migrationServices";

function BulletinResolution() {
  return (
    <Section
      title="Resolución de Expulsión"
      subtitle="Información de la resolución administrativa."
    >
      <div className="grid grid-cols-2 gap-5">

        <Input
          name="resolutionNumber"
          label="Resolución Exenta N°"
          required
        />


        <Select
          name="resolutionRectified"
          label="¿Rectificada?"
          options={yesNo}
        />


        <Input
          type="date"
          name="resolutionDate"
          label="Fecha Resolución"
        />


        <SearchSelect
          name="issuingService"
          label="Servicio que dicta"
          options={migrationServices}
        />


        <Select
          name="resolutionStatus"
          label="Estado"
          options={bulletinStatus}
        />


      </div>
    </Section>
  );
}

export default BulletinResolution;