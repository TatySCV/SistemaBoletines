import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import genders from "@/data/genders";
import documentTypes from "@/data/documentTypes";
import SearchSelect from "@/components/ui/SearchSelect";
import countries from "@/data/countries";

function BulletinPersonalData() {
  const { watch, setValue } = useFormContext();

  const birthDate = watch("birthDate");

  useEffect(() => {
    if (!birthDate) {
      setValue("age", "");
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    setValue("age", age);
  }, [birthDate, setValue]);

  return (
    <Section title="Datos Personales" subtitle="Información de identificación.">
      <div className="grid grid-cols-2 gap-5">
        <Input name="firstName" label="Nombres" required />

        <Input name="lastName" label="Apellidos" required />

        <Input name="alias" label="Alias" />

        <SearchSelect
          name="nationality"
          label="Nacionalidad"
          options={countries}
        />

        <Select name="gender" label="Sexo" options={genders} />

        <Input type="date" name="birthDate" label="Fecha de nacimiento" />

        <Input name="age" label="Edad" readOnly />

        <Select
          name="documentType"
          label="Tipo de documento"
          options={documentTypes}
        />

        <div className="col-span-2">
          <Input name="documentNumber" label="Número de documento" />
        </div>
      </div>
    </Section>
  );
}

export default BulletinPersonalData;
