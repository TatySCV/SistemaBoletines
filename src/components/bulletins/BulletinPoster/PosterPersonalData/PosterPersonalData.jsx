import { upper } from "@/utils/formatters";

function DataItem({ label, value }) {
  return (
    <div
      className="
      border-b
      border-slate-200
      pb-3
      "
    >

      <p
        className="
        text-[11px]
        font-black
        text-[#001b4d]
        uppercase
        "
      >
        {label}
      </p>


      <p
        className="
        text-sm
        font-medium
        text-black
        mt-1
        "
      >
        {upper(value) || "-"}
      </p>


    </div>
  );
}



function PosterPersonalData({ data }) {

  return (

    <section
      className="
      rounded-xl
      overflow-hidden
      border
      bg-white
      "
    >


      {/* HEADER */}

      <div
        className="
        bg-[#001b4d]
        text-white
        px-5
        py-3
        font-black
        "
      >

        DATOS PERSONALES

      </div>




      {/* BODY */}

      <div
        className="
        grid
        grid-cols-2
        gap-5
        p-5
        "
      >


        <DataItem
          label="NOMBRES"
          value={data.firstName}
        />


        <DataItem
          label="NACIONALIDAD"
          value={data.nationality}
        />



        <DataItem
          label="APELLIDOS"
          value={data.lastName}
        />



        <DataItem
          label="FECHA NACIMIENTO"
          value={data.birthDate}
        />



        <DataItem
          label="TIPO DOCUMENTO"
          value={data.documentType}
        />



        <DataItem
          label="GÉNERO"
          value={data.gender}
        />



        <DataItem
          label="NÚMERO DOCUMENTO"
          value={data.documentNumber}
        />


      </div>


    </section>

  );

}


export default PosterPersonalData;