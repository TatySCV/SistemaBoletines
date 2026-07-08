const defaultValues = {
  // -----------------------------
  // Información General
  // -----------------------------

  bulletinDate: "",

  status: "vigente",

  photo: null,

  // -----------------------------
  // Datos Personales
  // -----------------------------

  firstName: "",
  lastName: "",
  alias: "",

  nationality: "",

  birthDate: "",

  age: "",

  gender: "",

  documentType: "",

  documentNumber: "",

  // -----------------------------
  // Antecedente Internacional
  // -----------------------------

  hasInternationalRecord: false,

  internationalCountry: "",

  internationalRecord: "",

  // -----------------------------
  // Antecedente Penal Chile
  // -----------------------------

  hasChileRecord: false,

  chileRecord: "",

  // -----------------------------
  // Resolución
  // -----------------------------

  resolutionNumber: "",

  resolutionRectified: false,

  resolutionDate: "",

  issuingService: "",

  resolutionStatus: "vigente",

  // -----------------------------
  // Línea de tiempo
  // -----------------------------

  timeline: [
    {
      date: "",
      description: "",
    },
  ],

  // -----------------------------
  // Vuelo
  // -----------------------------

  hasFlight: false,
  
  airline: "",

  flightNumber: "",

  origin: "",

  destination: "",

  departure: "",

  arrival: "",

  // -----------------------------
  // Observaciones
  // -----------------------------

  observations: "",
};

export default defaultValues;
