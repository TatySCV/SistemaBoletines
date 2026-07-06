import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

function BulletinPersonalData() {
  return (
    <Card
      title="Datos personales"
      subtitle="Información básica de la persona."
    >
      <div className="grid grid-cols-2 gap-5">
        <Input
          label="Nombres"
          required
          placeholder="Ingrese nombres"
        />

        <Input
          label="Apellidos"
          required
          placeholder="Ingrese apellidos"
        />

        <Input
          label="RUN / Documento"
          placeholder="Ingrese documento"
        />

        <Select
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
          type="date"
          label="Fecha de nacimiento"
        />

        <Input
          label="Nacionalidad"
          placeholder="Ingrese nacionalidad"
        />
      </div>
    </Card>
  );
}

export default BulletinPersonalData;