const generalFields = [
  {
    name: "bulletinDate",
    label: "Fecha del boletín",
    type: "date",
    required: true,
  },
  {
    name: "status",
    label: "Estado",
    type: "select",
    required: true,
    options: [
      {
        value: "vigente",
        label: "Expulsión Vigente",
      },
      {
        value: "cumplida",
        label: "Expulsión Cumplida",
      },
      {
        value: "revocada",
        label: "Revocada",
      },
    ],
  },
];

export default generalFields;