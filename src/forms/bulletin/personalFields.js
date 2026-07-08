const personalFields = [
  {
    name: "firstName",
    label: "Nombres",
    type: "text",
    required: true,
    colSpan: 1,
  },
  {
    name: "lastName",
    label: "Apellidos",
    type: "text",
    required: true,
    colSpan: 1,
  },
  {
    name: "document",
    label: "Documento",
    type: "text",
    required: false,
    colSpan: 1,
  },
  {
    name: "birthDate",
    label: "Fecha de nacimiento",
    type: "date",
    required: false,
    colSpan: 1,
  },
  {
    name: "nationality",
    label: "Nacionalidad",
    type: "text",
    required: false,
    colSpan: 1,
  },
  {
    name: "sex",
    label: "Sexo",
    type: "select",
    required: false,
    colSpan: 1,
    options: [
      {
        value: "M",
        label: "Masculino",
      },
      {
        value: "F",
        label: "Femenino",
      },
    ],
  },
];

export default personalFields;