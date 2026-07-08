import {
  useFieldArray,
  useFormContext,
} from "react-hook-form";


import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";


import TimelineItem from "../TimelineItem";


function BulletinTimeline() {


  const { control } = useFormContext();


  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "timeline",
  });


  return (
    <Section
      title="Línea de Tiempo"
      subtitle="Eventos relevantes del proceso."
    >

      <div className="space-y-5">


        {fields.map((field, index) => (

          <TimelineItem

            key={field.id}

            index={index}

            onRemove={() =>
              remove(index)
            }

          />

        ))}


        <Button
          type="button"
          onClick={() =>
            append({
              date: "",
              description: "",
            })
          }
        >

          + Agregar evento

        </Button>


      </div>

    </Section>
  );
}


export default BulletinTimeline;