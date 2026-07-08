import personalFields from "@/forms/bulletin/personalFields";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Section from "@/components/ui/Section";

function BulletinPersonalData() {
  return (
    <Section
      title="Datos personales"
      subtitle="Información básica de la persona."
    >
      <div className="grid grid-cols-2 gap-5">
        {personalFields.map((field) => {

          if (field.type === "select") {
            return (
              <Select
                key={field.name}
                {...field}
              />
            );
          }

          return (
            <Input
              key={field.name}
              {...field}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default BulletinPersonalData;