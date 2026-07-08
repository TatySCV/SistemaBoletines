import { useFieldArray, useFormContext } from "react-hook-form";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

import BackgroundItem from "../BackgroundItem";

function BulletinBackground() {
  const { control } = useFormContext();

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "antecedentes",
  });

  return (
    <Section
      title="Antecedentes"
      subtitle="Puede agregar uno o más antecedentes."
    >
      <div className="space-y-5">
        {fields.map((field, index) => (
          <BackgroundItem
            key={field.id}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}

        <Button
          type="button"
          onClick={() =>
            append({
              type: "",
              date: "",
              description: "",
            })
          }
        >
          + Agregar antecedente
        </Button>
      </div>
    </Section>
  );
}

export default BulletinBackground;