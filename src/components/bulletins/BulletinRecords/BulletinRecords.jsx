import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import SearchSelect from "@/components/ui/SearchSelect";
import Input from "@/components/ui/Input";

import countries from "@/data/countries";

const recordTypes = [
  {
    value: "chile",
    label: "Chile",
  },
  {
    value: "international",
    label: "Internacional",
  },
];

function RecordItem({ index, total, remove }) {
  const { control, watch, setValue } = useFormContext();

  const type = watch(`records.${index}.type`);

  useEffect(() => {
    if (type === "chile") {
      setValue(`records.${index}.country`, "Chile");
    } else {
      const current = watch(`records.${index}.country`);

      if (current === "Chile") {
        setValue(`records.${index}.country`, "");
      }
    }
  }, [type]);

  return (
    <div className="rounded-xl border p-5 space-y-4">

      <div className="grid grid-cols-2 gap-5">

        <Select
          name={`records.${index}.type`}
          label="Tipo"
          options={recordTypes}
        />

        {
          type === "international" ? (
            <SearchSelect
              name={`records.${index}.country`}
              label="País"
              options={countries}
            />
          ) : (
            <Input
              name={`records.${index}.country`}
              label="País"
              disabled
            />
          )
        }

        <div className="col-span-2">

          <Input
            name={`records.${index}.description`}
            label="Descripción"
          />

        </div>

      </div>

      {
        total > 1 && (
          <Button
            type="button"
            variant="danger"
            onClick={() => remove(index)}
          >
            Eliminar antecedente
          </Button>
        )
      }

    </div>
  );
}

function BulletinRecords() {

  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "records",
  });

  return (

    <Section
      title="Antecedentes"
      subtitle="Agregue uno o más antecedentes."
    >

      <div className="space-y-6">

        {
          fields.map((field, index) => (

            <RecordItem
              key={field.id}
              index={index}
              total={fields.length}
              remove={remove}
            />

          ))
        }

        <Button
          type="button"
          onClick={() =>
            append({
              type: "chile",
              country: "Chile",
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

export default BulletinRecords;