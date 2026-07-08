const bulletinMock = {
  bulletinDate: "2026-07-05",

  status: "Expulsión Vigente",

  photo: null,

  // Persona

  firstName: "IVÁN DARÍO",

  lastName: "EJEMPLO PRUEBA",

  alias: "",

  nationality: "Colombia",

  birthDate: "1990-01-01",

  age: 36,

  gender: "Masculino",

  documentType: "Pasaporte",

  documentNumber: "AB123456",


  // Internacional

  hasInternationalRecord: true,

  internationalCountry: "Colombia",

  internationalRecord:
    "Registra antecedentes por delitos asociados a tráfico de drogas y otros hechos investigados.",


  // Chile

  hasChileRecord: true,

  chileRecord:
    "Registra antecedentes penales en territorio nacional.",


  // Resolución

  resolutionNumber: "12345",

  resolutionRectified: true,

  resolutionDate: "2026-07-01",

  issuingService:
    "Servicio Nacional de Migraciones",

  resolutionStatus:
    "Expulsión Vigente",


  // Timeline

  timeline: [
    {
      date: "2026-02-02",
      description:
        "Ingreso de antecedentes administrativos.",
    },

    {
      date: "2026-03-15",
      description:
        "Notificación de resolución.",
    },

    {
      date: "2026-07-02",
      description:
        "Programación de expulsión.",
    },
  ],


  // Vuelo

  hasFlight: true,

  airline: "LATAM",

  flightNumber: "LA500",

  origin: "Santiago",

  destination: "Bogotá",

  departure:
    "2026-07-10T08:00",

  arrival:
    "2026-07-10T12:30",


  // Sistema

  observations:
    "Observación interna.",
};


export default bulletinMock;