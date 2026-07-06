import Section from "@/components/ui/Section";
import FileUpload from "@/components/ui/FileUpload";
import { useState } from "react";

function BulletinPhoto() {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Section
      title="Fotografía"
      subtitle="Suba una fotografía reciente."
    >
      <FileUpload
        label="Imagen de la persona"
        preview={preview}
        onChange={handleChange}
      />
    </Section>
  );
}

export default BulletinPhoto;