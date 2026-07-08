import { useFormContext } from "react-hook-form";

import Section from "@/components/ui/Section";
import Select from "@/components/ui/Select";
import SearchSelect from "@/components/ui/SearchSelect";
import Input from "@/components/ui/Input";
import yesNo from "@/data/yesNo";
import countries from "@/data/countries";

function BulletinInternationalRecord() {
  const { watch } = useFormContext();

  const hasRecord = watch("hasInternationalRecord");

  return (
    <Section
      title="Antecedentes Internacionales"
      subtitle="Información de antecedentes en otro país."
    >
      <div className="grid grid-cols-2 gap-5">

        <Select
          name="hasInternationalRecord"
          label="¿Posee antecedentes internacionales?"
          options={yesNo}
        />

        {hasRecord && (
          <>
            <SearchSelect
              name="internationalCountry"
              label="País"
              options={countries}
            />

            <div className="col-span-2">
              <Input
                name="internationalRecord"
                label="Descripción"
              />
            </div>
          </>
        )}

      </div>
    </Section>
  );
}

export default BulletinInternationalRecord;