const defaultValues = {
  bulletinDate: "",
  firstName: "",
  lastName: "",
  alias: "",
  nationality: "",
  gender: "",
  birthDate: "",
  age: "",
  documentType: "",
  documentNumber: "",

  resolutionNumber: "",
  resolutionDate: "",
  issuingService: "",
  status: "",

  photo: null,

  showRecords: false,
  showFlight: false,

  records: [],

  timeline: [
    {
      eventDate: "",
      description: "",
    },
  ],

  flight: {
    airline: "",
    flightNumber: "",
    origin: "",
    destination: "",
    departure: "",
    arrival: "",
  },

  observations: "",
};

export default defaultValues;