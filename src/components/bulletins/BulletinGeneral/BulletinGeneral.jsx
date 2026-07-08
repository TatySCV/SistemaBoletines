import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import bulletinStatus from "@/data/bulletinStatus";
import generalFields from "@/forms/bulletin/generalFields";

import FileUpload from "@/components/ui/FileUpload";

function BulletinGeneral() {
  return (
    <Section
      title="Información General"
      subtitle="Información principal del boletín."
    >
      <div className="grid grid-cols-2 gap-5">

        {generalFields.map((field) => {

          if (field.type === "select") {
            return (
              <Select
    name="status"
    label="Estado"
    options={bulletinStatus}
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

        <div className="col-span-2">

          <FileUpload
            name="photo"
            label="Fotografía"
          />

        </div>

      </div>
    </Section>
  );
}

export default BulletinGeneral;