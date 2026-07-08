const resolutionFields = [
  {
    name: "resolutionNumber",
    label: "Resolución Exenta N°",
    type: "text",
    required: true,
  },
  {
    name: "resolutionDate",
    label: "Fecha Resolución",
    type: "date",
    required: true,
  },
  {
    name: "issuingService",
    label: "Servicio que dicta",
    type: "text",
    required: true,
  },
  {
    name: "resolutionStatus",
    label: "Estado",
    type: "select",
    required: true,
    options: [
      { value: "vigente", label: "Expulsión Vigente" },
      { value: "cumplida", label: "Expulsión Cumplida" },
      { value: "revocada", label: "Revocada" },
    ],
  },
];