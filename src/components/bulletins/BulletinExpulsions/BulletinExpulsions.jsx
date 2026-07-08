import { useFieldArray, useFormContext } from "react-hook-form";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

import ExpulsionItem from "../ExpulsionItem";

function BulletinExpulsion() {

  const { control } = useFormContext();

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "expulsions",
  });

  return (
    <Section
      title="Expulsiones"
      subtitle="Puede agregar una o más expulsiones."
    >

      <div className="space-y-5">

        {fields.map((field, index) => (

          <ExpulsionItem
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
              decree: "",
              reason: "",
            })
          }
        >
          + Agregar expulsión
        </Button>

      </div>

    </Section>
  );
}

export default BulletinExpulsion;