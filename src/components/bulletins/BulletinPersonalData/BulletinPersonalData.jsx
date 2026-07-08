import Input from "@/components/ui/Input";
import Section from "@/components/ui/Section";
import Select from "@/components/ui/Select";

function BulletinPersonalData() {
  return (
    <Section
      title="Datos personales"
      subtitle="Información básica de la persona."
    >
      <div className="grid grid-cols-2 gap-5">
        <Input
          name="firstName"
          label="Nombres"
          required
          placeholder="Ingrese los nombres"
        />

        <Input
          name="lastName"
          label="Apellidos"
          required
          placeholder="Ingrese los apellidos"
        />

        <Input
          name="document"
          label="Documento"
          placeholder="Ingrese el documento"
        />

        <Select
          name="sex"
          label="Sexo"
          options={[
            {
              value: "M",
              label: "Masculino",
            },
            {
              value: "F",
              label: "Femenino",
            },
          ]}
        />

        <Input
          name="birthDate"
          type="date"
          label="Fecha de nacimiento"
        />

        <Input
          name="nationality"
          label="Nacionalidad"
          placeholder="Ingrese la nacionalidad"
        />
      </div>
    </Section>
  );
}

export default BulletinPersonalData;