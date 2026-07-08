import { useFormContext } from "react-hook-form";
import yesNo from "@/data/yesNo";
import Section from "@/components/ui/Section";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";

function BulletinChileRecord() {
  const { watch } = useFormContext();

  const hasRecord = watch("hasChileRecord");

  return (
    <Section
      title="Antecedentes Penales en Chile"
      subtitle="Información de antecedentes penales."
    >
      <div className="grid grid-cols-2 gap-5">

        <Select
          name="hasChileRecord"
          label="¿Posee antecedentes penales?"
          options={yesNo}
        />

        {hasRecord && (
          <div className="col-span-2">
            <Input
              name="chileRecord"
              label="Descripción"
            />
          </div>
        )}

      </div>
    </Section>
  );
}

export default BulletinChileRecord;